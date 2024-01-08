![Aragon](https://res.cloudinary.com/dacofvu8m/image/upload/v1677353961/Aragon%20CodeArena/osx_blue_logo_lqrvkr.png)

<p align="center">
  <a href="https://aragon.org/">Aragon website</a>
  •
  <a href="https://devs.aragon.org/">Developer Portal</a>
  •
  <a href="https://aragonproject.typeform.com/to/LngekEhU">Join our Developer Community</a>
  •
  <a href="https://aragonproject.typeform.com/dx-contribution">Contribute</a>
</p>

<br/>

# Aragon OSx Developer Portal

Aragon's Developer Portal holds all documentation developers need to kickstart their journey building with the Aragon OSx stack. You can find it in production [here](https://devs.aragon.org). 

This website is built using [Docusaurus 2](https://docusaurus.io/), a static website generator for technical documentations.

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

### How to Contribute
We value your contributions and encourage you to help us improve the Aragon OSx Developer Portal. Whether you're fixing bugs, improving documentation, or suggesting new features, your input is welcome!

For detailed instructions on how to contribute, please refer to our [Contributing Guide](./CONTRIBUTION_GUIDE.md).

### Support
If you need help or have any questions, please join our Developer Community on [discord](https://discord.gg/aragon-672466989217873929).