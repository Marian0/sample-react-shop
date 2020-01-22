import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, subtitle, size, imageUrl, linkUrl, match, history }) => (
  <MenuItemContainer
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    size={size}
  >
    <BackgroundImageContainer
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl}})`
      }}
    />
    <ContentContainer>
      <ContentTitle>{title}</ContentTitle>
      <ContentSubtitle>{size}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);