import React, { useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

import Link from '../Link';
import Switch from '../Switch';
import {
  Container,
  BrandsContainer,
  ResponsiveContainer,
  ResponsiveButton,
  Content,
  SectionContainer,
  Section,
  Navigation,
} from './styles';

import useTheme from '~/hooks/useTheme';

const HeaderComponent = () => {
  const { theme, changeTheme } = useTheme();
  const [navbarOpen, setnavbarOpened] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <Container>
      <BrandsContainer open={navbarOpen}>
        <Link href="/">
          <img src="/icon.png" alt="Covid Agora Logo" />
        </Link>

        <ResponsiveContainer>
          <ResponsiveButton
            open={navbarOpen}
            onClick={() => setnavbarOpened(!navbarOpen)}
          >
            <span /> <span /> <span />
          </ResponsiveButton>
        </ResponsiveContainer>
      </BrandsContainer>

      <Content open={navbarOpen} settings_open={settingsOpen}>
        <Navigation>
          <ul>
            <li>
              <Link href="/world">Mundo</Link>
            </li>
            <li>
              <Link href="/countries/[country]" as="/countries/brazil">
                Brasil
              </Link>
            </li>
            <li>
              <Link href="/news">Notícias</Link>
            </li>
            <li>
              <Link href="/covid-about">O que é Coronavirus ?</Link>
            </li>
          </ul>
        </Navigation>

        <SectionContainer>
          <button type="button" onClick={() => setSettingsOpen(!settingsOpen)}>
            Configurações
            <FiSettings size={20} />
          </button>

          <Section open={settingsOpen}>
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
            >
              <FiX size={30} />
            </button>

            <h3>CONFIGURAÇÕES</h3>

            <div className="switchs">
              <div className="container">
                <strong>Habilitar Modo Zen</strong>

                <Switch
                  isChecked={theme.name === 'dark'}
                  onClick={changeTheme}
                />
              </div>
            </div>
          </Section>
        </SectionContainer>
      </Content>
    </Container>
  );
};

export default React.memo(HeaderComponent);
