# Password Generator

## Purpose
Randomly generate a password after prompring the user to choose certain criteria that will help to create a strong, secure password.


## How It Works

- The user is presented with a form with an empty password field and a button labeled "Generate Password"

- When the button is clicked, the user is presented with a series of prompts for password criteria

- When prompted for each password criterion, the user selects whether or not to include it in the password

- The user is first prompted for the length of the password, and must choose a length between 8 and 128 characters (inclusive)

- The user then must select which character types to include in the password: lowercase, uppercase, numeric, and/or special characters

- The answer to each prompt is validated and at least one character type should be selected

- When all prompts are answered and at least one character type is selected, a password is generated matching the selected criteria

- The generated password is displayed in the form

- Because the password can be long and may start or end with a space character, the user can click a notice to copy it to the clipboard
