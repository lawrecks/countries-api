# countries-api

A NodeJs GraphQL server which allows you to look up a country by name and returns the full name, population and a list of its official currencies including current exchange rate to SEK.

---

## Built With

- Node.js
- Typescript
- GraphQL
- Git
- Express
- Mocha, chai and supertest
- Json Web Token
- Postman

## Requirements

You will need Node.js (version 14 and above) and a node global package installed in your environment.

### Node

- #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

    ##### Installation Commands

        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Other Operating Systems

    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
    If the installation was successful, you should be able to run the following command.

    ##### Verify versions

        $ node -v
        v14.17.5
        $ npm -v
        6.14.14

---
## Clone this project

    $ git clone https://github.com/lawrecks/countries-api.git
    $ cd countries-api
    
## Install dependencies
    $ npm install

## Configure app

- Create a file named `.env` in the project root directory
- Add the environment variables as described in the `.env.example` file

## Running this project locally

    $ npm run dev

## Running tests

    $ npm test


## Documentation

Postman: https://documenter.getpostman.com/view/10148336/UVsJvmNg


## Show your support

Give a ⭐️ if you like this project!

## Copyright

Copyright (c) 2021 Ugochukwu Ejiogu
