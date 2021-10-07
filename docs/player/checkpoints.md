# Checkpoints

Checkpoints are your way to guide the behavior of the Player. Checkpoints help define the overall journey that a Player will execute during a simulation. 

## How Checkpoints Work

Checkpoints are one of the most simple, but also most important concepts in Testgram.
### Checkpoints are ordered
The checkpoints you put together define an ordered journey that the Player should execute during a simulation.

### Checkpoints define a user journey, not a test
There's an art to creating these checkpoints well. Try to think about what parts of the journey really matter to you, and let Testgram simulate the rest. Being too specific means your Player becomes less impactful, and being too broad may not give you the guarantee you want! Checkpoints are your way to defining the user journey, and all of the checkpoints that matter with it: no more, no less. 

### Checkpoints are data-driven
As you put together your Player's checkpoints, you will see the real user impact of that journey being projected right next to it. This represents the *funnel* of users who go through those checkpoints, so you get a sense of how many people your Player really impacts.
They can be specified using glob patterns to select either API endpoints or Page URLs in your application.

## Creating Checkpoints

Checkpoints help you define the user joruney you want to test. Try to imagine the entire 

Once a checkpoint is added to a Player,
Testgram recalls all of the instances in which it saw real users go through those checkpoints. Those data points end up creating a AI, user behavior model that the Player uses to simulate real user behavior.

There are two types of goals a player can have: [URL](#url-checkpoints) and [Element](#element-checkpoints).

As you enter your checkpoints, we'll begin dynamically displaying the suggested inputs we think will be necessary to fill underneath. [Don't worry, that's next.](inputs)

### URL Checkpoints
URL checkpoints tell the Player to reach a particular page.

:::tip Glob Pattern URLs
URL checkpoints can be set as glob patterns too. You will often want to do this if you don't care about the specific instance of the page you're on but rather just want to make sure the journey is working.

Rather than setting a checkpoint to go to `/products/shoes/nikeairmax1234`, you may want to set the checkpoint to be 
`/products/shoes/*` to make sure that the Player can merely just visit a shoe product page.
:::

For example, say you want to validate that a user can add a pair of shoes to their cart, and then checkout. Your Checkpoints could be: 
* URL: `/products/shoes/*`
* Element: `Checkout`

:::note If the autocomplete doesn't work...
If the autocomplete doesn't work, it probably means we haven't collected any data for that area yet.
You can still create goal entries for areas we haven't learned yet by manually typing in the URL.
:::

:::danger Anti-pattern: Setting `/**` as a goal
Avoid setting your goals too broad.
Making a single Player test every URL will make it difficult to parallelize, debug, and interpret your simulation results.
:::

### Element Checkpoints
Element checkpoints tell the Player to interact with a specific element on your site. For example, say you want to force your Player to go through the `Checkout` button in its journey, you can do that by setting an Element goal as `Checkout`. Based on the data we collect, we will try to help you set these as well!

Element checkpoints tend to be grandular and action oriented. 
It tells the Player you want to simulate the journeys that are correlated with a specific action.

