package nz.test.genoapay.framework;

import java.util.Properties;

public class DriverInitiator {

    public static Properties properties;

    public DriverContext driverContext;


    public DriverInitiator() {
        initiate();
    }

    private void initiate() {
        properties = PropertiesHandler.loadProperties("src/test/resources/global.properties");
        assert properties != null;
        if (properties.getProperty("browser").equals("chrome")) {

            driverContext = new DriverContext(BrowserType.CHROME);
        }

    }

    public void tearDown() {
        DriverContext.quitBrowser();
    }


}
