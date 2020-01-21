$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigation to specify accounts in Accounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003coption\u003e is selected",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on \"\u003coption\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Account drop down should have \"\u003coption\u003e\" selected",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "option"
      ]
    },
    {
      "cells": [
        "Savings"
      ]
    },
    {
      "cells": [
        "Brokerage"
      ]
    },
    {
      "cells": [
        "Checking"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Loan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Savings is selected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Savings\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Savings\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.account_drop_down_should_have_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage is selected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Brokerage\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Brokerage\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.account_drop_down_should_have_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking is selected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Checking\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Checking\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.account_drop_down_should_have_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Card is selected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Credit Card\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Credit Card\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.account_drop_down_should_have_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Loan is selected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Loan\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Loan\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityStepDefinitions.account_drop_down_should_have_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});