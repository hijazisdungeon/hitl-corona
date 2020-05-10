import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 0;
  padding: 0 80px;

  align-items: center;
  justify-content: space-between;

  a {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.headerText};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    background: transparent;
    color: ${props => props.theme.headerText};
  }
`;

export const BrandsContainer = styled.div`
  z-index: 3;
  margin-right: 30px;

  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    display: flex;
    width: 100%;
    height: 60px;
    margin-right: 0;
    padding: 0 20px;

    align-items: center;
    justify-content: space-between;
    transition: background-color 200ms;
    background-color: transparent;

    ${props =>
      props.open &&
      css`
        position: fixed;
        background-color: ${props.theme.headerColor};
      `}

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 85px;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    position: fixed;
    height: calc(100vh - 60px);

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    z-index: ${props => (props.settings_open ? 4 : 2)};
    background-color: ${props => props.theme.headerColor};
    transition: top 300ms;

    top: ${props => (props.open ? '60px' : '-100%')};
  }
`;

export const Navigation = styled.nav`
  margin: 0 15px;
  height: 100%;

  ul,
  li,
  a {
    display: flex;
    height: 100%;
  }

  li {
    & + li {
      margin-left: 30px;
    }

    & > a {
      position: relative;

      align-items: center;
      justify-content: center;
      transition: opacity 200ms;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 0;

    &,
    ul,
    li,
    a {
      width: 100%;
      height: auto;
    }

    ul {
      flex-direction: column;

      li {
        margin: 0;

        a {
          padding: 20px 0;
        }
      }
    }
  }
`;

export const SectionContainer = styled.div`
  margin-left: 30px;

  & > button {
    display: flex;
    padding: 12px 20px;

    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.SettingsHeader};

    svg {
      margin-left: 8px;
    }
  }

  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 40px;
  }
`;

export const Section = styled.section`
  position: fixed;
  display: ${props => (props.open ? 'flex' : 'none')};
  z-index: 10;
  width: 50%;
  height: 70%;
  top: 50%;
  left: 50%;
  padding: 60px 40px;

  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.3);
  transition: opacity width height 200ms;
  border-radius: 2%;

  background-color: ${props => props.theme.backgroundSettings};
  color: ${props => props.theme.settingsText};

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: color 200ms;
    color: ${props => props.theme.settingsClose};

    &:hover {
      color: #ff0000;
    }
  }

  h3 {
    font-size: 3rem;
  }

  div.switchs {
    width: 100%;
    margin-top: 40px;

    div.container {
      display: flex;

      align-items: center;
      justify-content: center;

      & + div.container {
        margin-top: 30px;
      }

      strong {
        margin-right: 10px;
        padding: 10px;
        font-size: 1.8rem;
        border-right: 1px solid ${props => props.theme.borderDivisor};
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const ResponsiveContainer = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const ResponsiveButton = styled.button`
  span {
    position: relative;
    display: block;
    height: 3px;
    width: 24px;

    border-radius: 24px;
    transition: transform 200ms ease-out;
    background-color: ${props => props.theme.headerColorResponsive};

    & + span {
      margin-top: 6px;
    }

    ${props =>
      props.open &&
      css`
        margin: 0 !important;

        &:nth-child(1) {
          transform: rotate(45deg);
          top: 3px;
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      `}
  }
`;
