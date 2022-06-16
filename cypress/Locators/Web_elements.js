class google {
    elements = {
       logo: () => cy.xpath('//img[@alt="Google"]'),
       searchBar: () => cy.xpath('//input[@title="Search"]'),
       googleSearchBtn: () => cy.xpath('//input[@value="Google Search"]'),
       luckyBtn: () => cy.xpath('//input[@name="btnI"]'),
    };
  }
  module.exports = new google();
  