import React from 'react';
import { useParams } from 'react-router-dom';

function AlterarUser() {
  const { email } = useParams();

  return (
    <div>
      <h2>Alterar Usuário</h2>
      <p>Editando usuário com o email: {email}</p>
      {/* Form for editing user can go here */}
    </div>
  );
}

export default AlterarUser;
