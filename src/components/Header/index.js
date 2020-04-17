import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

import Link from '../Link';

import {
  Container,
  BrandsContainer,
  ResponsiveContainer,
  ResponsiveButton,
  Content,
  DownloadContainer,
  Navigation,
} from './styles';

const HeaderComponent = () => {
  const [navbarOpen, setnavbarOpened] = useState(false);

  const handleNavigationButton = () => setnavbarOpened(!navbarOpen);

  return (
    <Container>
      <BrandsContainer>
        <Link href="/">
          <img src="/static/images/sweet_logo.png" alt="SweetCode Logo" />
        </Link>

        <ResponsiveContainer>
          <ResponsiveButton open={navbarOpen} onClick={handleNavigationButton}>
            <span /> <span /> <span />
          </ResponsiveButton>
        </ResponsiveContainer>
      </BrandsContainer>

      <Content open={navbarOpen}>
        <Navigation>
          <ul>
            <li>
              <Link href="/world">Mundo</Link>
            </li>
            <li>
              <Link href="/brazil">Brasil</Link>
            </li>
            <li>
              <Link href="/aboutus">Sobre Nós</Link>
            </li>
          </ul>
        </Navigation>

        <DownloadContainer>
          <Link href="/construction">
            Download App
            <FiDownload size={20} />
          </Link>
        </DownloadContainer>
      </Content>
    </Container>
  );
};

export default HeaderComponent;
