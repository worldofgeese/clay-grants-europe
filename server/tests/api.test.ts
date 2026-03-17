import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { buildValidateResponse } from "../src/app.js";

const BOT_TOKEN = "123456:ABCDEF_test_token";

function buildInitData(data: Record<string, string>, botToken: string) {
  const dataCheckString = Object.entries(data)
    .filter(([key]) => key !== "hash")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  const secretKey = createHmac("sha256", botToken)
    .update("WebAppData")
    .digest();

  const hash = createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  return new URLSearchParams({ ...data, hash }).toString();
}

describe("POST /api/validate", () => {
  it("returns 400 when initData is missing", async () => {
    const response = buildValidateResponse(undefined, { botToken: BOT_TOKEN });
    expect(response.status).toBe(400);
    expect(response.body.ok).toBe(false);
  });

  it("returns 401 for invalid initData", async () => {
    const response = buildValidateResponse("auth_date=1&hash=bad", {
      botToken: BOT_TOKEN,
    });

    expect(response.status).toBe(401);
    expect(response.body.ok).toBe(false);
  });

  it("returns user data for valid initData", async () => {
    const now = 1_700_000_000;
    const initData = buildInitData(
      {
        auth_date: String(now),
        query_id: "AAHtest",
        user: JSON.stringify({ id: 99, first_name: "Jo" }),
      },
      BOT_TOKEN
    );

    const response = buildValidateResponse(initData, {
      botToken: BOT_TOKEN,
      now,
    });

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.user?.id).toBe(99);
  });
});
