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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
const jsonReports = process.cwd() + "../reports/json";
// Before({ tags: "@AngularTesting" }, function () {
//   // This hook will be executed before scenarios tagged with @foo
//   browser.
//     manage().
//     window().
//     maximize();
// });
// After({ tags: "@CalculatorTesting" }, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
//   console.log("Test is completed.");
// });
// Before({ tags: "@AngularTesting" }, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
//   console.log(" I need to execute first")
// });
cucumber_1.BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Executing After feature!!");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
    });
});
