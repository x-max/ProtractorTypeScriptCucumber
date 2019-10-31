"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHomePage {
    constructor() {
        this.searchBox = protractor_1.element(protractor_1.by.css('input[type="search"]'));
        this.angularLink = protractor_1.element(protractor_1.by.linkText('angular.io'));
    }
}
exports.AngularHomePage = AngularHomePage;
