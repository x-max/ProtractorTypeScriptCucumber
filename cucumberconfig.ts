import { Config } from "protractor";

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
        // require step definitions
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    }
}