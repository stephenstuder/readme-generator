function generateLicense(license) {
  let licenseBadgeUrl;
  switch (license) {
    case "MIT":
      licenseBadgeUrl = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "GPLv2":
      licenseBadgeUrl = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break
    case "Apache":
      licenseBadgeUrl = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPLv3":
      licenseBadgeUrl = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSDs3-clause":
      licenseBadgeUrl = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "Other":
      licenseBadgeUrl = `Other`;
      break
    default:
      licenseBadgeUrl = `Other`;
  }
  return licenseBadgeUrl;
}

module.exports = generateLicense;
