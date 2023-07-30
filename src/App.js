// App.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, MenuContainer } from './components/MenuStyles';
import Menu from './components/Menu';
import Authentication from './components/Authentication';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/firebase-analytics";
import MenuEditor from './components/MenuEditor';



// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIUnEWbkNZ87bcBTTNd0jeOkM1Cvw14eI",
  authDomain: "cardapio-digit-all.firebaseapp.com",
  projectId: "cardapio-digit-all",
  storageBucket: "cardapio-digit-all.appspot.com",
  messagingSenderId: "919240152267",
  appId: "1:919240152267:web:5830ee605d515a36b0774e",
  measurementId: "G-CMT8L1VQCJ"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser(firebase.auth().currentUser);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Restaurante XYZ</h1>
      {user ? (
        <div>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
          <MenuEditor />
        </div>
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;