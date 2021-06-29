# Architecture

**The goal of testing is to build confidence through early detection**; 
the earlier we can detect important issues, the faster we can fix them and prevent them from affecting (more of) your users. 
It helps us build faster, build better, and build stronger products.

Modern web applications have become really complex. That means that there are also many more ways to break them.
This makes it really hard to test them well.

Testgram was built from the ground up to help us test the modern web. 
At Testgram, we often talk about taking a blank slate, first principles approach to web testing. Here’s what we mean:

## Guiding Principles

### Testgram gets better with time and usage.
Today, tests are often written with a certain snapshot of the application in mind - specific use cases, states, or clickpaths.

Today, tests are often written with a certain snapshot of the application in mind - specific use cases, tags, or clickpaths.  
So, when your application changes, traditional tests break - and this just gets worse with time.

Use cases are missed, new code is introduced and old code removed, and ultimately your tests begin failing.

Testgram is built for change. It's built to constantly learn and adapt with your application
so the tests we run are always up to date.

* If a new feature comes out, you don't have to teach us your whole application again. 
  We learn which parts are different and which parts are the same. End result: your Players don't break.
* If one team member teaches us something, we remember it so that you don't have to reteach us. 
* Testgram can passively learn, so as people use your application, Testgram keeps getting better.
* As a Player runs more often, that Player learns to be more efficient. 
  A Player learns what it can and can't do to test certain goals and builds a memory of its previous experiences so it doesn't repeat the same mistakes.

...and all this happens constantly with every click, every simulation, and every Player.

### Testgram runs early and often.
Testing is all about early detection. We wanted to take away every barrier to running simulations early and often.

Testgram is built to run early and often in your workflow: starting on your local machine, CI pipelines, intermediate QA/staging environments or production.

### Testgram is easy.
Testing has always been a major pain in the ![](/img/space.svg "Space Dinosaur").

As developers ourselves, we wanted to build something that was easy to get started with, and something that was easy to make our own.
Testgram is built to be easy to get started with, 
yet highly customizable with pluggable & custom events and Player [Rules](/player/rules).

### Testgram is data-driven.
Unlike many web testing frameworks, data and machine learning are woven into the fabric of our approach.
The data we collect is used *everywhere*, from figuring out how to run a player and which buttons to click
down to figuring out what the best selectors for an element are, understanding coverage, and prioritizing tests.
When in doubt, we always use **data**.

![](/img/data_meme.jpeg)


### Testgram gets the little things right, so you can focus on the big stuff.
As developers, we saw that the most basic things in testing were really hard.
We've spent a lot of time getting the little things right so you don't have to:
* We build data & AI driven selectors, so if the element is on the page, we can (*almost*) always find it.
* Testgram can replay the steps to recreate any event we've captured, live.
* You can run any simulation across multiple browsers.
* Testgram interprets the DOM like a human does, so we never have arbitrary time-based waits for loads, APIs, or selectors. This means
  your simulations run *really* fast.
* ... and so much more!

### Testgram is collaborative.
Testing often happens in the dark.

We saw that there was a lot to gain by sharing our work, data, and tooling between members of our team.
Testgram is built for collboration with information sharing principles at its heart: 
* **Share Players. Share Worlds. Share Work.** Testgram puts you in the driver seat. 
  Share Players with your team to help them run simulations, and make your Player better.
* **Let Testgram keep getting better for you.** With more team members, more Players, and more simulations Testgram keeps getting better for you.
* **Enable better testing through collaboration.** Build on your team's work to make your own specialized Players to test new features.

Testgram is where testing gets the visibility it needs across the engineering organization.
