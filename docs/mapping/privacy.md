# Data Practices

## The tldr;
* We take our data practice *super* seriously.
* Testgram is focused on aggregate data, not user specific data. 
  This means we care about the fact that users, on average type an email address in the login page, not the email address itself.
* The data that reaches our servers cannot be reverse engineered to replicate the user’s exact session, or identify who the user was.
* Testgram collects DOM level information, not user level information. (eg. the structure of the page, element attributes, etc.)
* We're really just developers trying to build something useful for ourselves and our dev community. We don't want your customer data.

## The Details: What data does Testgram collect?

Testgram’s behavior modeling and learning systems try to build a high fidelity snapshot of your application’s steady-state usage. 
In order to do this, Testgram requires you to insert a javascript snippet into your web application code. 
Upon initialization, this snippet opens an encrypted web socket connection from the end user’s browser to Testgram’s servers to transport data.

Here's a nonexhaustive list of the types of data we collect:

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

### Browser Data
* Device type
* Viewfinder size
* Script errors: Javascript errors thrown on the browser during user sessions
* User Agent
* Operating system
* Referrers
* Session duration


Testgram offers a number of custom configuration settings to exercise an even more granular control over the way that Testgram anonymizes sensitive information. 
Most of these can be found in the `World > Settings` page

## Why does Testgram require this data?
Testgram combines the behavior data to create high fidelity machine learning and statistical models that behave the way that your real users behave with your site.
These machine learning models are then used to simulate real user behavior on your pre-production environments so that we can test your application at scale and with the same rigor.

### Does Testgram use this information for its own purposes?
Absolutely not! Testgram hosts data as part of the service it provides to its customers but doesn’t make any claim to said data, similar to the way a bank provides safe deposit boxes.
Websites using Testgram have sole ownership of and access to recorded data.
Testgram does not and **will not** use or sell this data to any third party services, businesses, or individuals.

### Does Testgram use Cookies?
Testgram **does not and will not ever use any cookies** to store data or learn user behavior at all.

## Where is this data stored?
Testgram encrypts all data entering or leaving Testgram infrastructure with TLS/HTTPS. 
All of our databases (all located in AWS) are encrypted at rest. 
Each account’s data is logically separated, and access to data is protected by authentication and authorization controls.
Testgram production data is both processed and stored within Amazon Web Service’s data centers. 
All Amazon data centers that process Testgram data are located in the US. 
Amazon’s data centers are world-renowned for their state of the art security systems. 

If you have customers in the EU or are located in the EU, you will need to sign a Data Processing Agreement (DPA) with Testgram to allow for the transfer of data to these US data centers.

## Do I need to inform my users that their sessions are being recorded?
When you sign up for Testgram, you agree that you have obtained all necessary approvals and/or permissions to use the Testgram Services and that your use of Testgram does not violate your own privacy policy or any applicable laws.

Fortunately, you may already have a Testgram-compliant privacy policy. 
If you use virtually any other analytics or customer-experience service – including Google Analytics, MixPanel, Tealeaf, Omniture, Intercom, Optimizely, and hundreds of others – you have likely already reviewed your privacy policy to ensure it covers these types of products. 
That’s because the techniques used by these other popular platforms to collect your customer’s data are fundamentally no different from Testgram’s.

## Service Levels, Backups, and Recovery
Testgram infrastructure utilizes multiple and layered techniques for increasingly reliable uptime, including the use of autoscaling, load balancing, task queues and rolling deployments. 
Due to the very large amount of data that Testgram stores, we do not currently make point-in-time backups, although we do use highly redundant data stores and/or rapid recovery infrastructure, making an unintentional loss of received data due to hardware failures very unlikely.

## Responsible Disclosure Policy
Testgram is committed to maintaining the security of our systems and our customers’ information.
We appreciate and encourage security researchers to contact us to report potential vulnerabilities identified in any product, system, or asset belonging to Testgram.
If you believe you have identified a potential security vulnerability, please share it with us by notifying us at `security@testgram.ai`.
Upon uncovering security vulnerabilities that could result in a risk to the rights and freedom of natural persons, Testgram will report data breaches to our customers within 72 hours of breach discovery.