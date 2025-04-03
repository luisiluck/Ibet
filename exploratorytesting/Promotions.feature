# In order to know about the Entertainment offers 
# As a visitor (not logged in)
# I want to see the promotions on the Entertainment Website

Feature: Promotions
  Background:
    Given the user is 'a visitor'
    
  Scenario: View promotions
    Given the 'Home' page is shown
    When the 'Promotions' page is selected
    Then the 'Promotions' page should be displayed
    And 'All' categories should be selected as default
    And All promotions should be displayed into categories
    
    
  Scenario Outline: View promotion categories
    Given the 'Promotions' page is shown
    When the <category> category is selected
    Then the promotions of  the <category> category should be displayed
    And The others categories should be hidden
  Examples:
    | category                       |
    | Default category               |
    | Live Casino                    |
    | Slots                          |
    | Casino                         |
    | QA - Test Setups [DO NOT EDIT] |

  Scenario: View a Promotion details
    Given the 'Promotions' page is shown
    When the 'Risk-free spin challenge' promotion is selected
    Then the 'Risk-free spin challenge' promotion page should be displayed
    And the 'full description' should be displayed
    And the 'Opt in' button should be available

  Scenario: Opt in to a promotion
    Given the 'Risk-free spin challenge' promotion page is shown
    And the 'Opt in' button is clicked
    Then the 'Login' popup should be displayed