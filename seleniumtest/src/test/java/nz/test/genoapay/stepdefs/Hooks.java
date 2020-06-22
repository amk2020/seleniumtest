package nz.test.genoapay.stepdefs;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import nz.test.genoapay.framework.DriverContext;
import nz.test.genoapay.framework.DriverInitiator;

public class Hooks {


    public static DriverInitiator testDriver;
    public static Scenario scenario;

    @Before
    public void before(Scenario scenario) throws Throwable {
        //instantiate a test driver
        testDriver = new DriverInitiator();
        Hooks.scenario = scenario;
    }

    @After
    public void after() throws Throwable {

        if (DriverContext.getDriver() != null) {
            testDriver.tearDown();
        }
    }
}



