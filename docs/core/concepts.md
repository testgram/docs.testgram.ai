# Core Concepts
Testgram is a new way of testing web applications using artificial intelligence.

Testgram takes a very different approach to testing. 
We use AI-driven simulations as a way to test your web application.
Our platform is built to help you easily create and deploy these simulations.

In the end, our goal is to help you build confidence in your code through early detection.

## Testgram is Simple
The magic of Testgram is simple. We don't use user stories, click paths, or scripts in the background. 
**We use real usage data.**

Testgram looks really different from many testing tools you may be used to. 
To understand Testgram, here are some core concepts you'll need to know.

### World
A [**World**](/world/world) is your application. 
We continuously [collect data](/world/data) about how people are using your application to build a map of your World.

Your World naturally changes over time as new pages, APIs, or elements get introduced. 
Testgram keeps up with your World through the data it collects.

### Player
In a video game, players are used to complete tasks and conquer levels. 

It's the same in Testgram! A [**Player**](/player/player) is a persona that has goals. These goals are expressed as URLs or APIs.

At runtime, a Player with just a couple of goals can translate to tens, or sometimes even hundreds, of individual tests depending
on the way we've observed real users interacting with your site, the number of goals, and the size of your application.

### Simulation
One or more Players run a [**Simulation**](/simulation/simulation).  Running a simulation often looks like running `tg sim @<player_name>` in your command line.

Simulations can run anywhere: from your local machine to CI pipelines and QA environments.

### Event
[**Events**](/event/event) are the issues that Players find as they are testing your application. 
Events are not assertions, rather they're exactly what they sound like: events.

Events can be anything: from Javascript Errors to something more subtle like a slow API response time.
You can customize which events you're interested in for each simulation by installing [modules](/market), 
or even create custom ones specific to your application.

## Summary
Testgram is a very different way of testing.
What it means to create a 'test', run a 'test', and get feedback looks different in Testgram.
1. **We collect data to learn your [World](/world/world).** 
   The World keeps learning your application and adjusts as changes are made.
2. **Instead of writing a test, you create a [Player](/player/player).**
   Players run multiple tests based off their goals.
3. **Instead of running a test, you run a [Simulation](/simulation/simulation).**
   Simulations are based on real user behavior and not a user story or assumed interactions.
4. **Instead of assertions, we capture [Events](/event/event).**
   You can focus on the errors that are critical to you like slow response times, Javascript errors, or broken links.



