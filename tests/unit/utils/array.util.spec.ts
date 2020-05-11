import { getRandomElement } from "@/utils/array.util";

describe("array.util.ts", () => {
  it("gets random element from the array", () => {
    const nums: Array<number> = [1, 2, 3, 4, 5];

    const randomNum: number = getRandomElement(nums);

    expect(nums).toContain(randomNum);
  });
});
