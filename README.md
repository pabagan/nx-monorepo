# NX App

## Create workspace

```sh
# Install nx
npm install -g nx        

# Create workspace
npx create-nx-workspace@latest circular-ventures --preser=empty
```

Install Visual Studio recommended plugin for Nx Nx Console: https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console 

## Create apps inside workspace

**Create Nest API**:
```sh
# Create an app inside the workspace
# 1. Install the plugin
npm install --save-dev @nrwl/nest
# 2. Install the app
nx generate @nrwl/nest:app backend-project1
```

**Create Express API**:
```sh
# Create an app inside the workspace
# 1. Install the plugin
npm install --save-dev @nrwl/express
# 2. Install the app
nx generate @nrwl/express:app backend-project2
```


**Run**:

Nx run app executing `nx serve [app-name]:

```sh
nx serve backend-project1
```

**Test**:

Nx test app executing `nx test [app-name]:

```sh
nx test backend-project1
```

**Lint**:

Nx lint app executing `nx lint [app-name]:

```sh
nx lint backend-project1
```

**build all the project**

```sh
nx run-many --target=build --all
```

## Use plugins

```sh
# See available plugins
nx list
# Install plugin
npm install --save-dev @nrwl/nest
# Check plugin commands
nx list @nrwl/nest
# Run plugin
nx generate @nrwl/nest:app backend-project1
```

## Generate node libraries

```sh
# Generate
nx generate @nrwl/node:lib number-utils --publishable --importPath=@circular-ventures/number-utils

# Build 
nx build number-utils

# publish (TODO: publish private repos)
npm publish
```

**See dependency graph** when libraries are updated run `nx affected:dep-graph`.

## Build, lint and test just affected changes.

**Run command in affected dependencies** with `nx affected --target=[build|lint|test]`. Can even run against branch or head `--base=origin/master --head=HEAD~5`. This feature brings fast build|lint|test no matter how big the project gets.

Check this example with [Jenkins](https://github.com/nrwl/nx-jenkins-build) how using affected reduce the build from 45 min to 8 min.

## Build cache
Build implements local cache for `build|lint|test|e2e`.

## Nx Cloud
Enable distributed computation caching. Other developers would have enabled fast builds after a colleage push new changes delivered by Nx Cloud caching.