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
