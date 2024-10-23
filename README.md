![Aragon](/static/img/osx_blue_logo_lqrvkr.png)

<p align="center">
  <a href="https://aragon.org/">Aragon website</a>
  •
  <a href="https://devs.aragon.org/">Developer Portal</a>
  •
  <a href="https://aragondevelopers.substack.com/">Join our Developer Community</a>
  •
  <a href="https://aragonproject.typeform.com/dx-contribution">Contribute</a>
</p>

<br/>

# Aragon OSx Developer Portal

Aragon's Developer Portal holds all documentation developers need to kickstart their journey building with the Aragon OSx stack. You can find it in production [here](https://devs.aragon.org).

This website is built using [Docusaurus 3](https://docusaurus.io/), a static website generator for technical documentations.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Notice: you may need to run `yarn optimize-svg` before `yarn build` or `yarn start` to correctly build this website.

### Serve All Optimized Assets

```bash
$ yarn serve:all-optimized
```

This command runs all the necessary commands to serve the website from scratch. It installs all the needed libraries, and then builds and serves the website, locally, with all optimized assets.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
