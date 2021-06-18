# Goals

Goals tell a Player what to test. 
They can be specified using glob patterns to select either API endpoints or Page URLs in your application.

## Creating Goals
When a goal is created on a Player,
Testgram identifies each of the behaviorally unique ways those goals are achieved given the data we've collected. 
When that Player is run, it tries to reproduce each of the different ways that those goals can be achieved.

There are two types of goals a player can have. Goals can be specified as glob patterns. 
The easiest way to get started is to enter `/` and let the IDE-style experience guide you to selecting. 

As you enter your goals, we'll begin dynamically displaying the suggested rules we think will be necessary to fill underneath. [Don't worry, that's next.](rules)

### API Endpoint Goals
API endpoint goals tell the Player to test each of the ways in which that particular endpoint is called. 
For example, if the `/validate/user` endpoint is called when you login and when you enter the settings page, setting the API
goal as `/validate/user` would tell the Player to test all of the ways that the endpoint is called on both the login page and the settings page.

API goals are thus are highly directed. It tells the Player you want to simulate the journeys that are correlated with a specific action.

### URL Goals
URL goals tell the Player to test each of the ways in which that particular page is used.
Testgram first to find each of the unique interactable elements *and* APIs that correlate with a page. 
These elements and APIs then become anchor points for the Player to find meaningful journeys around that page.

:::info Goals map to multiple journeys
Goals on a Player can map to multiple journeys in the application. This means that in just a few bullets, you can 
tell a Player to test tens, or even hundreds of different journeys.
:::

:::note If the autocomplete doesn't work...
If the autocomplete doesn't work, it probably means we haven't collected any data for that area yet.
You can still create goal entries for areas we haven't learned yet. 
:::

:::danger Anti-pattern: Setting `/**` as a goal
Avoid setting your goals too broad.
Making a single Player test every API end-point or URL will make it difficult to parallelize, debug, and interpret your simulation results.
:::

## Checkout Cindy's Goals (Example)
These goals for Cindy can be expressed on the Player page as:
* [URL] /#/cart/checkout
* [API] /validate/address

This expresses Cindy's intent to test all of the different ways that users would interact with the checkout page, 
with an explicit emphasis on the journeys around entering an address that would call the `/validate/address` endpoint,  

