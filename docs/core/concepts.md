# Core Concepts
Testgram is a new way of testing web applications using artificial intelligence.

The whole intention of Testgram (and what makes it very different from other testing tools) is to
scalably test the breadth and depth of your application by simulating a large number of real user interactions.

In the end, our goal is to help you build confidence in your code through early detection.

## Testgram is Simple
The magic of Testgram is simple. We don't use user stories, click paths, or scripts in the background. 
**We use data.**

To enable this, Testgram looks really different from many testing tools you may be used to. Here are some of our core concepts:

### World
A [**World**](/world/world) is your application. We continuously [collect data](/world/data) about how people are using your application to build a map of your World.

Your World naturally changes over time as new pages, APIs, or elements get introduced. 
Testgram keeps up with your World through the data it collects.

### Player
In a video game, players are used to complete tasks and conquer levels. 

It's the same in Testgram! A [**Player**](/player/player) is a persona that has goals. These goals are expressed as URLs or APIs.

At runtime, a Player with just a couple of goals can translate to tens, or sometimes even hundreds, of individual tests depending on the number of goals
or the size of your application.

### Simulation
One or more Players run a [**Simulation**](/simulation/simulation).  Running a simulation often looks like running `tg sim @<player_name>` in your command line.

Simulations can run anywhere: from your local machine to CI pipelines and QA environments.

### Event
[**Events**](/event/event) are the issues that Players find as they are testing your application. 
Events are not assertions, rather they're exactly what they sound like: events.

Events can be anything: from Javascript Errors to something more subtle like a slow API response time.
You can customize which events you're interested in for each simulation, install pre-built listeners, or even create custom ones specific to your application.

## Summary
Testgram is a very different way of testing.
What it means to create a 'test', run a 'test', and get feedback looks different in Testgram.
1. We collect data to learn your [World](/world/world).
2. Instead of writing a test, you create a [Player](/player/player).
3. Instead of running a test, you run a [Simulation](/simulation/simulation).
4. Instead of assertions, we capture [Events](/event/event).



