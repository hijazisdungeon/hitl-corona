import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

import Link from '../Link';

import {
  Container,
  BrandsContainer,
  ResponsiveContainer,
  ResponsiveButton,
  Content,
  DownloadContainer,
  Navigation,
  Dropdown,
  DropdownItems,
} from './styles';

const HeaderComponent = () => {
  const [navbarOpen, setnavbarOpened] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigationButton = () => setnavbarOpened(!navbarOpen);

  const handleClick = () => setDropdownOpen(!dropdownOpen);

  const OptionsContainer = () => {
    return (
      <Dropdown>
        <button type="button" onClick={handleClick}>
          <span>
            Mais <IoIosArrowDown size={15} />
          </span>
        </button>
        <DropdownItems open={dropdownOpen}>
          <a href="/aboutus">Sobre Nós</a>
          <a href="/#">Configurar</a>
        </DropdownItems>
      </Dropdown>
    );
  };

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
              <OptionsContainer
                handleClick={handleClick}
                dropdownOpen={dropdownOpen}
              />
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
