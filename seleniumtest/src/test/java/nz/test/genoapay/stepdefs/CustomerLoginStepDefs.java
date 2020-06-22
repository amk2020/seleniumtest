package nz.test.genoapay.stepdefs;

import static org.junit.Assert.assertTrue;

import nz.genoapay.pages.CustomerLoginPage;
import nz.test.genoapay.*;
import nz.test.genoapay.framework.BrowserType;
import nz.test.genoapay.framework.DriverContext;
import nz.test.genoapay.framework.DriverInitiator;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CustomerLoginStepDefs extends CustomerLoginPage{
	

	final DriverContext driverContext;
	final DriverInitiator driverInitiator;
	final CustomerLoginPage customerLoginPage;
	
	
	public CustomerLoginStepDefs(final BrowserType browser) {
		super(browser);
		this.driverContext = new DriverContext(browser);
		this.driverInitiator = new DriverInitiator();
		this.customerLoginPage = new CustomerLoginPage(browser);
		
	}
	
	@Given("I am on Genoapay application login section")
	public void i_am_on_Genoapay_application_login_section() {
	    
		this.customerLoginPage.switchToLogin();
	    
	}

	@When("Login with GENO_PAY_USER and GENOPAY_USER_PASSWORD")
	public void login_with_GENO_PAY_USER_and_GENOPAY_USER_PASSWORD() {
	  
	  this.customerLoginPage.enterCredintials();
	}

	
	  @When("click on sign in button") public void click_on_sign_in_button() {
	  
	   }
	 

	  @Then("default tab names are displayed correctly on Landing Page")
	  public void default_tab_names_are_displayed_correctly_on_Landing_Page() {
	    
		assertTrue(this.customerLoginPage.isMyPurchasesDisplayed());
		assertTrue(this.customerLoginPage.isMyProfileDisplayed());
		assertTrue(this.customerLoginPage.isHelpDisplayed());
		assertTrue(this.customerLoginPage.isSignoutDisplayed());
		assertTrue(this.customerLoginPage.isPurchasesWindowDisplayed());
		assertTrue(this.customerLoginPage.IsPurchaseDetailsWindowDisplayed());
	}
}
