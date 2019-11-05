"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CucumberReportExtension_1 = require("./reporting/CucumberReportExtension");
exports.config = {
    directConnect: true,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
    },
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: "true",
        //tags: "@CalculatorTesting",
        format: 'json:./reports/json/cucumber_report.json',
        require: [
            './stepDefinitions/*.js',
        ],
        onComplete: () => {
            CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
        },
    }
};
