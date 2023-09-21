import { expect, test } from "bun:test";
import CurlImpersonate from ".";

test("Returns a successful response", async () => {
    let ci = new CurlImpersonate("https://google.com", {
        method: "GET",
        headers: {
            "user-agent": "Curl Impersonate -- Chrome 110"
        }
    });
    const req = await ci.makeRequest()

    expect(req).not.toEqual(null);
})