
Feature:  Genoapay customer portal login and landing
  As a Genopay User
  I want to access the Genopay Customer Portal using my login credentials
  So that I can view the Available credit, List of My Purchases and Purchase Details
  
  Scenario Outline: Login into genoapay successfully and verify landing page appears as expected
    Given I am on Genoapay application login section
    When Login with <GENO_PAY_USER> and <GENOPAY_USER_PASSWORD>
    And click on sign in button
    Then <LIST_ITEMS> are displayed correctly on Landing Page
    
    @login  
    Examples:
      | GENOPAY_USER      			| GENOPAY_USER_PASSWORD      | LIST_ITEMS |
      | New Customer Login  	 			| New Customer Password      | My purchases,My profile,Help,Signout,My purchases, No purchase details|
     #| Existing Customer Existing	| Existing Customer Password | My purchases,My profile,Help,Signout |

  
    @manual
  	Scenario: Branding and Login Logo wth default settings
  		When the customer tries to login to application
  		Then default logo and tab names are displayed on Login & Portal pages
  	
  	@manual   
  	Scenario: Branding and Login Logo wth custom settings
  		When the customer tries to login to application
  		Then custom logo and tab names are displayed on Login & Portal pages		
		
		@manual
  	Scenario Outline: Failed customer login with incorrect credentials
  		Given I am on Genoapay application
    	When  login with <TEST_GENO_PAY_USER> and <GENOPAY_USER_PASSWORD>
    	Then  incorrect credentials message is dispayed on login screen 
    
  	  Examples:
  	  | GENOPAY_USER_TYPE      			| GENOPAY_USER_PASSWORD      |
      | Invalid Email        	 			| Correct Password           |
      | Valid Email        	 		  	| Incorrect Password         | 
  
  	@manual
  	Scenario: Create a new genoapay user account
  		Given I am on Genoapay application signup section
  		When I enter my email address and mobile number
  		And click on verify button
  		Then I enter the 4-digit code and click verify to create account
  	
  	@manual
  	Scenario Outline: Failed customer signup with existing email address
  		Given I am on Genoapay application
  		When login with <GENO_PAY_USER_TYPE> and <MOBILE_NUMBER>
  		Then an alert message that email already in use is displayed on login screen 
  		
  		Examples:
  		| GENOPAY_USER_TYPE      			| MOBILE_NUMBER            |
      | Existing Email        	 		| New Mobile Number        |
      | Non Existing Email         	| Existing Mobile Number   | 
      
     @manual 
     Scenario Outline: Failed customer signup with existing mobile number
  		Given I am on Genoapay application
  		When login with <GENO_PAY_USER_TYPE> and <MOBILE_NUMBER>
  		Then an alert label complaining the mobile number already exists is displayed on login screen  
  		
  		Examples:
      | GENOPAY_USER_TYPE      			| MOBILE_NUMBER            |
      | Non Existing Email         	| Existing Mobile Number   |
  		
  	@manual
  	Scenario Outline: Successful password reset on entering valid email address
  		Given I am on Genoapay application
  		When I click on forgot password link
  		And enter <GENOPAY_USER_TYPE> on the forgot password page and click on reset password
  		Then I should receive a link to password reset on email address provided
  			
  		Examples:
  	  | GENOPAY_USER_TYPE      			|
      | Existing Email 						  |
  			
  	@manual
  	Scenario Outline: faield password reset on entering invalid email address
  		Given I am on Genoapay application
  		When I click on forgot password link
  		And enter <GENOPAY_USER_TYPE> on the forgot password page and click on reset password
  		Then I should see an alert message stating invalid email address 
  				
  		Examples:
  		| GENOPAY_USER_TYPE      			    |
      | Non Existing Email 						  |
  			
  			
  
  	