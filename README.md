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

**Create**:
```sh
# Create an app inside the workspace
# 1. Install the plugin
npm install --save-dev @nrwl/nest
# 2. Install the app
nx generate @nrwl/nest:app backend-buyback
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
