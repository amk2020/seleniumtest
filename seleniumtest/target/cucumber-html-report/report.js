$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/nz/test/genoapay/features/customer_login.feature");
formatter.feature({
  "name": "Genoapay customer portal login and landing",
  "description": "  As a Genopay User\n  I want to access the Genopay Customer Portal using my login credentials\n  So that I can view the Available credit, List of My Purchases and Purchase Details",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into genoapay successfully and verify landing page appears as expected",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@now"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Genoapay application login section",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerLoginStepDefs.i_am_on_Genoapay_application_login_section()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: class nz.test.genoapay.stepdefs.CustomerLoginStepDefs doesn\u0027t have an empty constructor. If you need DI, put cucumber-picocontainer on the classpath\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:44)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: java.lang.NoSuchMethodException: nz.test.genoapay.stepdefs.CustomerLoginStepDefs.\u003cinit\u003e()\n\tat java.base/java.lang.Class.getConstructor0(Class.java:3350)\n\tat java.base/java.lang.Class.getConstructor(Class.java:2152)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:39)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Login with GENO_PAY_USER and GENOPAY_USER_PASSWORD",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerLoginStepDefs.login_with_GENO_PAY_USER_and_GENOPAY_USER_PASSWORD()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerLoginStepDefs.click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "default tab names are displayed correctly on Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerLoginStepDefs.default_tab_names_are_displayed_correctly_on_Landing_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/nz/test/genoapay/features/login.feature");
formatter.feature({
  "name": "Genoapay customer portal login and landing",
  "description": "  As a Genopay User\n  I want to access the Genopay Customer Portal using my login credentials\n  So that I can view the Available credit, List of My Purchases and Purchase Details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login into genoapay successfully and verify landing page appears as expected",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on Genoapay application login section",
  "keyword": "Given "
});
formatter.step({
  "name": "Login with \u003cGENO_PAY_USER\u003e and \u003cGENOPAY_USER_PASSWORD\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cLIST_ITEMS\u003e are displayed correctly on Landing Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "GENOPAY_USER",
        "GENOPAY_USER_PASSWORD",
        "LIST_ITEMS"
      ]
    },
    {
      "cells": [
        "New Customer Login",
        "New Customer Password",
        "My purchases,My profile,Help,Signout,My purchases, No purchase details"
      ]
    }
  ],
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login into genoapay successfully and verify landing page appears as expected",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Genoapay application login section",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerLoginStepDefs.i_am_on_Genoapay_application_login_section()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: class nz.test.genoapay.stepdefs.CustomerLoginStepDefs doesn\u0027t have an empty constructor. If you need DI, put cucumber-picocontainer on the classpath\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:44)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: java.lang.NoSuchMethodException: nz.test.genoapay.stepdefs.CustomerLoginStepDefs.\u003cinit\u003e()\n\tat java.base/java.lang.Class.getConstructor0(Class.java:3350)\n\tat java.base/java.lang.Class.getConstructor(Class.java:2152)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:39)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Login with \u003cGENO_PAY_USER\u003e and New Customer Password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerLoginStepDefs.click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "My purchases,My profile,Help,Signout,My purchases, No purchase details are displayed correctly on Landing Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});