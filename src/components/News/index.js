import React from 'react';

import { Container, NewsContainer, Item } from './styles';

const NewsComponent = () => (
  <Container>
    <NewsContainer>
      <Item>
        <span>
          OLÁ MUNDO
          <p>TESTE DE OLA MUNDO</p>
        </span>
      </Item>
      <Item>
        <span>
          OLÁ MUNDO
          <p>TESTE DE OLA MUNDO</p>
        </span>
      </Item>
    </NewsContainer>
  </Container>
);

export default NewsComponent;
