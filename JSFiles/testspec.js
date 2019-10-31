"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.Calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys('5');
        yield calc.minus.click();
        yield calc.secondEditBox.sendKeys('10');
        yield calc.goBtn.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular home page title validation', () => __awaiter(this, void 0, void 0, function* () {
        let ang = new angularHomePage_1.AngularHomePage();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield ang.angularLink.click();
        yield ang.searchBox.sendKeys("hello");
    }));
});
