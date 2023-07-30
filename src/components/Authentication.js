// Authentication.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Authentication.css'


const Authentication = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      onLogin();
    } catch (error) {
      console.error(error);
      // Tratar erros de login, se necessário
    }
  };

  return (
    <div className='logar-title'>
      <h2>Área restrita do dono do restaurante</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
