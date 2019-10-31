import { ElementFinder, element, by } from "protractor";

export class AngularHomePage {

    searchBox: ElementFinder;
    angularLink: ElementFinder;

    constructor() {

        this.searchBox = element(by.css('input[type="search"]'));
        this.angularLink = element(by.linkText('angular.io'));

    }
}