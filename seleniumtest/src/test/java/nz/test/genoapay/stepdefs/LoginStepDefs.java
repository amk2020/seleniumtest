package nz.test.genoapay.stepdefs;

import io.cucumber.java.en.Given;
import nz.test.genoapay.framework.DriverContext;
import nz.test.genoapay.framework.GetPropertyValues;


public class LoginStepDefs {
    @Given("I am on Genoapay")
    public void iAmOnGenoapay() {
        DriverContext.getDriver().navigate().to(GetPropertyValues.getBaseUrl());
    }
}
