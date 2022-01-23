# **Setting up a mono repo with yarn and lerna**

##### Create a packages folder and put all the inidividual projects there

##### in the root of the project i.e the folder housing the packages folder,

_run the following commands_

```
yarn init -y

run yarn add --dev lerna

run yarn lerna init
```

- These will initialize a package.json file for npm installations
- add lerna as a dev dependency to the project
- initialize the repo as a lerna repositiory

##### Add a private key and a value to the package.json of the root folder. This tells lerna that the root folder wont be published to npm.

```
//root package.json

{
  "name": "@ajulibe/core",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "lerna": "^4.0.0"
  },
  "private": true  //add this
}
```

Add a workspace key to the package.json like below

```
//root package.json

  "workspaces": {
    "packages": [
      "packages/*",
    ]
  }
```

Now we have to tell lerna that we are use yarn as our workspace. The stream option is used to show logs while we are developing

```
  "npmClient": "yarn",
  "useWorkspaces": true,
  "stream": true,
```

You can test if lerna is properly configured. Delete all the node modules folders using the command below

```
rm -rf ./**/node_modules
```

Then run

```
yarn
```

*This will install all the node modules in the respective folders*

create a `.yarnrc.yml` and add `nodeLinker:node-modules` to it

**Also add a version number to the package.json of each package. Like below**

```
{
  "name": "tailwind-blog",
  "private": true,
  "version": "1.0.0",
```

# **SETTING UP REACT WITH ROLLUP**

create a new directory

Run yarn init to create a package.json

run
