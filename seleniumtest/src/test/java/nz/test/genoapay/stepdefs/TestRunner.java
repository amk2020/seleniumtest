package nz.test.genoapay.stepdefs;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //This specifies the type and location of the desired reports.

        plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber-junit.xml"
        },
        //This is the location of the Features folder
        features = {"src/test/java/nz/test/genoapay/features/"},
         //This is the location of the StepDefs folder
        glue = {"nz.test.genoapay.stepdefs"},
        //This is an optional flag that lets all tests that match the tags be julychecked without executing them.
        tags = {"@login"})



public class TestRunner {
}
