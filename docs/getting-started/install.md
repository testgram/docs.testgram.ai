# Installing Testgram

:::note
What you'll learn
* How to install the Testgram CLI via `npm`
* How to connect the Testgram CLI to your account & your world
:::

## System Requirements
### Node.js
Testgram is a CLI application that is installed on your computer. We support:
* [Node.js 12 or 14 and above.](https://nodejs.org/en/download/) You can install it on your platform [here](https://nodejs.org/en/download/).

### Linux
If you're using Linux, you'll want to have the required dependencies installed on your system.

Ubuntu/Debian
```shell
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

CentOS
```shell
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

## Installing
The CLI is the primary interface to Testgram where you will run simulations, view discoveries & errors, and get helpful debugging/playback information. 
Use npm or Yarn to install the Testgram CLI on your computer.
### Install Testgram via `npm`
```shell
npm install -g testgram
```

### Install Testgram via `yarn`
```shell
yarn global testgram
```

This single command:
* Downloads the Testgram `npm` package
* Downloads the browser binaries Testgram needs to run simulations on your machine
* Exposes the global `tg` command to run Testgram simulations and view its results

:::tip Using Testgram for Multiple Applications
If you are using Testgram for multiple worlds or applications, it is recommended to just install it once globally. 
You can use the same installation to intitialize and run across mutltiple worlds in your system. Think of this similar to 
your GitHub credentials you would use across multiple repositories.
:::

## Initializing
First, navigate to the root directory of the application corresponding to the world you are setting up.
```shell
cd ~/my/app
```
Next, you can find your personal world init token as you are setting up your application, or generate a new one in the `World > Settings`. 
Once you have your token in your application root directory, initialize your Testgram world by running:
```shell
tg init $PERSONAL_WORLD_TOKEN
```

In this step, the cli creates a folder called `testgram` under which we will store any world specific configuration options you set up.



