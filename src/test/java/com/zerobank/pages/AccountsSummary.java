package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountsSummary extends BasePage {

@FindBy(linkText = "Savings")
    public WebElement savingsLink;
@FindBy(linkText = "Brokerage")
    public WebElement brokerageLink;
@FindBy(linkText = "Checking")
    public WebElement checkingLink;
@FindBy(linkText = "Credit Card")
    public WebElement creditCardLink;
@FindBy(linkText = "Loan")
    public WebElement loanLink;


public void clickTheLink(String link){

    Driver.get().findElement(By.linkText(link)).click();
    }
}
