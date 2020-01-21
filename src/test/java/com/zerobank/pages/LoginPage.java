package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    @FindBy(xpath = "//input[@name=\"user_login\"]")
   public WebElement userInput ;

    @FindBy(xpath = "//input[@name=\"user_password\"]")
    public WebElement passwordInput;

public void Login(){
    Driver.get().get(ConfigurationReader.getProperty("url"));
    userInput.sendKeys("username");

    passwordInput.sendKeys("password", Keys.ENTER);

    }
}
