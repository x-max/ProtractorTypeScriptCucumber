import { browser, element, by } from "protractor";
import { async } from "q";
import { Calculator } from "./pageObjects/calculator";
import { clearScreenDown } from "readline";
import { AngularHomePage } from "./pageObjects/angularHomePage";

describe('Chain locators demo', () => {

  it('Open Angular js website', async () => {

    let calc = new Calculator();
    await browser.get('http://juliemr.github.io/protractor-demo/');



    await calc.firstEditBox.sendKeys('5');
    await calc.minus.click();
    await calc.secondEditBox.sendKeys('10');
    await calc.goBtn.click();


    calc.getResult.getText().then(function (text) {
      console.log(text);
    })

  });

  it('Angular home page title validation', async () => {
    let ang = new AngularHomePage();
    await browser.get('https://angularjs.org/');
    await ang.angularLink.click();
    await ang.searchBox.sendKeys("hello");
  })
});