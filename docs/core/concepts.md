# Core Concepts
Testgram is a new way of testing web applications using artificial intelligence.

We take a very different approach to testing. Testgram differs from traditional testing in two key ways: 
1. **Testgram tests through simulations, not scripts.** We use data-driven simulations as a way to test your web application. 
   While an individual script may test one specific path through an application, a single simulation tests 
   can tens or even hundreds of unique paths. This is important because it allows us to test modern applications, 
   in *all the ways that they're really used*.
2. **Testgram tests the critical paths in your application.**
   There are no assertions in Testgram. 
   When you train a Player, Testgram builds a baseline understanding of a few, impactful set of paths that your users take when interacting a specific area of your application (a goal).
   When you simulate, these Players verify the same paths are still working. 

Everything in our platform is built to help you easily create and deploy these simulations.
In the end, our goal is to help you build confidence in your code through early detection.

## Testgram is Simple
The magic of Testgram is simple. We don't use user stories, click paths, or scripts in the background. 
**We use real usage data.**

Testgram looks really different from many testing tools you may be used to. 
To understand Testgram, here are some core concepts you'll need to know.

### World
A [**World**](/world/world) is your application. 
We continuously [learn](/world/teach) about how people are using your application to build a map of your World.

Your World naturally changes over time as new pages, APIs, or elements get introduced. 
Testgram keeps up with your World through the data it collects.

### Player
In a video game, players are used to complete tasks and conquer levels. 

It's the same in Testgram! A [**Player**](/player/player) is a persona that has goals. These goals are expressed as URLs or APIs.

Players are trained using `tg train`. At train-time, a Player with just a couple of goals can translate to tens, or sometimes even hundreds, of individual tests depending
on the way we've observed real users interacting with your site, the number of goals, and the size of your application.

### Simulation
One or more Players run a [**Simulation**](/simulation/simulate).  Running a simulation often looks like running `tg sim @<player_name>` in your command line.

Simulations can run anywhere: from your local machine to CI pipelines and QA environments.

## Summary
Testgram is a very different way of testing.
The way we create a 'test', run a 'test', and get feedback looks very different in Testgram.
1. **We collect data to learn your [World](/world/world).** 
   The World keeps learning your application and adjusts as changes are made.
2. **Instead of writing a test, you create a [Player](/player/player).**
   Players run multiple tests based off their goals.
3. **Instead of running a test, you run a [Simulation](/simulation/simulate).**
   Simulations are based on real user behavior and not a user story or assumed interactions.



