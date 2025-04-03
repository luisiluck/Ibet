Feature: Critical scenarios

  Background:
    Given a logged in user

  Scenario: Succesfully buying a shop item
    Given the 'Shop' page is open
    When a Shop item is bought
    Then a notification should say
      """
      You've earned 1 rewards!
      """

  Scenario: Succesfully set a Wager Limit
    Given the 'CreateLimits' page is open
    When a Limit is set with next values
      | typeLimit   | period  | amount |
      | Wager Limit | 1 week  | 2      |
    Then a notification should say
      """
      Your limit has been set
      """   