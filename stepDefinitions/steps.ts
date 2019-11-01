import { Given, When, Then } from "cucumber";
import { async } from "q";
import { Calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import { AngularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";

var expect = chai.expect;
let calc = new Calculator();
let ang = new AngularHomePage();

Given('I have navigated to {string} website', async (string) => {
    if (string == 'calc') {
        await browser.get("http://juliemr.github.io/protractor-demo/");
    } else if (string == 'Angular') {
        await browser.get("https://angularjs.org/");
    }

});

When('I add two numbers {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});

Then('the output displayed should be {string}', async (string) => {
    await calc.goBtn.click();
    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    })
});

When('I click on header link', async () => {
    await ang.angularLink.click();
});

When('I am redirected to angular page', async () => {
    await console.log("Navigated to angular page")
});


Then('I enter {string} in search box', async (string) => {
    await ang.searchBox.sendKeys(string);
});