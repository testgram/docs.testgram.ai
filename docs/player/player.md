# Introduction to Players
A Player is a simulated user that tests one specific journey through your application.
This journey is defined through a series of [checkpoints](checkpoints), and influenced through [input fields](inputs).

A Player passes if it can run through its checkpoints, and fails if it cannot.

Players are the core of Testgram. Broadly, they are the representation of your users, and therefore your testing intent.
**It's your way to tell us what you care about testing, and how you'd like it tested.**

![player](/img/gif/player-create.gif)

:::tip Player ≠ Test Script
A Player is not a test script! Players adaptively execute based on the environment they're in, and the data they've observed. 
In fact, we **never** have a pre-compiled set of steps in the background to execute. 
Instead, we try to **mimic** real user behavior in order to execute these checkpoints. So even if the data changes a bit, the application changes, or the intermediate steps change, as long as we have data we can usually adapt to a changing environment.
This is the power of Testgram!
You tell us what to test (checkpoints), and we'll translate it to the actual clicks, types, drags, keystrokes,
and anything else necessary to simulate around those goals.
:::

## How do I create a Player?
You can create a Player through the [Testgram Web Application](https://run.testgram.ai) on your `World` page.

A Player has three key components:
* [**Name**](#naming-a-player): The name and subsequent handle by which you will deploy this player.
* [**Checkpoints**](checkpoints): URLs or Elements that the Player is supposed to target their testing around. 
* [**Input Fields**](inputs): A set of input fields that tell the Player how to test those areas.
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
Do not use characters such as `@`, or `\` in the player name, which will break your ability to use them in the CLI. This will be enforced soon too.