# Introduction to Players

Players are specialized personas in your application that test specific areas of your application in many different ways.

Players are the core of Testgram. Broadly, they are the representation of your testing intent.
**It's your way to tell us what you care about testing, and how you'd like it tested.**

You can influence and customize a Player in two ways: through [Goals](goals) and through [Rules](rules).

:::tip Player ≠ Test Script
A Player is not a single test case or a test script!
In fact, at runtime, one player can translate to tens, sometimes even hundreds of individual tests
depending on the number of goals your player has and the size of your application.

This is the power of Testgram!
You tell us what to test (goals), and we'll translate it to the actual clicks, types, drags, keystrokes,
and anything else necessary to simulate around those goals.
:::

## How do I create a Player?
You can create a Player through the [Testgram Web Application](https://run.testgram.ai) on your `World` page.

A Player has three key components:
* **Name**: The name and subsequent handle by which you will deploy this player.
* [**Goals**](goals): URLs or APIs that the Player is supposed to target their testing around. 
* [**Rules**](rules): A set of rules (most often field rules) that tell the Player how to test those areas.
For example, if we're testing the login page, rules provide a declarative way to tell us what username and password to use.

:::danger Anti-pattern
We recommend creating many, smaller players to test specialized areas of your application rather than a few, large players.
Creating smaller players ensures that each player is specialized and has the tools necessary to effectively simulate and test
the respective area of your application. Subsequently, it makes interpreting results and debugging much easier. 
It's the same reason we don't write all our code in one file anymore.

In fact, you can actually run multiple players together in one simulation by just appending more player handles at the end of the `tg sim` command. 
For example: `tg sim @player1 @player2`.
:::

## Naming a Player
We found that giving a name to our players helps us imagine them as personas testing our applications.
For example, when filling out the field rules for "Checkout Cindy" we would ask ourselves,
"What would Cindy type into the email field as she is checking out?" and "Which credit card number would she use?". 
As a result, it helped us build a cohesive Player that can simulate multiple journeys.

*Not to mention, naming your Players makes everything just that much more fun.*

## Checkout Cindy (Example)
We often use a demo player called **"Checkout Cindy"** who is built to test the breadth of ways that people checkout in our demo app.
She is referenced on the [goals](goals#checkout-cindys-goals-example) and [rules](rules#checkout-cindys-goals-example) page.