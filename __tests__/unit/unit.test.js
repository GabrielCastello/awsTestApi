describe("basic unit test", () => {
  it(`should expect the sum of 1+1 to be 2`, async () => {
    const sum = 1 + 1;

    expect(sum).toBe(2);
  });

  it(`should expect the sum of 1+1 not to be 1`, async () => {
    const sum = 1 + 1;

    expect(sum).not.toBe(1);
  });
});
