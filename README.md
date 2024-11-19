# Web Test Automation using WebdriverIO with Allure Report
This is a simple sample of Web Test Automation using WebdriverIO with Allure Report.

> [!NOTE]  
> Setting up Web Test Automation using WebdriverIO is actually insanely easy. This repository is just showing a little different approach from wdio default sample.

## Requirements

1. Install [VS Code](https://code.visualstudio.com/) or any Code Editor you're comfort with. 
2. Install [NodeJS](https://nodejs.org/en/download/prebuilt-installer). 
3. Install [JDK](https://www.oracle.com/java/technologies/downloads/) and update your JAVA_HOME, you can refer [here](https://medium.com/@zorozeri/setting-up-java-home-5abae0118bfe) or Google it.
4. Install [Allure Report](https://allurereport.org/docs/install/).
5. Download and open this code repository on your local Code Editor and run this commands :
   ```
   npm install
   ```
   
## Run Tests
* Run all tests : 
   ```
   npm run wdio
   ```

* Run specific test :
  Open file `wdio.conf.js` and update line 24-27 (comment & un-comment) for necessary file to be executed.

## Open Report
*  Generate report file and open it :

   ```
   allure generate --clean && allure open
   ```
*  Open report without generating report file :

   ```
   allure serve
   ```
*  Troubleshoot Allure not recognized on PowerShell Windows :
   - Use Command Prompt instead of PowerShell, or
   - Run this command on PowerShell : 
     ```
     npm install -g allure-commandline --save-dev
     ```
   

## Short Repository Explanation

This sample Test Automation only consists of 1 folder : `test`, and have 2 sub-folders : 
   ```
   > pageobjects : each file represents individual web pages (including locators and actions on each page), with exception file 'page.js' as being the single parent for all other pages
   > testcases   : contains testcases to be executed
   ```
File `package.json` and `package-lock.json` contains dependencies for the project, which can be initialized using commmand `npm install`.
File  `wdio.conf.js` is basic config file for wdio-based automation.
