import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';

function CreateUser() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!user || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newUser = { name: user, email };

    try {
      await createUser(newUser); 
      
      alert('Usuário criado com sucesso!');
      navigate('/'); // Redireciona para a lista de usuários após a criação
    } catch (error) {
      alert('Falha ao criar usuário.');
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <section>
      <h2>Criar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Usuário:</label>
          <input
            id="user"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Nome do usuário"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exemplo.com"
          />
        </div>
        <button type="submit">Criar Usuário</button>
      </form>
    </section>
  );
}

export default CreateUser;