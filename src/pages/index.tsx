import React, {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ComponentCard} from '../components/ComponentCard';
import styled from 'styled-components';
import {
  WelcomeCard,
  HeroHeader,
  IllustrationSdk,
  IllustrationCore,
  IllustrationDesignSystem,
} from '../components';
import {IconInfo} from '@aragon/ui-components';

type ComponentCard = {
  title: string;
  descritpion: string;
  img: ReactNode;
  to: string;
};

const componentCards: ComponentCard[] = [
  {
    title: 'Core Contracts',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    img: <IllustrationCore />,
    to: '/docs/core',
  },
  {
    title: 'Aragon SDK',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    img: <IllustrationSdk />,
    to: '/docs/sdk',
  },
  {
    title: 'Design System',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    img: <IllustrationDesignSystem />,
    to: '/docs/design-system',
  },
];

type Welcomecard = {
  title: string;
  descritpion: string;
  icon: ReactNode;
  linkLabel: string;
  href: string;
};
const StyledInfoIcon = styled(IconInfo).attrs({
  className: 'text-primary-500',
})``;
const welcomeCards: Welcomecard[] = [
  {
    title: 'Quickstart',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    icon: <StyledInfoIcon />,
    linkLabel: 'Get started',
    href: '/docs/quickstart',
  },
  {
    title: 'Guide',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    icon: <StyledInfoIcon />,
    linkLabel: 'View Reference Guide',
    href: '/docs/guide',
  },
  {
    title: 'Core Contracts',
    descritpion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu suscipit elit, ac varius sapien. Aenean pharetra massa sodales, hendrerit mauris sed, varius mi. Etiam sodales fermentum ligula sit amet tincidunt. Ut lorem diam, sodales in lacus in, elementum finibus risus. Donec venenatis, lorem nec hendrerit dictum, nulla lectus varius urna, id consectetur libero urna id dui. Curabitur dignissim enim ut orci volutpat, ac pretium magna faucibus. Praesent id ullamcorper eros, eu porta velit. Vestibulum id fringilla nunc. Cras venenatis magna eu rhoncus ullamcorper. Quisque quam tortor, finibus vel dignissim ac, ornare a nulla.Donec sodales, velit in posuere semper, risus arcu imperdiet lacus, vitae facilisis urna risus a nisl. Maecenas auctor ligula nec odio varius pulvinar. Mauris luctus tortor vel ornare semper. Nunc laoreet orci vel accumsan tempus. Maecenas laoreet nulla et nisl placerat, ut mollis lectus maximus. Duis vitae auctor nulla, sed tincidunt arcu. Aliquam leo ex, placerat varius purus in, porta imperdiet nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique, nisi id dignissim venenatis, sapien turpis ornare turpis, nec venenatis dui nibh a ligula. Morbi sagittis volutpat porta. Maecenas at dignissim urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate nunc neque, non tincidunt enim faucibus nec. Quisque eget fermentum lorem, vitae pulvinar magna. Nulla ultrices malesuada mauris ut consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam maximus sollicitudin nunc, vitae eleifend erat semper vitae. Mauris sapien metus, euismod eget mi a, venenatis egestas libero. Praesent vitae purus feugiat, vestibulum ligula vehicula, suscipit sapien. Nulla faucibus enim nisl, sit amet blandit lectus pretium sed. Fusce eget tempus lorem, vel condimentum mauris. Suspendisse euismod lorem ac vehicula sodales. Donec pellentesque pellentesque dictum. Nam et purus vitae sapien commodo viverra. In ultrices, elit non malesuada porta, leo ipsum congue purus, non dignissim odio mi eget purus. Integer cursus justo sit amet nisi commodo ultrices.Vestibulum vel bibendum quam, sed porta ante. Donec egestas, ipsum vel hendrerit dignissim, magna urna posuere metus, at pulvinar lorem elit eget nibh. Mauris luctus pharetra nisl, id maximus ligula venenatis id. Vivamus lorem enim, dignissim quis mi eu, tristique dapibus erat. In vehicula dapibus ultrices. Nam at posuere urna. Quisque scelerisque dui eget est hendrerit, non malesuada felis condimentum. Integer dictum lorem risus, ac convallis lorem volutpat aliquam. Sed porta, turpis eget rhoncus eleifend, lectus nisi tincidunt arcu, a efficitur est turpis non elit. Quisque eu mi ligula. Vestibulum sem enim, interdum id faucibus et, maximus ut orci.Mauris venenatis urna purus, at viverra est finibus a. Nunc aliquam nisi urna, id gravida orci dictum ac. Ut semper ante at diam tincidunt elementum ut at massa. Suspendisse pretium odio rutrum ligula pretium, eget scelerisque ante faucibus. Sed tincidunt ullamcorper purus, vel finibus tortor egestas in. Maecenas egestas lacus bibendum metus venenatis, vitae mollis erat luctus. Vestibulum a ex tortor. Phasellus maximus orci lorem, in tristique diam vulputate quis. Sed maximus ante nisi, vitae efficitur augue iaculis at. Morbi facilisis fermentum orci convallis scelerisque. Aliquam lacus est, maximus faucibus erat eget, iaculis aliquet velit. In ac tellus eros. Duis eu ullamcorper massa, molestie viverra ante. Nunc quis tristique ante. Ut lacinia nunc vitae suscipit pharetra.',
    icon: <StyledInfoIcon />,
    linkLabel: 'Core Contracts',
    href: '/docs/core',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Welcome to the Docs"
          subtitle="Here you'll finds guides, resources and references to build with aragon"
          img={require('@site/static/img/welcome-image.png').default}
        />
        <WelcomeCardsWrapper>
          {welcomeCards.map((card, index) => (
            <WelcomeCard
              key={index}
              title={card.title}
              description={card.descritpion}
              icon={card.icon}
              href={card.href}
              linkLabel={card.linkLabel}
            />
          ))}
        </WelcomeCardsWrapper>
        <ComponentCardsWrapper>
          <ComponentCardsTitle>Explore Components</ComponentCardsTitle>
          {componentCards.map((card, index) => (
            <ComponentCard
              key={index}
              title={card.title}
              description={card.descritpion}
              img={card.img}
              to={card.to}
            />
          ))}
        </ComponentCardsWrapper>
      </Container>
    </Layout>
  );
}

const Container = styled.div.attrs({
  className: 'md:p-18 p-6 flex-col flex space-y-12',
})``;
const ComponentCardsWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-6',
})``;
const WelcomeCardsWrapper = styled.div.attrs({
  className: 'flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4',
})``;
const ComponentCardsTitle = styled.p.attrs({
  className: 'text-ui-900 font-medium text-xl',
})``;
