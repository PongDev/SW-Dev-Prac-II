describe("Hospitals", () => {
  it("Should have playing video and hospital page should have at least 3 images", () => {
    cy.visit("/");
    cy.get("video", { timeout: 10000 }).should("exist");
    cy.get("video").should("have.prop", "paused", false);
    cy.wait(5000);
    cy.get("button").contains("Pause").click();
    cy.get("video").should("have.prop", "paused", true);
    cy.get("button").contains("View Hospital Info").click();
    cy.get("img", { timeout: 10000 }).should("have.length.at.least", 3);
    //   cy.intercept(
    //     {
    //       method: "GET",
    //       url: "http://localhost:5001/api/v1/hospitals",
    //     },
    //     (req) => {
    //       delete req.headers["if-none-match"];
    //     }
    //   ).as("getHospitals");
    //   cy.visit("/");
    //   cy.get('a[href="/hospital"]', { timeout: 10000 }).should("exist");
    //   cy.get('a[href="/hospital"]').click();
    //   let hospitals: any[];
    //   cy.wait(2000);
    //   cy.wait("@getHospitals", { timeout: 10000 })
    //     .should(({ request, response }) => {
    //       expect(response?.statusCode).equal(200);
    //       expect(response?.body.data).be.not.null;
    //       expect(response?.body.data).to.be.instanceOf(Array);
    //       expect(response?.body.data).to.have.length(response?.body.count);
    //       hospitals = response?.body.data;
    //     })
    //     .then(() => {
    //       hospitals.forEach((hospital) => {
    //         cy.contains(hospital.name).should("be.visible");
    //       });
    //     });
  });
});
