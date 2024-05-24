# Project 8 - Urban Routes Automation Project

## Project Description

Project 8 encapsulated automation testing techniques covered in Sprint 8 and ran automated tests on the Urban Route web application. Automated testing used in the project included end-to-end testing of the primary functionalities of ordering a taxi.

Automated test cases written and executed:
- Setting the address
- electing Supportive plan
- Filling in the phone number
- Adding a credit card
- Writing a message for the driver
- Ordering a Blanket and handkerchiefs
- Ordering 2 Ice creams
- The car search modal appears
- Waiting for the driver info to appear in the modal

## Technologies Used

- **WebdriverIO**: Automation tool for web applications, used for writing and running automated tests.
- **Node.js**: JavaScript runtime environment that allows the execution of JavaScript on the server side.
- **Mocha**: JavaScript test framework running on Node.js.
- **JavaScript**: Primary programming language used to write the test scripts.
- **SelectorsHub**: Tool to inspect and generate selectors in the browser, used to identify and verify elements during test creation.
- **Visual Studio Code**: Code editor used to write and debug automated test scripts. This was also used as the terminal for creating project files and executing tests.
- **Firefox**: Browser used for automated testing of the Urban Routes web application.
- **MacOS Sonoma Version 14.4.1**: Operating system used to complete Project 8.

## Techniques Used

- **End-to-End Testing**: Verify the Urban Routes web application functions correctly during the process of a customer ordering a taxi.
- **Modular Code Organization**: Separate files for page selectors (`page.js`), helper functions (`helper.js`), and test scripts (`createAnOrder.e2e.js`) for better maintainability and code organization.
- **Assertions**: Use WebdriverIO's built-in assertion library to validate the expected outcomes of tests.
- **Element Interactions**: Automate user interactions with web elements including clicks, inputs, and waits.
- **Timeouts and Waits**: Ensure elements are available before interactions.

## Prerequisites

- **Node.js**: Be sure to have Node.js installed on operating system.
- **NPM**: Verify Node Package Manager is installed on operting system by running ommand `node -v` and `npm -v`.
- **WebdriverIO**: Install WebdriverIO by running command `npm install -g @wdio/cli`. Verify installation by running command `wdio -version`.
- **Connect Local to GitHub**: Use private SSH key to connect GitHub account with local machine.
- **Firefox Browser**: Have the Firefox browser installed on operating system to run web application automated tests.

## Setting up Project

- **Clone Project 8 from GitHub to Local**: Run the command `git clone git@github.com/[username]/hm08-qa-us`
- **Navigate to Project Directory**: From home directory, run command `cd ./projects/hm08-qa-us`.
- **Install Dependencies**: Run command `npm install` to install all necessary dependencies.

## Running Tests

- **Open `hm08-qa-us` project in Visual Studio Code**
- **Open Urban Routes Web Application**: Use provided server URL to access Urban Routes app. Note, the server may time out and would need to be reset.
- **Run Tests**: Run tests on Visual Studio Code using the terminal within the platform and running command `npm run wdio`.