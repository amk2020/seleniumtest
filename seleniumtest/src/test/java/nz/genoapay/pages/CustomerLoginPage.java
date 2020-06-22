package nz.genoapay.pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import nz.test.genoapay.framework.BrowserType;
import nz.test.genoapay.framework.DriverContext;




public class CustomerLoginPage extends DriverContext {
	
	public DriverContext driverContext;
	
	public CustomerLoginPage (final BrowserType CHROME) {
		super(CHROME);
		this.driverContext = new DriverContext(CHROME);

	}
	
	public void switchToLogin() {
		WebElement WebElement = getDriver().findElement(By.linkText("Login"));
		WebElement.click();
		
	}
	
	public void enterCredintials() {
		
		getDriver().findElement(By.xpath("//*[@id=\"loginEmail\"]")).sendKeys("anumuthunz@outlook.com");
		getDriver().findElement(By.xpath("//*[@id=\"loginForm\"]/div[2]/label")).sendKeys("$AppleBerry2020");
		getDriver().findElement(By.xpath("//*[@id=\"loginForm\"]/button")).click();
		
	}

	public boolean isMyPurchasesDisplayed() {
		// Identifying Element
				final String MyPurchases = getDriver().findElement(By.xpath("//*[@id=\"navbar-genoa\"]/ul/li[1]/a")).getText();
				// Validating the Element
				if (MyPurchases.equals("My purchases")) {
					return true;
				}
				return false;
	}
	public boolean isMyProfileDisplayed() {
		// Identifying Element
				final String MyProfile = getDriver().findElement(By.xpath("//*[@id=\\\"navbar-genoa\\\"]/ul/li[2]/ae")).getText();
		// Validating the Element
				if (MyProfile.equals("My profile")) {
					return true;
				}
				return false;			
	}
		
	public boolean isHelpDisplayed() {
		// Identifying Element
		final String Help = getDriver().findElement(By.xpath("//*[@id=\"navbar-genoa\"]/ul/li[3]/a")).getText();
		// Validating the Element
		if (Help.equals("Help")) {
			return true;
		}
		return false;
	}
	
	public boolean isSignoutDisplayed() {
		// Identifying Element
		final String signOut = getDriver().findElement(By.xpath("//*[@id=\"navbar-genoa\"]/ul/li[4]/a")).getText();
        // Validating the Element
		if (signOut.equals("Sign out")) {
			return true;
		}
		return false;
	}
	
	public boolean isPurchasesWindowDisplayed() {
		// Identifying Element
		final String MyProfile = getDriver().findElement(By.xpath("//*[@id=\"my-purchases\"]/div[2]/h3")).getText();
		// Validating the Element
		if (MyProfile.equals("My Purchases")) {
			return true;
		}
		return false;
	}
	public boolean IsPurchaseDetailsWindowDisplayed() {
		// Identifying Element
		final String MyProfile = getDriver().findElement(By.xpath("//*[@id=\"noPurchase\"]/div[2]/h3")).getText();
		// Validating the Element
		if (MyProfile.equals("No Purchase Details ")) {
			return true;
		}
		return false;
	}
	}


