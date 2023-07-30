import React from 'react';
import { MenuItemContainer } from './MenuStyles';

const MenuItem = ({ name, price, imgSrc }) => {
  return (
    <MenuItemContainer>
      <div>
        <img src={imgSrc} alt={name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
