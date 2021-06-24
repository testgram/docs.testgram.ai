# Collecting Data

Data collection is an important step in getting Testgram to be able to simulate usage on your application. 
Similar to Google Analytics, Testgram has its own Javascript snippet. 

There are two ways to feed Testgram. The best part is that you don't have to choose. You can choose to do one or both at any time!


## Option One: Automatic Mapping (Recommended)
Each world has a unique snippet associated with it so that we can associate the data we collect with your world. 
You can find your world's snippet in the `World > Settings`. It will look something like: 
```html
<script src="http://sim.testgram.ai/js/world/{YOUR_WORLD_ID}" type="text/javascript"></script>
```
Directly inject the Javascript snippet as the first tag in the `<head>` of your `index.html` file.
The same snippet can be used across all environments (eg. you can use the same snippet in your local, QA, staging, or even production environments).

This option is recommended because it allows Testgram to passively learn new functionality as you, your team, your company, or even your real users are using your application. 
It's the best way to ensure that the data we collect remains fresh and your simulations and players are most effective.

### Do I have to collect data in production for this to work?
**Absolutely not!!!** Testgram needs data for how *people* use your application. We work great just collecting data from your dev team, QA team, or anyone else
in pre-prod environments.

### Ignoring Certain Domains
If you want to collect data from all environments *except* a certain environment, you can ignore certain domains. 
You can set this up through your `World > Settings` page.

## Option Two: Manual Mapping
:::tip
In fact, the manual option is actually just a utility wrapper around the Javascript snippet to make the process of getting started easier.
When you run `tg map`, we just spin up a browser with the Javascript snippet pre-injected. This is why you can always use either option, or both!
:::
If you don't want to inject the Javascript snippet directly into your codebase, you can easily get your feet wet with Testgram using the manual mapping.

Ensure you have the [cli installed on your local machine](/getting-started/install). 

Now run `tg map` in your command line to spin up a browser with the snippet pre-injected.

We recommend using `tg map` as a way to seed Testgram with information about your application. 
Try to do short sprints no longer than a few minutes showing Testgram how to use certain parts of the application you intend to test.

## What now? 
Once you've collected some data, it's time to design your first simulation by creating a [Player](/player/player).

## What data does Testgram collect?

As we were building the data infrastructure at Testgram, we took every conceiveable measure to make sure that **we don't collect *any* end user data**.
As an AI product, we care about understanding aggregate patterns of behavior, not the behavior or infromation of any specific user.
If you want to find out more, [check out our page on what data we collect and how we store it](privacy).

## What does it do with this data?
AI systems are always data hungry, and Testgram is training these systems to understand, interact with, and test your application for you.
We use this data to:
* Understand what your application looks like (eg. understand how your application is laid out, which pages/URLs exist, which APIs exist, and how they relate)
* Learn to replicate user behavior (eg. how a typical user in your application would edit their profile, login, or generate a report)
* Adapt to your changing application (eg. learn how to interact with new or changed features)
* Help you make better and more complete Players (eg. autocomplete goals, suggested rules, etc.)
* ... and much more!

In short, the data we collect keeps our system alive.