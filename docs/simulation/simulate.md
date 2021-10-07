# Launching a Simulation

Simulations are where Players run the paths they were [trained](train) to execute.

## Start a Simulation
You can start a simulation by running:
```
tg sim
```
Then, select the players you want to simulate and the environment you'd like to simulate on! 

![tg sim](/img/gif/sim.gif)

### What's *actually* happening?
Players are built to mimic real users in pre-production environments. So when you start a simulation, a Player takes its checkpoints and tries to identify all of the different ways real users interact with those checkpoints. *How do users respond ff the page has an extra button on it? What happens if there's no data on the screen? How do users respond if the page is green instead of blue? Everything...*

These user behavior models then feeds into the Player simulation runtime so that the Player can mimic your real users. This helps it adaptively execute through its checkpoints (this is why [data collection](/world/teach) is so important!).

### Troubleshooting a Simulation
Its possible that a simulation did not work. This can be for a number of reasons. Here's what you can look for to fix it: 
1. Your application is actually broken. Take a look at the debug report, rerun the steps with `tg debug <DEBUG ID>` to see if this is a real issue!
2. Your Player's [Rules](/player/inputs) didn't work. For example, many applications have login pages, and our Player will have to go through those pages too. If these credentials are incorrect, its likely that the Player wasn't able to login to reach its checkpoints. Similarly, this could happen if say the Player needed to type in a credit card number, or something else into an input field. Make sure all the field rules are properly filled out!