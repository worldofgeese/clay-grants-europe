import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { validateInitData } from "../src/telegram.js";
const BOT_TOKEN = "123456:ABCDEF_test_token";
function buildInitData(data, botToken) {
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
describe("validateInitData", () => {
    it("rejects when hash is missing", () => {
        const result = validateInitData("auth_date=1", BOT_TOKEN);
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.reason).toBe("missing_hash");
        }
    });
    it("rejects when auth_date is stale", () => {
        const now = 1_700_000_000;
        const initData = buildInitData({
            auth_date: String(now - 120),
            query_id: "AAHtest",
            user: JSON.stringify({ id: 42, first_name: "Ada" }),
        }, BOT_TOKEN);
        const result = validateInitData(initData, BOT_TOKEN, {
            maxAgeSeconds: 60,
            now,
        });
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.reason).toBe("stale_auth_date");
        }
    });
    it("accepts valid initData and parses user", () => {
        const now = 1_700_000_000;
        const initData = buildInitData({
            auth_date: String(now),
            query_id: "AAHtest",
            user: JSON.stringify({ id: 7, first_name: "Grace" }),
        }, BOT_TOKEN);
        const result = validateInitData(initData, BOT_TOKEN, { now });
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.user?.id).toBe(7);
            expect(result.authDate).toBe(now);
        }
    });
});
