# Training a Player

Training is a way to baseline a Player on a specific state of your application.
You can liken this step to the process of "writing tests".
During the training phase, a Player learns a set of critical paths that mimic real user behavior around its goals.

![tg train](/img/gif/train.gif)

## Starting a Train Session
You can train a Player by running 
```bash
tg train
```
Once you select the Player you want to train and the environment you want to train it on, the training session should begin automatically!

### What's *actually* happening?
When a Player is successfully trained, your player has magically learned a few paths. But why *this* path instead of another? What's *actually* happening?

Players are built to mimic real users in pre-production environments. So when you start a train session, a Player takes its goals and tries to identify all of the different points in your application where those goals occur. It then uses the user behavior data you've provided us to identify the critical paths through those points that real users rely on (this is why [data collection](/world/teach) is so important!).

At the end of a train session, your Player has built the critical paths around its goals, and can then reproducibly run these paths during a [simulation](simulate). 

### Troubleshooting a Train
Its possible that a train session did not work. This can be for a number of reasons. Here's what you can look for to fix it: 
1. Your Player's [Rules](/player/rules) didn't work. For example, many applications have login pages, and our Player will have to go through those pages too. If these credentials are incorrect, its likely that the Player wasn't able to login to reach its goals. Similarly, this could happen if say the Player needed to type in a credit card number, or something else into an input field. Make sure all the field rules are properly filled out!
2. 

## Example: Shopping Co. 
Let's say we've created a Player `@checkout_cindy` who has the goal of testing the API endpoint `/checkout`.
During training, `@checkout_cindy` will: 
1. Identify all the locations in your webapp that call the `/checkout` endpoint
2. Analyze the distinct paths that real users interact with the `/checkout` endpoint
3. Attempt to reproduce as many of these paths as possible, and commit them to `@checkout_cindy`'s memory.