import { After, Before, Status, BeforeAll } from 'cucumber';
import { browser } from "protractor";
import { async } from 'q';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';

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

BeforeAll(async () => {
  CucumberReportExtension.CreateReportFile(jsonReports);
});

After(async function (scenario) {
  console.log("Executing After feature!!");
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
});
