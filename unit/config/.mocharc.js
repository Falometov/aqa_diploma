module.exports = {
  spec: "unit/tests/**/*.spec.ts",
  extension: "ts",
  require: "ts-node/register",
  reporter: "mochawesome",
  reporterOptions: [
    "reportFilename=[datetime]_[status]_Diploma-Unit-Testing",
    "json=false",
    "html=true",
    "overwrite=false",
    "timestamp=longDate",
    "consoleReporter=none",
    "autoOpen=true",
    "reportDir=./unit/assets/mochawesome-report",
  ],
};
