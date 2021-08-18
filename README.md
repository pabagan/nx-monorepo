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
nx generate @nrwl/nest:app backend-buyback
```

**Create Express API**:
```sh
# Create an app inside the workspace
# 1. Install the plugin
npm install --save-dev @nrwl/express
# 2. Install the app
nx generate @nrwl/express:app backend-varva
```


**Run**:

Nx run app executing `nx serve [app-name]:

```sh
nx serve backend-buyback
```

**Test**:

Nx test app executing `nx test [app-name]:

```sh
nx test backend-buyback
```

**Lint**:

Nx lint app executing `nx lint [app-name]:

```sh
nx lint backend-buyback
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
nx generate @nrwl/nest:app backend-buyback
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

**Run command in affected dependencies** with `nx affected --target=[build|lint|test]`. Can even run against branch or head `--base=origin/master --head=HEAD~5`. This feature brings fast build|lint|test no matter how big the project gets.

## Build cache
Build implements local cache for `build|lint|test|e2e`.

## Nx Cloud
Enable distributed computation caching. Other developers would have enabled fast builds after a colleage push new changes delivered by Nx Cloud caching.