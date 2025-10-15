import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserTable from './components/UserTable';
import Layout from './components/Layout';
import CreateUser from './pages/CreateUser';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* A página inicial (index) será a tabela de usuários */}
        <Route index element={<UserTable />} />
        {/* A rota /create-user levará para a página de criação */}
        <Route path="create-user" element={<CreateUser />} />
      </Route>
    </Routes>
  )
}

export default App
