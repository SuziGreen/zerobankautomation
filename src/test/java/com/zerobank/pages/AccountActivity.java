package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivity extends BasePage {

    @FindBy(xpath = "//select[@name=\"accountId\"]")
    public WebElement accountDropdown;

    public WebElement dropdownOption (String option) {
        WebElement element = Driver.get().findElement(By.xpath("//option[text ()=\""+option+"\"]"));
          return  element;

    }
}
