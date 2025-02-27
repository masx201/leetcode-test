import { assertEquals } from "asserts";

import { createFileReader4 } from "./createFileReader4.ts";
import solution from "./index.ts";

Deno.test("read-n-characters-given-read4", () => {
    const examples: Array<[string, number, number, string]> = [
        ["abc", 4, 3, "abc"],
        ["abcde", 5, 5, "abcde"],
        ["abcdABCD1234", 12, 12, "abcdABCD1234"],
        ["leetcode", 5, 5, "leetc"],
    ];

    for (const [file, n, count, content] of examples) {
        const read4 = createFileReader4(file);
        const buf = Array<string>(n).fill("");
        const result = solution(read4)(buf, n);

        assertEquals(result, count);

        assertEquals(buf.slice(0, count).join(""), content);
    }
});
Deno.test("read-n-characters-given-read4", () => {
    const file = "abcdefghijk";

    const read4 = createFileReader4(file);
    const res: string[] = [];
    while (true) {
        const buf = Array<string>(4).fill("");
        const count = read4(buf);
        if (count > 0) {
            res.push(buf.slice(0, count).join(""));
        } else {
            break;
        }
    }
    assertEquals(res, ["abcd", "efgh", "ijk"]);
});
