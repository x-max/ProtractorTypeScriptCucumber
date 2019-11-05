"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const mkdirp_1 = require("mkdirp");
const report = __importStar(require("cucumber-html-reporter"));
const Cucumber = require('cucumber');
class CucumberReportExtension {
    static CreateReportFile(dirName) {
        //Check of the directory exist
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
    }
    static GenerateCucumberReport() {
        report.generate(this.cucumberReporterOptions);
    }
}
exports.CucumberReportExtension = CucumberReportExtension;
CucumberReportExtension.jsonDir = process.cwd() + "/reports/json";
CucumberReportExtension.htmlDir = process.cwd() + "/reports/html";
CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";
CucumberReportExtension.cucumberReporterOptions = {
    theme: "bootstrap",
    jsonFile: CucumberReportExtension.jsonFile,
    output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.0.1",
        "Test Environment": "Testing",
        "Browser": "Chrome  78.0.3904.70",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};
