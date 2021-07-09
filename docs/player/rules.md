# Rules
Rules are your way to tell your Player ***how*** to test your [goals](goals).

As you enter your goals, you'll notice that the rules dynamically get created underneath. 

Each rule tells the Player about a field that it will **likely** have to interact with over the course of a simuation.
These rules give you the ability to 'hook into' or influence the behavior of the Player, during the simuation.

## Writing Rules
As you're building your Player's rules, it's best to imagine the persona that this Player is meant to simulate. 

In Checkout Cindy's example, ask yourself what would Cindy do as she was interacting with element X. And then if she was interacting with element Y, what would she do then? 
You want your players to be cohesive. 

### Fields (left)
Each element is represented by a set of descriptive attributes. For example, the following element translates to the password field on the `/#/login` page.

![Password Element](/img/player/element.png)

We can tell by looking at the attributes, noticing that it is an `input` type with a `name` and `type` of password.

:::note Elements ≠ Selectors
These elements on the left side are actually not selectors. 
Instead, they are meant to be just a few descriptive attributes that would help you interpret which element that translates to on the page. 

We learned early on that selectors are *super* brittle. So we engineered a better solution. 
Behind the scenes, these elements translate to a dynamic set of selection strategies that evolve with time and usage. 
This is important so that your Players remain robust even as the applicaiton itself is changing.
:::

### Fill Rules (right)
You can tell the Player what to fill when it interacts with a particular element
by typing into the blank space next to the element.

![Filled Rule](/img/player/filled.png)

These rules express Cindy's intent to type in a `checkout@cindy.com` as the email address on the login page 
and `@CindysPassword!1234` in the password field.

Today we only support static fills, 
but we're working on making more complex rules that you can plug in 
(such as random value generators or variables).