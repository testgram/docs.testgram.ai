# Goals

Goals tell a Player what to test. 
They can be specified using glob patterns to select either API endpoints or Page URLs in your application.

## Creating Goals

Once a goal is added to a player, 
Testgram recalls all of the user paths and behaviors that achieve this goal based on the data we’ve collected.
This is where Testgram's AI comes into play.

When that Player is run, it tries to reproduce each of the different ways that those goals can be achieved.

There are two types of goals a player can have: [API](#api-endpoint-goals) and [URL](#url-goals).

The easiest way to get started is to enter `/` and let the IDE-style experience guide you to selecting.
*Note: Goals can be specified as glob patterns too!*

As you enter your goals, we'll begin dynamically displaying the suggested rules we think will be necessary to fill underneath. [Don't worry, that's next.](rules)

:::info Goals map to multiple journeys
Goals on a Player can map to multiple journeys in the application. This means that in just a few bullets, you can
tell a Player to test tens or even hundreds of different journeys.
:::

### API Endpoint Goals
API endpoint goals tell the Player to test each of the ways in which that particular endpoint is called. 
For example, if the `/validate/user` endpoint is called when you login and when you enter the settings page, setting the API
goal as `/validate/user` would tell the Player to test all of the ways that the endpoint is called on both the login page and the settings page.

API goals tend to be grandular and action oriented. 
It tells the Player you want to simulate the journeys that are correlated with a specific action.

### URL Goals
URL goals tell the Player to test each of the ways in which that particular page is used.
Testgram first finds each of the unique interactable elements *and* APIs that correlate with a page. 
These elements and APIs then become anchor points for the Player to find meaningful journeys around that page.

URL goals are also a way to test elements or components that may not be specifically connected to an API within your site 
(eg. modals).

:::note If the autocomplete doesn't work...
If the autocomplete doesn't work, it probably means we haven't collected any data for that area yet.
You can still create goal entries for areas we haven't learned yet by manually typing in the API or URL.
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
with an explicit emphasis on the journeys around entering an address that would call the `/validate/address` endpoint. 

It's okay that the URL and API goals have some overlap, we'll make sure we don't test the same thing twice!

