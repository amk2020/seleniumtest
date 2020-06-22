package nz.test.genoapay.stepdefs;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(tags = { "@login", "@now"}, 
				 glue = { "nz.test.genoapay.stepdefs" },
				 features = {"src/test/java/nz/test/genoapay/features/"},
				 plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber-junit.xml"
			        }, 
				 monochrome = true, strict = true)
public class RunCucumberTestsNow {

}
