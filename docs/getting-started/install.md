# Installing Testgram

:::note
What you'll learn
* How to install the Testgram CLI via `npm`
* How to connect the Testgram CLI to your account & your world
:::

## System Requirements

Testgram is a CLI application that is installed on your computer. The easiest way to install is via `npm`.
We support **Node.js >=14.15.2 with npm >= 6.17**. We ***highly*** recommend using a node version manager 
such as `nvm` to install Testgram and manage your node versions. We'll show you how to get set up the correct version of node below.


### MacOS
Install [`nvm`](https://github.com/nvm-sh/nvm#install--update-script) by running:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

The script clones the nvm repository to `~/.nvm`. Run the following command to properly link nvm to your context and finish the `nvm` installation.

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

You're now all set to [install Testgram](#install-testgram-via-npm)!

:::caution M1 Macs
Node versions <=14 do not work on Apple Silicon (M1) machines because the
ARM architecture is not supported by those node versions.

If you're on an M1 Mac, we recommend using the future LTS version of Node.js (v16) which will be transitioning to Active LTS starting in October 2021.
*Instead of installing Node v14*, install Node v16 (only for M1 Macs) during the [installation](#install-testgram-via-npm) by running:
```shell
nvm install 16
```
:::

### Linux
Install [`nvm`](https://github.com/nvm-sh/nvm#install--update-script) by running:

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

The script clones the nvm repository to `~/.nvm`. Run the following command to properly link nvm to your context and finish the `nvm` installation.

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

You'll also want to have the required additional dependencies installed on your system (below).

**Ubuntu/Debian**
```shell
apt-get install build-essential cmake libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

**CentOS**
```shell
yum install -y gcc gcc-c++ make cmake xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

You're now all set to [install Testgram](#install-testgram-via-npm)!

### Windows
`nvm` is not supported on Windows, but we've found an [alternative version manager that happens to be "The npm/Microsoft/Google recommended Node.js version manager for Windows."](https://github.com/coreybutler/nvm-windows).

[Download the latest installer (`nvm-setup.zip`)](https://github.com/coreybutler/nvm/releases) and install windows-nvm.

## Installing
The CLI is the primary interface for Testgram where you will run simulations, view events & errors, and get helpful debugging/playback information. 
Use npm or Yarn to install the Testgram CLI on your computer.

First ensure your `node --version` is >= 14.15.2. You can get on the current latest LTS version of Node by running:
Ensure you are running the latest version of node via `nvm` by running:
```shell
nvm install 14.17.3
```

### Install Testgram via `npm`
Now to install Testgram, run:
```shell
npm install -g @testgram/cli
```

### Install Testgram via `yarn`
If you would like to use `yarn` instead of `npm`, run:
```shell
yarn global add @testgram/cli
```

This single command:
* Downloads the Testgram `npm` package
* Downloads the browser binaries Testgram needs to run simulations on your machine
* Exposes the global `tg` command to run Testgram commands

:::tip Using Testgram for Multiple Applications
Testgram should only be installed once, even if you are using Testgram for multiple applications/companies. 
You can use the same installation to initialize and run across multiple worlds in your system. 
Think of this similar to your GitHub credentials you would use across multiple repositories.
:::

## Verifying Your Installation
When you run a simulation, Testgram is doing a whole bunch of things under the hood.
For example, when we're running simulations, your Players are controlling a remote browser hosted on your local machine from somewhere in the Testgram cloud!
We wrote a simple utility command to verify all this.

To make sure you're set up correctly, run:
```shell
tg doctor
```

If everything is working properly, you should see: 
```text
Diagnosing Installation...
Communicating with https://sim.testgram.ai
Acquire Simulator: passed
Open Chromium Browser: passed
Open Secure Tunnel: passed
Talk to Simulator: passed
```

## Initializing
First, navigate to the root directory of the application corresponding to the world you are setting up.
```shell
cd ~/my/app
```
Next, you can find your personal world init token as you are setting up your application or at the bottom of the `Players` list page on the web application. 
Once you have your token in your application root directory, initialize your Testgram world by running:
```shell
tg init $PERSONAL_WORLD_TOKEN
```

<!-- ![tg init](/img/gif/init.gif) -->

In this step, the CLI creates a `tgconfig.json` in the same parent directory of the `node_modules` folder.
This file that can, and should be committed up to your project repo (if you want other people using this!).


