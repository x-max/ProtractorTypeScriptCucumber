Feature: I am going to validate my website functionalities

    @CalculatorTesting
    Scenario Outline: Calculator Add functionality testing
        Given I have navigated to "calc" website
        When I add two numbers "<firstNumber>" and "<secondNumber>"
        Then the output displayed should be "<result>"
        Examples:
        |firstNumber|secondNumber|result|
        |3|5|7|
        |2|7|9|
        |2|17|19|
        |12|17|21| 

    @AngularTesting
    Scenario Outline: Calculator Add functionality testing
        Given I have navigated to "Angular" website
        When I click on header link
        And I am redirected to angular page
        Then I enter "<key>" in search box

        Examples:
        | key |
        | hello  |  
        | hey |
        | Nemanja |

    