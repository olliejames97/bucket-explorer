describe("Test bucket selection form", () => {
  it("Uses API's bucket by default", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-cy='SelectedBucketText']").should(
      "contain",
      "Using API's default bucket"
    );
  });
  it("Can set a different bucket", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-cy='ChangeBucketButton']").click();
    fillInForm("fake-bucket");
    cy.get("[data-cy='SubmitButton']").click();
    cy.get("[data-cy='SelectedBucketText']").should("contain", "fake-bucket");
  });

  it("Can store users bucket data", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-cy='ChangeBucketButton']").click();
    fillInForm("fake-bucket-2");
    cy.get("[data-cy='ShouldStoreCheckbox']").click();
    cy.get("[data-cy='SubmitButton']").click();
    cy.reload();
    cy.get("[data-cy='SelectedBucketText']").should("contain", "fake-bucket-2");
  });

  it("Can clear selected bucket", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-cy='ChangeBucketButton']").click();
    fillInForm("fake-bucket-2");
    cy.get("[data-cy='SubmitButton']").click();
    cy.get("[data-cy='SelectedBucketText']").should("contain", "fake-bucket-2");
    cy.get("[data-cy='ChangeBucketButton']").click();
    cy.get("[data-cy='ClearButton']").click();
    cy.get("[data-cy='SelectedBucketText']").should(
      "not.contain",
      "fake-bucket-2"
    );
  });
});

const fillInForm = (bucketName: string) => {
  cy.get("input[name='bucketName']").type(bucketName);
  cy.get("input[name='region']").type("fake-region");
  cy.get("input[name='accessKeyId']").type("FAKE_ACCESS");
  cy.get("input[name='accessKeySecret']").type("FAKE_SECRET");
};
