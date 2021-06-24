# Introduction to Events
Events are issues that occur while a [Player](/player/player) is running a simulation.
The events that Testgram listens for can be customized using our 

Testgram listens for a few basic events out of the box, but this is one of the most customizable
features in Testgram! You can add event listeners anywhere you want.

By default, Testgram listens for Javascript Errors, Unhandled Rejections, and 404/5xx status codes.

You can customize which event listeners

Based on your preference, we have many more pre-built listeners you can enable

There are many more you can enable based on what you want Testgram looking for. These include but are not limited to:
* Broken link detection
* Text Overflow (Text flowing outside of its specified bounding box)
*

You can add your own custom event listeners


As a Player is running a Simulation, it is looking for specific **Events**.

## Finding Events, not Assertions
Testgram takes a monitoring, event driven approach to finding issues in your application.
This gives us a couple of architectural advantages that enable some of the best things in Testgram. 

### There are no false positives.
Another way to say this is that Testgram finds issues that happened (as opposed to assertions, where it tells you what was supposed to happen, but didn't).
When Testgram captures an event, we can be sure that the event occurred.

### Testgram's AI can easily adapt to new features, flows, and data.
Assertions are fundamnetally brittle. They try to induce a specific state in the application, and assert over some property in that state.
While assertions are useful in some tests, we often just want to find what *really is breaking* in our applications.

On the other hand, Players do not (and will not ever) assert over a specific state.
This is because a single Player can run tens, or even hundreds of individual tests to test different flows over your application driven by the data we collect.
This also means that when your application changes, new features are introduced, or the underlying dataset changes, our tests don't break!

### We often find regressions you didn't know you were looking for.
The most painful regressions often creep up on us. A button stops rendering correctly on WebKit/Safari, our API response time gets unacceptably slow, 
a seemingly innocous Javascript error shows up, etc, and our automated tests almost never catch them because often, they aren't even looking.

Testgram constantly watches for the events specify, and always keep a look out for them in every simulation you run. The moment they pop up, you're the first to know.
  
### Collecting debug information is easier. 
An event is captured with all of it's contextual metadata along with a live step-by-step browser replay of the steps that led up to it. This makes reproducing 
an event much easier.




## Architecture
In a Player runtime, Testgram exposes the `testgram.event({...})` function in the browser's context.

```typescript
function x(): string {
    
}
```