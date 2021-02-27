const fileName = "HelloWorld.rtf"; // the name of a file in the default bucket
const fileUrl = "https://test-bucket-oj.s3.amazonaws.com/HelloWorld.rtf";
describe("Test default buckets data", () => {
  it("Displays a file available in the default bucket", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("body").should("contain", fileName);
  });
  it("Has a clickable download link", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-cy='DownloadAnchor']")
      .first()
      .should("have.attr", "href", fileUrl);
    cy.get("[data-cy='DownloadButton']").first().click();
  });
});
