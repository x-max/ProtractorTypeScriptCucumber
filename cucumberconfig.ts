import { Config } from "protractor";
//import { generate } from "cucumber-html-reporter";
import * as reporter from "cucumber-html-reporter";
import { CucumberReportExtension } from "./reporting/CucumberReportExtension";

export let config: Config = {
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
        compiler:"ts:ts-node/register",
        strict:"true",
        //tags: "@CalculatorTesting",
        format: 'json:./reports/json/cucumber_report.json',
        require: [
            './stepDefinitions/*.js', // accepts a glob
        ],
        
        onComplete: () => {
            CucumberReportExtension.GenerateCucumberReport();
        },
        
        // onComplete: () => {
        //         var options = {
        //         theme: 'bootstrap',
        //         jsonFile: './cucumber_report.json',
        //         output: './reports/cucumber_report.html',
        //         reportSuiteAsScenarios: true,
        //         scenarioTimestamp: true,
        //         launchReport: true,
        //         metadata: {
        //             "App Version": "0.3.2",
        //             "Test Environment": "STAGING",
        //             "Browser": "Chrome  54.0.2840.98",
        //             "Platform": "Windows 10",
        //             "Parallel": "Scenarios",
        //             "Executed": "Remote"
        //         }
        //     };
        //     reporter.generate(options);
        // },
    }
}