"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // require step definitions
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    }
};
