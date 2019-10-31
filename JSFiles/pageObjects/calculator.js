"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.firstEditBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondEditBox = protractor_1.element(protractor_1.by.model("second"));
        this.goBtn = protractor_1.element(protractor_1.by.id('gobutton'));
        this.getResult = protractor_1.element(protractor_1.by.repeater('result in memory')).element(protractor_1.by.css('td:nth-child(3)'));
        this.add = protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css('option:nth-child(1)'));
        this.devide = protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css('option:nth-child(2)'));
        this.module = protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css('option:nth-child(3)'));
        this.multiply = protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css('option:nth-child(4)'));
        this.minus = protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css('option:nth-child(5)'));
    }
}
exports.Calculator = Calculator;
