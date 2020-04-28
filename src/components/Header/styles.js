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
  background-color: ${props => props.theme.backgroundHeader};

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
  margin-right: 30px;

  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 60px;
    margin-right: 0;
    padding: 0 20px;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.headerColor};

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);

    background-color: ${props => props.theme.headerColor};
    flex-direction: column;
    justify-content: center;
    transition: left 300ms;

    left: ${props => (props.open ? '0' : '-100%')};
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
      margin-left: 12px;
    }

    a {
      position: relative;
      padding: 0 10px;

      align-items: center;
      justify-content: center;

      &:before {
        content: '';
        position: absolute;
        width: 0%;
        height: 3px;
        bottom: 0;
        background-color: #b9d6f2;
        transition: width 400ms;
      }
    }
  }

  @media (min-width: 1025px) {
    li a {
      &:hover:before {
        width: 100%;
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
export const DownloadContainer = styled.div`
  margin-left: 30px;

  a {
    display: flex;
    padding: 12px 20px;

    align-items: center;
    justify-content: center;

    border: 1px solid ${props => props.theme.headerResponsiveBorder};

    svg {
      margin-left: 8px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 40px;
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
    background-color: ${props => props.theme.headerResponsiveButton};
    transition: transform 200ms ease-out;

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

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    color: ${props => props.theme.headerText};
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-left: 12px;
  }
  button:hover {
    display: block;
  }
  span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    margin: 5px;

    justify-content: center;
    align-items: center;

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
          padding: 20px 0px;
        }
      }
    }
  }
`;

export const DropdownItems = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);

  background-color: ${props => props.theme.background};
  margin-top: -30px;

  top: 100%;
  left: 22%;

  padding: 20px 0;

  a {
    padding: 20px 10px !important;
    color: ${props => props.theme.headerMoreText};
  }

  @media (max-width: 1024px) {
    margin: 0;
    align-items: center;

    &,
    ul,
    li,
    a {
      width: 55%;
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
