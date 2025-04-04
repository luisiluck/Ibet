Feature: Signup

  Scenario Outline: Trying to signup with bad credentials
    Given the 'Signup' page is open
    When a signup is performed
      | email   | password   |
      | <email> | <password> |
    Then the '<element>' should 'be.visible'
    Examples:
      | email             | password   | element                  |
      | invalidemail      | password   | continue button disabled |
      | invalidemail@     | password   | continue button disabled |
      | invalidemail@.com | password   | continue button disabled |
      | invalidemail@.com | pass       | continue button disabled |
      | invalidemail@.com | pass123456 | continue button disabled |
      | valid@mail.com    | 12345qQ!   | continue button          |

  Scenario Outline: Trying to signup with missing data
    Given the 'Signup' page is open
    When a signup is performed
      | email          | password | continue | firstName   | lastName   | gender   | day   | month   | year   | address   | city   | postCode   | phone   | agree   |
      | valid@mail.com | 12345qQ! | click    | <firstName> | <lastName> | <gender> | <day> | <month> | <year> | <address> | <city> | <postCode> | <phone> | <agree> |
    Then the '<element>' should 'exist'
    Examples:
      | firstName | lastName | gender | day | month | year | address    | city   | postCode | phone     | agree | element                |
      |           | port     | male   | 10  | 11    | 1990 | c Falsa123 | malaga | 20001    | 123456789 | click | submit button disabled |
      | luis      |          | male   | 10  | 11    | 1990 | c Falsa123 | malaga | 20001    | 123456789 | click | submit button disabled |
      | luis      | port     | male   | 10  | 11    | 1990 |            | malaga | 20001    | 123456789 | click | submit button disabled |
      | luis      | port     | male   | 10  | 11    | 1990 | c Falsa123 | malaga | 20001    | 123456789 |       | submit button disabled |
      | luis      | port     | male   | 10  | 11    | 1990 | c Falsa123 | malaga | 20001    | 123456789 | click | submit button          |

  Scenario Outline: Trying to signup with invalid date
    Given the 'Signup' page is open
    When a signup is performed
      | email          | password | continue | firstName | lastName | gender | day   | month   | year   | address    | city   | postCode | phone     | agree |
      | valid@mail.com | 12345qQ! | click    | luis      | port     | male   | <day> | <month> | <year> | c Falsa123 | malaga | 20001    | 123456789 | click |
    Then the 'submit button disabled' should 'exist'
    Examples:
      | day | month | year |
      |     |       |      |
      | 1   | 11    |      |
      | 32  | 13    | 1991 |
      | 10  | 11    | 1890 |
      | 10  | 11    | 2024 |

