// MenuEditor.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const MenuEditor = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleAddItem = async () => {
    const menuRef = firebase.firestore().collection('menu');

    try {
      let imageUrl = null;
      if (image) {
        const storageRef = firebase.storage().ref(`images/${image.name}`);
        await storageRef.put(image);
        imageUrl = await storageRef.getDownloadURL();
      }

      await menuRef.add({
        name: name,
        price: price,
        imageUrl: imageUrl,
      });

      setName('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Editar Cardápio</h2>
      <input
        type="text"
        placeholder="Nome do item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço do item"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleAddItem}>Adicionar Item</button>
    </div>
  );
};

export default MenuEditor;
