import React from 'react';
import { MdBrightness3, MdBrightness7 } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '~/store/reducers/config/actions';

import { Container } from './styles';

const FloatingButtonComponent = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.config);

  const changeTheme = () => dispatch(setTheme(theme));

  const Icon = theme === 'light' ? MdBrightness3 : MdBrightness7;

  return (
    <Container onClick={changeTheme}>
      <Icon size={50} color="#b9d6f2" />
    </Container>
  );
};

export default FloatingButtonComponent;
