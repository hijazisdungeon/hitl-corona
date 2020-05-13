import React from 'react';

import Link from '../Link';

import { Container, Content, Navigation, NavigationItem } from './styles';

const FooterComponent = () => (
  <Container>
    <div>
      <Navigation>
        <NavigationItem>
          <h3>Oque Procura ?</h3>

          <Link href="/world">Mundo</Link>
          <Link href="/countries">Países</Link>
          <Link href="/states">Estados</Link>
          <Link href="/#">Notícias</Link>
        </NavigationItem>

        <NavigationItem>
          <h3>Sobre</h3>

          <Link href="/aboutus">Sobre Nós</Link>
          <a
            href="https://github.com/sweetcodeio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </NavigationItem>

        <NavigationItem>
          <h3>Recursos</h3>

          <Link href="/construction">Download APP</Link>
          <a
            href=" https://discord.gg/fruaT8R"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajuda e Suporte
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAo9RsE7I1NATVNluVjrdHn4lcw5G-E77ZXArFzvmSWw23bA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback
          </a>
        </NavigationItem>

        <NavigationItem>
          <h3>Site</h3>

          <Link href="/privacy-policy">Política de Privacidade</Link>
        </NavigationItem>
      </Navigation>

      <hr />

      <Content>
        <strong>© 2020 SweetCode</strong>

        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=64TE2A4STHKBY&source=url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doe pra Gente
        </a>
      </Content>
    </div>
  </Container>
);

export default FooterComponent;
