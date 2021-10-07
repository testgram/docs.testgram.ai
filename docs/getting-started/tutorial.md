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
A World is your application where you want to test. This is where Testgram keeps track of the two pillars that make Testgram work: 
- Your Data (from all your environments): 
- Your Players (the bots that will test your application for you)


### Creating a World
In the Testgram dashboard, add a world and assign it a name. Again, this world is your application, so ensure the name is appropriate.


### Connecting the `tg` CLI
Once you've successfully created a world and linked your environments, you will be presented with a `tg init <TOKEN>` token. 

![tg init](/img/gif/init.gif)

This is your way to connect your world to the CLI. Copy that command and run it in your CLI.

```bash
tg init <WORLD TOKEN>
```

## ⛹️ Building a Player
A **Player is a simulated user** that achieves a task on your application. 
Going into creating a Player, try to imagine a certain area or workflow of your application you'd like to test.

![create-player](/img/gif/player-create.gif)

### Teaching Testgram (Data Collection)
In order to build a Player that can successfully interact with your application, you first have to teach Testgram a bit about the application - we call this **"mapping your world"**.

#### Show Testgram your World with `tg map`
To jumpstart the data collection process when creating your first few Players, run the command `tg map` in the CLI to spin up a browser and demonstrate a few pathways you might expect a normal user to interact with your application. 

```bash
tg map
```

When you are mapping for the first time, it's important to click around the areas of your application you will want to test - your interactions show Testgram your site’s elements and pages, as well as a predicted path. Repeat this process a few times to show Testgram a few different paths you would expect your users to execute in order to reach their end goal.

The above described manual mapping process is built to get you started seamlessly with Testgram. From a high level perspective, your mapping session represents a single user interacting with your site, and from this, Testgram can extrapolate confidence in certain paths to test.

**But this is *basically* a cheat code.** What if we wanted to do this automatically rather than manually mapping new pathways using `tg map`? For this, we built automatic mapping, a snippet-driven data collection system that lives in your web application's codebase. This is really similar to a Google Analytics script, and helps Testgram learn about how real users interact with your applicaiton continuously so that we can auto-adapt to changing data, auto-heal to chaging-applications, and resiliently simulate real user behavior.

#### Automatic Mapping
Automatic mapping passively gathers usage patterns from whatever environment you wish to collect data (dev, staging, prod, etc). The longer the snippet lives in your code, the stronger the Players and its subsequent tests become. 

:::tip
Your goal should be to migrate to automatic mapping after their first few manually mapped Players are built. Get comfortable with the creation, deployment and feedback gathering workpath, and then start funneling in richer pattern data. This is where Testgram really shines: when our Players are emulating real usage behavior in pre-prod environments.
:::

### Name Your Player
In the Testgram dashboard, create a New Player. 

We recommend creating a name that aligns with the goal. For example, if you want to use this Player to test the checkout path each time they simulate, you might want to name them "Checkout Cindy".

Naming techniques are very important for the successful deployment of Players. You (and eventually your team) will be relying on this name when deploying the right type of tests through your CLI, so care and consistency are important when labelling your Players.


### Set Checkpoints
Checkpoints are your way to guide the behavior of the Player. Checkpoints help define the overall journey that a Player will execute during a simulation. Try to set a few player checkpoints that mimic the journey you just executed during `tg map`. Here are a few things to note about checkpoints: 

* **Checkpoints are ordered.** The checkpoints you put together define an ordered journey that the Player should execute during a simulation.
* **Checkpoints define a user journey, not a test.** There's an art to creating these checkpoints well. Try to think about what parts of the journey really matter to you, and let Testgram simulate the rest. Being too specific means your Player becomes less impactful, and being too broad may not give you the guarantee you want! Checkpoints are your way to defining the user journey, and all of the checkpoints that matter with it: no more, no less. 
* **Checkpoints are data-driven.** As you put together your Player's checkpoints, you will see the real user impact of that journey being projected right next to it. This represents the *funnel* of users who go through those checkpoints, so you get a sense of how many people your Player really impacts.

If you do not see a URL or Element that you are looking for, this means that your Player was not able to learn enough from data gathered to this point. You can quickly jump back into the `tg map`experience (if you previously manually mapped) or your pre-prod environment (if automatic mapping) to click around and provide more application data to the Testgram engine.

### Set Input Fields
As you assign Players’ checkpoints, your Player might need additional information to reach their goals (called Input Fields). Each input field tells the the Player about an input element that it will likely have to interact with over the course of a simulation. Because Testgram does not collect typed user data, these rules give you the ability to 'hook into' or influence the behavior of the Player during the simulation.

What do these input fields look like? Everything from passwords, emails, radio buttons, dates inputs, etc. Any variable that your Player might interact with during its paths, Testgram builds into Player rules.

## 🚀 Launch a Simulation
Now that you’ve built out and trained your player, it’s time to drop them into the environment with `tg sim @<PLAYER_NAME>`! Your player will run through your checkpoints in your application.

```bash
tg sim @<PLAYER_NAME>
```

![tg sim](/img/gif/sim.gif)

The default status of a player is to run in headless mode, as to not interrupt your current workflow. However, if you want to watch the player make its way through your application simply include `--watch` to the end of the sim command: `tg sim --watch`.

## 🧐 Understanding Results
<!-- ### If you don’t see any bugs...
When you simulate your player the first time, you will likely not see a discovery. Why? Well, unless you jumped in your codebase and added a few disruptive lines since the last step, the current state of the application will be exactly as it was when you were training the player. 

So just keep in mind that it’s expected to not see any errors at first, you will only see issues when you introduce features or code that breaks crucial user paths. If you're interested in what a debug output looks like, run `tg sim --demo`, and testgram will *try* to introduce a fake issue into the path so you can see what an issue would look like! -->

### Replaying with `tg debug`
In the case that your simulation comes back with significant discoveries that break your checkpoints, Testgram can walk you back through the exact route your player took. 

![tg sim debug](/img/gif/debug.gif)

In an effort to make this process as easy as possible for the developer, the command line presents you with a specific ID, that when entered, spins up a browser and gives you a visual journey back through your application.
```bash
tg debug <DEBUG_ID>
```

### Sharing Debug Reports
If you find a bug that you want an additional set of eyes on, simply copy the share URL (it usually follows the form https://run.testgram.ai/#/debug/<DEBUG_ID>) in the command line and send it to the desired team member. This allows for easy viewing of the bug, and appropriate context (time of discovery, player name, goals, and a video walkback of the event occurring.)


## 🙏 What's next?
You did it, you’ve run your first player! Be sure to keep that player active in your workflow, let them work! 😉


### Connecting with the Community (Slack)
We’re building a place where all Testgram users can come together and get unblocked on whatever they're working on and continuously present our team with the feedback we need to build a better product. Primarily, we expect conversation to circulate around unique ways of integrating Testgram into workflows and or execution questions, but we also welcome other forms of collaboration!

We will automatically add you to the channel so you can jump right in with the rest of the Testgram users. If you aren’t interested, please feel free to ignore the invite.

#### Updates and channels
You can see what other people are working on and draw connections in the variety of channels in the Testgram community Slack. Where might you be able to add some color to how community members are approaching a problem? Are there specific product releases that have a greater impact on you than others? Stay tuned in to what’s happening in the world of Testgram and build with others in the community.

#### Feedback for other developers and the Testgram
Testgram is all about feedback. As a team, we spend much of our time working with our users to build features that are going to have the greatest impact for their implementation of Testgram. This can be you! Just drop a note in the feedback channel and we’ll see what we can do.



