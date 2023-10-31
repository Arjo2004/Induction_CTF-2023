# maxima machine LeaRning

## Challenge Name
Maxima Machine LeaRning

The challenge involves extracting 10 zipped files from a provided picture using the `binwalk` tool. Participants are required to utilize a provided script, analyze an ML model's behavior, and use the information to extract the hidden flag.

## Solution Steps
1. Use `binwalk` to extract 10 zips from the provided picture (flags.png - should be evident from the "flags").
2. Analyze the provided script that includes the following functions:
   - `use_password_zip(password, zip_file)` for testing and extracting the flag from the zipped files.
   - `check_forzips(y_predicted)` for processing the predicted values.
3. Implement the following steps from the script:
   - Load and preprocess the MNIST dataset.
   - From this script which trained the dataset, you need to know how a loss function graph works.
   - Work on understanding how you can reach the maxima of a loss function graph.
   - This can be done by understanding the loss (binary crossentropy) function & you can see that it maximizes when the LR (learning rate) is negative.
   - Set LR to -0.1 / -0.01 / -0.001. Re-train.
   - Check the predicted values and try the passwords from the text file on the zipped files.
4. Extract the hidden flag by correctly testing the zipped files with the text file containing all numbers from the MNIST dataset (which are usually single repeated numbers).

## Hints
1. There was an available git log hint that could have helped you understand the use of learning rates.
2. The challenge name had "LR" capitalized to help you out.

## Key Concept
Instead of using the ML model to reach the global minimum via gradient descent, the challenge involves hiding a flag at an accuracy of around 9.5%. To achieve this accuracy, participants need to increase the gradient by using a negative learning rate (LR). By attaining this specific accuracy, a text file with a series of numbers can be used as passwords to unlock the zipped files, ultimately revealing the hidden flag.

## Conclusion
By understanding the intricacies of the provided script and the behavior of the ML model, participants successfully extract the flag by using the appropriate password to unlock the zipped files, thus completing the challenge.

