import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Mock data similar to the original script
  const initialUsers = [
    { name: "Usuário de Teste", email: "teste@exemplo.com" },
  ];

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.email !== userToDelete.email));
    }
    closeModal();
  };

  const closeModal = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  return (
    <>
      <section className="raffle-section">
        <p>Sorteie usuários da tabela abaixo.</p>
        <button className="raffle-button">Sorteie um Usuário</button>
      </section>

      <section className="create-user-section">
        <p className="text-green">Ou adicione um novo:</p>
        <nav>
          <Link to="/create-user">
            <button className="create-user-button">Adicionar Novos Usuários</button>
          </Link>
        </nav>
      </section>

      <section>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="action-cell">
                  <button className="action-button delete" onClick={() => handleDeleteClick(user)}>Deletar</button>
                  <Link to={`/alterar-user/${user.email}`}>
                    <button className="action-button edit">Alterar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {showDeleteModal && (
        <div id="deleteConfirmModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-confirm" onClick={closeModal}>&times;</span>
            <p>Deseja deletar o usuário {userToDelete?.name}?</p>
            <button id="confirmDeleteBtn" className="action-button delete" onClick={confirmDelete}>Ok</button>
            <button id="cancelDeleteBtn" className="action-button" onClick={closeModal}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserTable;