"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.Calculator();
let ang = new angularHomePage_1.AngularHomePage();
cucumber_1.Given('I have navigated to {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'calc') {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == 'Angular') {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.goBtn.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('I click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.angularLink.click();
}));
cucumber_1.When('I am redirected to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("Navigated to angular page");
}));
cucumber_1.Then('I enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.searchBox.sendKeys(string);
}));
