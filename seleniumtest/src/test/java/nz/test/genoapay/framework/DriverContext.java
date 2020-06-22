package nz.test.genoapay.framework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;



public class DriverContext {

    private BrowserType browser;
    private DesiredCapabilities desiredCapabilities;
    private String url;
    private static WebDriver driver;


    public DriverContext(BrowserType browser) {
        driver = WebDriverFactory.startDriver(browser);
    }

    public static WebDriver getDriver() {
        return driver;
    }
    public static void quitBrowser() {
        driver.quit();
    }


}
