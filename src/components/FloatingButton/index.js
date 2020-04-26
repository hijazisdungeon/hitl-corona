import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '~/store/reducers/ConfigReducer/actions';

import { Container, FloatingButton } from './styles';

const FloatingButtonComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const changeTheme = () => dispatch(setTheme({ themeName: theme.name }));

  return (
    <Container>
      <FloatingButton onClick={changeTheme}>
        <FiPlusCircle size={50} color="#b9d6f2" />
      </FloatingButton>
    </Container>
  );
};
export default FloatingButtonComponent;
