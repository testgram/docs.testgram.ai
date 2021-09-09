# Tutorial

## 🛠️ System Setup & Installation
To go through this tutorial, you will need to have the `tg` CLI application correctly installed. 
[An installation guide along with the specific commands to install Testgram can be found here](install).
The overall path looks like:

- [X] [Install `nvm` (nvm-windows if Windows)](install#system-requirements)
- [X] [Install necessary system dependencies (Linux)](install#linux)
- [X] [Use the latest version of node & install the Testgram CLI via `npm`](install#installing)
- [X] [Verify your installation by running `tg doctor`](install#verifying-your-installation)

## 🌍 Creating Your World
A World is your application. This is where Testgram keeps track of the two pillars that make Testgram work: 
- Your Data (from all your environments): 
- Your Players (the bots that will test your application for you)

A world can consist of multiple environments (your application in different deployments, domains, and stages of developemnt), giving you the power to choose where you train your Players, and where you deploy those Players for testing.


### Creating a World
In the Testgram dashboard, add a world and assign it a name. Again, this world is a representation of the application, so ensure the name is appropriate.


### Connecting the `tg` CLI
Once you've successfully created a world and linked your environments, you will be presented with a `tg init <TOKEN>` token. This is your way to connect your world to the CLI. Copy that command and run it in your CLI.

![tg init](/img/gif/init.gif)

## ⛹️ Building a Player
A Player is a specialized persona that tests a *specific area* of your application in **many different ways**. 
These Players learn from real usage data and are **trained** to replicate real user behavior around their **goals**.

### Teaching Testgram (Data Collection)
In order to build a Player that can successfully interact with your application, you first have to teach Testgram a bit about the application - we call this **"mapping your world"**.

#### Show Testgram your World with `tg map`
To jumpstart the data collection process when creating your first few Players, utilize the command `tg map` in the CLI to spin up a browser and demonstrate a few pathways you might expect a normal user to interact with your application. When you are mapping for the first time, it's important to click around the areas of your application you will want to test - your interactions show Testgram your site’s elements, APIs and URLs, as well as a predicted path. Repeat this process a few times to show Testgram a few different paths you would expect your users to execute in order to reach their end goal.

The above described manual mapping process is built to get you started seamlessly with Testgram. From a high level perspective, your mapping session represents a single user interacting with your site, and from this, Testgram can extrapolate confidence in certain paths to test in your simulation.

**But this is *basically* a cheat code.** What if we wanted to do this automatically rather than manually mapping new pathways using `tg map`? For this, we built automatic mapping, a snippet-driven data collection system that lives in your web application's codebase and allows all user data to be captured and built into the paths that Players will test. You can set this up at any time to feed us more usage data.

#### Automatic Mapping
Automatic mapping passively gathers usage patterns from whatever environment you wish to collect data (dev, staging, prod, etc). The longer the snippet lives in your code, the stronger the Players and its subsequent tests become. 

:::tip
Your goal should be to migrate to automatic mapping after their first few manually mapped Players are built. Get comfortable with the creation, deployment and feedback gathering workpath, and then start funneling in richer pattern data. This is where Testgram really shines: when our Players are emulating real usage behavior in pre-prod environments.
:::

### Name Your Player
In the Testgram dashboard, create a New Player. 

We recommend creating a name that aligns with the goal. For example, if you want to use this Player to test the checkout path each time they simulate, you might want to name them "Checkout Cindy".
Naming techniques are very important for the successful deployment of Players. You (and eventually your team) will be relying on this name when deploying the right type of tests through your CLI, so care and consistency are important when labelling your Players.

We recommend creating a name that aligns with the goal. For example, if you want to use this Player to test the checkout path each time they simulate, you might want to name them "Checkout Cindy"..


### Set a Goal
Player goals are your way to tell us what you care about testing, as represented by an API or URL endpoint.

When filling out each goal, the fields will give you the option to autofill based on what it has already learned about your application. Start with a "/" and additional information will appear below in a dropdown. The goals chosen should align directly WHAT you want to test. Avoid adding goals that do not relate to the intent of the Player; each Player should be specialized for a specific user mentality, or persona representation.

If you do not see a URL or API that you are looking for, this means that your Player was not able to learn enough from data gathered to this point. You can either manually fill in the field, or you can quickly jump back into the `tg map`experience (if you previously manually mapped) or your pre-prod environment (if automatic mapping) to click around and provide more application data to the Testgram engine.

### Set Field Rules
As you assign Players’ goals, your Player might need additional information to reach their goals (called Player rules). Each rule tells the Player about a field that it will likely have to interact with over the course of a simulation. Because Testgram does not collect user data, these rules give you the ability to 'hook into' or influence the behavior of the Player during the simulation.

What do these field rules look like? Everything from passwords, emails, radio buttons, dates inputs, etc. Any variable that your Player might interact with during its paths, Testgram builds into Player rules.

## 🚀 Launch a Simulation

### Training your Player for Deployment with `tg train`
In the likely case that this is the first time running a Player, you will need to train your Player before simulation. During this training process, your Player will identify critical paths to test each time you simulate. You can liken this to a test writing stage, but rather than you or a teammate sitting and manually doing it, your Player does it for you automatically (pretty darn convenient). 

Run ‘tg train” to seed them with enough simulation experiences to load the algorithm and reach the confidence bound for a successful path being executed.

![tg train](/img/gif/train.gif)

Note: The ‘tg train’ process can also be used when you want to reset your critical paths in the future.

### Start a simulation with `tg sim`
Now that you’ve built out and trained your player, it’s time to drop them into the environment with `tg sim @<PLAYER_NAME>`! Your player will run through your application in the paths that were identified as critical during the training phase.

![tg sim](/img/gif/sim.gif)

The default status of a player is to run in headless mode, as to not interrupt your current workflow. However, if you want to watch the player make its way through your application simply include “--watch” to the end of the `tg sim` command.

## 🧐 Understanding Results
### If you don’t see any bugs...
When you simulate your player the first time, you will likely not see a discovery. Why? Well, unless you jumped in your codebase and added a few disruptive lines since the last step, the current state of the application will be exactly as it was when you were training the player. 

So just keep in mind that it’s expected to not see any errors at first, you will only see issues when you introduce features or code that breaks crucial user paths. If you're interested in what a debug output looks like, run `tg sim --demo`, and testgram will *try* to introduce a fake issue into the path so you can see what an issue would look like!

### Replaying with `tg debug`
In the case that your simulation comes back with significant discoveries that break your critical flows, Testgram can walk you back through the exact route your player took to spring the error. In an effort to make this process as easy as possible for the developer, the command line presents you with a specific ID, that when entered, spins up a browser and gives you a visual journey back through your application.
```bash
tg debug <DEBUG_ID>
```

### Sharing Debug Reports
If you find a bug that you want an additional set of eyes on, simply copy the share URL (it usually follows the form https://run.testgram.ai/#/debug/<DEBUG_ID>) in the command line and send it to the desired team member. This allows for easy viewing of the bug, and appropriate context (time of discovery, player name, goals, and a video walkback of the event occurring.)


## What's next?
You did it, you’ve run your first player! Be sure to keep that player active in your workflow, let them work! 😉


### 🙏 Connecting with the Community (Slack)
We’re building a place where all Testgram users can come together and get unblocked on whatever they're working on and continuously present our team with the feedback we need to build a better product. Primarily, we expect conversation to circulate around unique ways of integrating Testgram into workflows and or execution questions, but we also welcome other forms of collaboration!

We will automatically add you to the channel so you can jump right in with the rest of the Testgram users. If you aren’t interested, please feel free to ignore the invite.

#### Updates and channels
You can see what other people are working on and draw connections in the variety of channels in the Testgram community Slack. Where might you be able to add some color to how community members are approaching a problem? Are there specific product releases that have a greater impact on you than others? Stay tuned in to what’s happening in the world of Testgram and build with others in the community.

#### Feedback for other developers and the Testgram
Testgram is all about feedback. As a team, we spend much of our time working with our users to build features that are going to have the greatest impact for their implementation of Testgram. This can be you! Just drop a note in the feedback channel and we’ll see what we can do.



