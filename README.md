![Aragon](/static/img/osx_blue_logo_lqrvkr.png)

<p align="center">
  <a href="https://aragon.org/">Aragon website</a>
  •
  <a href="https://devs.aragon.org/">Developer Portal</a>
  •
  <a href="https://aragondevelopers.substack.com/">Join our Developer Community</a>
</p>

<br/>

# Aragon OSx Developer Portal.

Aragon's Developer Portal holds all documentation developers need to kickstart their journey building with the Aragon OSx stack. You can find it in production [here](https://devs.aragon.org).

This website is built using [Antora](https://antora.org/), a static multi-repo website generator for technical documentations.

### Installation

```
yarn
cd ui && yarn && yarn build
```

### Local Build and Development

```
$ yarn build:local
```

For this command to work, you need to create `playbook-local-only.yml`. For reference, you can use `playbook-master.yml` or `playbook-staging.yml` to fill in the information. 

### Adding a new repo to the docs

Edit the [playbook-master.yml](playbook-master.yml) (or [playbook-staging.yml](playbook-staging.yml)) file by adding the new repository under "sources", with the branch or branches that should be deployed, and the path where the `antora.yml` file is. To show it in the sidebar, add the name from the repo's antora.yml in navigation.hbs, and add an svg icon inside the icons folder matching the name.
