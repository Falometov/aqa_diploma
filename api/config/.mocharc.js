module.exports = {
  spec: "api/tests/**/*.spec.ts",
  extension: "ts",
  require: "ts-node/register",
  reporter: "mochawesome",
  reporterOptions: [
    "reportFilename=[datetime]_[status]_Diploma-API-Testing",
    "json=false",
    "html=true",
    "overwrite=false",
    "timestamp=longDate",
    "consoleReporter=none",
    "autoOpen=true",
    "reportDir=./api/assets/mochawesome-report",
  ],
};
