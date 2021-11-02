# Password-Generator
This website generates a randomized password based on user criteria. 
When the button is clicked, prompts enable the user to enter how many characters the password will be and what kind of characters it will have. A password is then generated.

## Additions:
In the generatePassword() function, I added if/else statements to handle user input for the window prompts and sent alerts if the input was not valid for the question. I also added an if/else with a window.alert for if the user entered all no's for the character options.

I added arrays for the uppercase, lowercase, special, and numeric characters. A while loop with the Math.random method loops through the character arrays that were selected. The random characters were then added to the "passString", and the string was returned at the end of the loop. The writePassword() function then displays the password string onto the user's screen.

After selecting a 12 character password:
![image](https://user-images.githubusercontent.com/88856741/139861440-4d605434-5219-4735-ad9f-85a79f81bf14.png)

After also typing "yes" to all character options:
![image](https://user-images.githubusercontent.com/88856741/139861553-6c5dcbab-bbd1-444f-95b8-450391fc2609.png)
 
User enters invalid input:
![image](https://user-images.githubusercontent.com/88856741/139863725-02136dfb-0d80-4172-80de-2dadde162a2e.png)


Alert after invalid input:
![image](https://user-images.githubusercontent.com/88856741/139863259-acd62d5d-23d0-47df-bebb-a4f2bb5a2734.png)

Alert after user enters "no" for all character options:
![image](https://user-images.githubusercontent.com/88856741/139864523-37e903d8-ef55-460e-a7fb-ba26c8fff595.png)


# Updated By Priscilla Egli
