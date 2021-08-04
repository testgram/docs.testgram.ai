# Running Your First Simulation

## 🛠️ System Setup & Installation
To go through this tutorial, you will need to have the `tg` CLI application correctly installed. 
[An installation guide along with the specific commands to install Testgram can be found here](install).
The overall flow looks like:

- [X] [Install `nvm` (nvm-windows if Windows)](install#system-requirements)
- [X] [Install necessary system dependencies (Linux)](install#linux)
- [X] [Use the latest version of node & install the Testgram CLI via `npm`](install#installing)
- [X] [Verify your installation by running `tg doctor`](install#verifying-your-installation)

## Creating Your World 

### Creating a World

### Connecting your CLI


## Building a Player
What is a player? Blah

### Teaching Testgram (Data Collection)

### Creating a Player

#### Set a Goal

#### Set Field Rules

## Launch a Simulation

### Start a simulation with `tg sim`


## Understanding Results

### Replaying with `tg debug`

### 

## 

## Part 1 - Onboarding:
#### [ ] Connect your world
A world is your application, where Testgram continuously collects pattern data about how people are using your application.

Example: If you are building an educational platform that you want to test in localhost, you can link this as the site that Testgram will learn from.

#### [ ] Map your world
In order for Testgram.ai to run initial simulations in your application, we need to learn a bit about HOW a user might use your application. Over time, Testgram will learn how real users are actually using your application (whether in your local environment or in production) but for the first run, you will need to load the AI engine with a bit of data to make it element-aware. We recommend mapping it with a few flows, or happy paths, that you want to pressure test.

Example: If you want to test the checkout flow for your educational application, you click through to reach your desired outcome (checking out) in a few different ways (3 different sessions, minimum).

#### [ ] Create a player
Players are specialized personas in your application that test specific areas of your application in many different ways. These are high level representations of how you expect real users might use your product. In the previous step, you will have mapped out an area of your application where you would like more testing visibility, so you should create a player that represents that intent.

Example: In the case of the eCommerce checkout flow, you will create a player and might name it something like @checkout_cindy.

#### [ ] Set your player's goals
Now that you’ve shown Testgram a bit more about your application and created a player, you need to assign it the specific goals to reach; these goals take the form of APIs and URLs. Player goals are your way to tell us what you care about testing.

Example: For @checkout_cindy, you might want to create a testing goal defined by the APIs around the checkout

#### [ ] Define the field rules for your player (If applicable for your player's goals)
As you identify player goals, your player might need additional information, called player rules, to reach these goals. Each rule tells the Player about a field that it will likely have to interact with over the course of a simulation. These rules give you the ability to 'hook into' or influence the behavior of the Player, during the simulation.

Example: To reach the desired goals for @checkout_cindy, Testgram might need some form information to complete the process of checking out. In this use case, credit card, email, name, address and phone number might all be realistic inputs required.

#### [ ] Launch your first player!
Now that you’ve built out your player, it’s time to drop them into the environment you want to test! Your player will run through your application in the ways that represent how real users interact with your product. If you want, you can watch the player make its way through your application by including “--watch”. As a reminder, with your first simulation, the pat will be represented by the way you made your way through your application during the earlier `tg map` session. As more input data is gathered, the stronger these simulations will become.

Example: Copy the simulation command on the bottom of the player page ‘tg sim @checkout_cindy’ and drop it in your command line.

#### [ ] Debug
In the case that your simulation comes back with some significant discoveries, Testgram can walk you back through the exact route your player took to spring the error. In an effort to make this process as easy as possible for the developer, the command line presents you with a specific ID, that when entered, spins up a browser and gives you a visual journey back through your application.

Example: Grab the debug ID from the command line and track why @checkout_cindy was unable to complete a purchase!



## Part 2 - Feedback:
#### [ ] Accept the Slack community invite
We’re building a place where all Testgram users can come together and get unblocked on whatever they're working on and continuously present our team with the feedback we need to build a better product. Primarily, we expect conversation to circulate around unique ways of integrating Testgram into workflows and or execution questions, but we also welcome other forms of collaboration!

#### [ ] Read through the updates and channels
See what other people are working on and draw connections to your day to day. Where might you be able to add some color to how community members are approaching a problem? Are there specific product releases that have a greater impact on you than others? Stay tuned in to what’s happening in the world of Testgram and build with others in the community.

#### [ ] Drop your feedback for the Testgram team in #product-feedback!
Again, Testgram is all about feedback. As a team, we spend much of our time working with our users to build features that are going to have the greatest impact for their implementation of Testgram. This can be you! Just drop a note in the feedback channel and we’ll see what we can do.
