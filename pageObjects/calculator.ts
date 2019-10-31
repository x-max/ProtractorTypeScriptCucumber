import { ElementFinder, element, by } from "protractor";

export class Calculator {

    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    goBtn: ElementFinder;
    getResult: ElementFinder;

    add: ElementFinder;
    devide: ElementFinder;
    module: ElementFinder;
    multiply: ElementFinder;
    minus: ElementFinder;


    constructor() {
        this.firstEditBox = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.goBtn = element(by.id('gobutton'));
        this.getResult = element(by.repeater('result in memory')).element(by.css('td:nth-child(3)'));

        this.add = element(by.model('operator')).element(by.css('option:nth-child(1)'));
        this.devide = element(by.model('operator')).element(by.css('option:nth-child(2)'));
        this.module = element(by.model('operator')).element(by.css('option:nth-child(3)'));
        this.multiply = element(by.model('operator')).element(by.css('option:nth-child(4)'));
        this.minus = element(by.model('operator')).element(by.css('option:nth-child(5)'));
    }
} 