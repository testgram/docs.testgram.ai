# Installing Testgram

:::note
What you'll learn
* How to install the Testgram CLI via `npm`
* How to connect the Testgram CLI to your account & your world
:::

## System Requirements
### Node.js (All Platforms)
Testgram is a CLI application that is installed on your computer. We support:
* [**Node.js 14.15 and above with npm 6.17 and above**](https://nodejs.org/en/download/) You can install it on your platform [here](https://nodejs.org/en/download/).
We recommend using a tool like [`n`(Node Manager)](https://www.npmjs.com/package/n) to manage multiple node versions and node environments.

### Linux
If you're using Linux, you'll want to have the required dependencies installed on your system.

Ubuntu/Debian
```shell
apt-get install build-essential cmake libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

CentOS
```shell
yum install -y gcc gcc-c++ make cmake xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

### Windows
On Windows OS, due to Windows security, Windows Firewall may restrict to use of the `Node.js JavaScript Runtime` and the `Node.js: Server-side Javascript`.
*When prompted, make sure to allow Windows Firewall to use these apps.*

Otherwise, you can navigate to `Start > Windows Security > Firewall & Network Protection Settings` and in the list of `Allowed apps and features` check both `Node.js JavaScript Runtime` and the `Node.js: Server-side Javascript`.

`Start > Windows Security > Firewall & Network Protection Settings` |  `Allowed apps and features`
:-------------------------:|:-------------------------:
![](/img/windows/windows-1.png)  |  ![](/img/windows/windows-2.png)

## Installing
The CLI is the primary interface for Testgram where you will run simulations, view events & errors, and get helpful debugging/playback information. 
Use npm or Yarn to install the Testgram CLI on your computer.

**If you are not using node manager, use `sudo` in front of each command to correctly expose the `tg` global command.**

### Install Testgram via `npm`
```shell
npm install -g @testgram/cli
```

### Install Testgram via `yarn`
```shell
yarn global @testgram/cli
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

In this step, the CLI creates a `tgconfig.json` in the same parent directory of the `node_modules` folder.
This file that can, and should be committed up to your project repo (if you want other people using this!).


