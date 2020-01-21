package com.zerobank.stepdefinitions;

import com.zerobank.pages.AccountActivity;
import com.zerobank.pages.AccountsSummary;
import com.zerobank.pages.BasePage;
import com.zerobank.pages.LoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AccountActivityStepDefinitions {

    LoginPage loginPage = new LoginPage();
    AccountsSummary accountsSummary = new AccountsSummary();
    BasePage basePage = new BasePage();
    AccountActivity accountActivity = new AccountActivity();



    @Given("the user is logged in")
    public void the_user_is_logged_in() {
        loginPage.Login();
        System.out.println("User logged in");

    }

    @When("the user clicks on {string} link on the Account Summary page")
    public void the_user_clicks_on_link_on_the_Account_Summary_page(String link) {
        accountsSummary.clickTheLink(link);
        System.out.println("User Clicked on:  " + link + " link.");


    }
    @Then("the Account Activity page should be displayed")
    public void the_Account_Activity_page_should_be_displayed() {
        Assert.assertTrue(basePage.accountActivity.isDisplayed());

        System.out.println(basePage.accountActivity.getText()+ " is displayed.");
    }

    @Then("Account drop down should have {string} selected")
    public void account_drop_down_should_have_selected(String option) {

     Assert.assertTrue(accountActivity.dropdownOption(option).isSelected());
        System.out.println(accountActivity.dropdownOption(option).getText()+ " is selected.");

    }


}
