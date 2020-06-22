package nz.test.genoapay.framework;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


import java.net.MalformedURLException;
import java.net.URL;
import java.security.InvalidParameterException;

public class WebDriverFactory {
    public static WebDriver startDriver(BrowserType browserType) {

        switch (browserType) {
            case FIREFOX:
                WebDriverManager.firefoxdriver().setup();
                return new FirefoxDriver();

            case CHROME:
                WebDriverManager.chromedriver().setup();
                return new ChromeDriver();

            default:
                throw new InvalidParameterException("Unknown browser type");
        }
    }

    public static RemoteWebDriver startDriver(BrowserType browserType, String url, DesiredCapabilities capabilities) throws MalformedURLException {
        switch (browserType) {
            case CHROME:
                return new RemoteWebDriver(new URL(url), capabilities);
            default:
                throw new InvalidParameterException("No remote driver available");
        }


    }

}
