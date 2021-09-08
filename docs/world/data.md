# How Data Works at Testgram

## tl;dr
- We take our data practice *super* seriously.
- Testgram is focused on aggregate data, not user-specific data. 
- This means we observe that users are typing something that looks like an email address in the login page, not the actual email address itself.
- The data we collect is de-identified.
- Testgram generally collects DOM-level information, not user-level information. (eg. the structure of the page, element attributes, etc.)
- We're really just developers trying to build something useful for ourselves and our dev community. We don't want your customer data.
- **For description of our privacy practices, see our Privacy Policy**

## The Details: What data does Testgram collect?

Testgram’s behavior modeling and learning systems try to build a high fidelity snapshot of your application’s steady-state usage. 
To do this, Testgram requires you to insert a javascript snippet into your web application code. 
Upon initialization, this snippet opens an encrypted web socket connection from the end user’s browser to Testgram’s servers to transport data.

Here's a non-exhaustive list of the types of data we collect:

### Usage Data
* Clicks 
* Mouse Movements 
* Scrolling
* Form Fills & Text: all information is [SHA-256](https://en.wikipedia.org/wiki/SHA-2) hashed on device before reaching Testgram’s servers. 
  This means we cannot reverse engineer what data was originally on the page.
* Visited Page URLs
* API Request & Response URLs
* API Request / Response Schemas: Just the keys of the json, not the values
* Element level selectors
* *Only if you are collecting data through the `tg map` function in the command line, we will additionally collect the form fill text and keystrokes as well. Again, this only happens when you are in the browser created by Testgram via `tg map`.*

### Browser Data
* Device type
* Viewfinder size
* Script errors: Javascript errors thrown on the browser during user sessions
* User Agent
* Operating system
* Referrers
* Session duration


Testgram offers several custom configuration settings to exercise even more granular control over the way that Testgram anonymizes sensitive information.

## Why does Testgram require this data?
Testgram combines the behavior data to create high fidelity machine learning and statistical models that behave the way that your real users behave with your site.
These machine learning models are then used to simulate real user behavior on your pre-production environments so that we can test your application at scale and with the same rigor.

## Where is this data stored?
Testgram encrypts all data entering or leaving Testgram infrastructure with TLS/HTTPS. 
All of our databases (all located in AWS) are encrypted at rest. 
Each account’s data is logically separated, and access to data is protected by authentication and authorization controls.
Testgram production data is both processed and stored within Amazon Web Service’s data centers. 
All Amazon data centers that process Testgram data are located in the US. 
Amazon’s data centers are world-renowned for their state-of-the-art security systems.

## Do I need to inform my users that their sessions are being recorded?
When you sign up for Testgram, you agree that you have obtained all necessary approvals and/or permissions to use the Testgram Services and that your use of Testgram does not violate your own privacy policy or any applicable laws.

Fortunately, you may already have a Testgram-compliant privacy policy. 
If you use virtually any other analytics or customer-experience service – including Google Analytics, MixPanel, Tealeaf, Omniture, Intercom, Optimizely, and hundreds of others – you have likely already reviewed your privacy policy to ensure it covers these types of products. 
That’s because the techniques used by these other popular platforms to collect your customer’s data are fundamentally no different from Testgram’s.