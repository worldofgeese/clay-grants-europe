import { createHmac, timingSafeEqual } from "node:crypto";

export type TelegramUser = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
};

export type ValidationResult =
  | {
      ok: true;
      data: Record<string, string>;
      authDate?: number;
      user?: TelegramUser;
    }
  | {
      ok: false;
      reason:
        | "missing_hash"
        | "invalid_hash"
        | "missing_auth_date"
        | "stale_auth_date";
    };

const DEFAULT_MAX_AGE_SECONDS = 24 * 60 * 60;

function parseInitData(initData: string) {
  const params = new URLSearchParams(initData);
  const data: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    data[key] = value;
  }
  return data;
}

function buildDataCheckString(data: Record<string, string>) {
  return Object.entries(data)
    .filter(([key]) => key !== "hash")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");
}

function parseUser(rawUser?: string): TelegramUser | undefined {
  if (!rawUser) return undefined;
  try {
    return JSON.parse(rawUser) as TelegramUser;
  } catch {
    return undefined;
  }
}

export function validateInitData(
  initData: string,
  botToken: string,
  options?: { maxAgeSeconds?: number; now?: number }
): ValidationResult {
  const data = parseInitData(initData);
  const receivedHash = data.hash;
  if (!receivedHash) {
    return { ok: false, reason: "missing_hash" };
  }

  const dataCheckString = buildDataCheckString(data);
  const secretKey = createHmac("sha256", botToken)
    .update("WebAppData")
    .digest();
  const computedHash = createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  const receivedBuffer = Buffer.from(receivedHash, "hex");
  const computedBuffer = Buffer.from(computedHash, "hex");
  if (
    receivedBuffer.length !== computedBuffer.length ||
    !timingSafeEqual(receivedBuffer, computedBuffer)
  ) {
    return { ok: false, reason: "invalid_hash" };
  }

  const authDateRaw = data.auth_date;
  if (!authDateRaw) {
    return { ok: false, reason: "missing_auth_date" };
  }

  const authDate = Number(authDateRaw);
  const now = options?.now ?? Math.floor(Date.now() / 1000);
  const maxAgeSeconds = options?.maxAgeSeconds ?? DEFAULT_MAX_AGE_SECONDS;
  if (!Number.isFinite(authDate) || now - authDate > maxAgeSeconds) {
    return { ok: false, reason: "stale_auth_date" };
  }

  return {
    ok: true,
    data,
    authDate,
    user: parseUser(data.user),
  };
}
