describe("VRT demo test", function () {
  it("Test Google UI loads correctly", function (browser) {
    browser
      .navigateTo("https://www.google.co.uk")
      .assert.screenshotIdenticalToBaseline(
        "body",
        /* Optional */ "custom-name",
        { threshold: 0.0 },
        "VRT custom-name complete."
      )
      .end();
  });
});
