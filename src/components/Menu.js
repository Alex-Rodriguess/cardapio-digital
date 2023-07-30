// Menu.js
import React from 'react';
import { MenuContainer } from './MenuStyles';
import MenuItem from './MenuItem';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const menuRef = firebase.firestore().collection('menu');

const Menu = () => {
  const [menuItems] = useCollectionData(menuRef, { idField: 'id' });

  return (
    <MenuContainer>
      <h2>Cardápio</h2>
      {menuItems &&
        menuItems.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} imgSrc={item.imageUrl} />
        ))}
    </MenuContainer>
  );
};

export default Menu;
