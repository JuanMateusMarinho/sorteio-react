import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <h1>..::SORTEIOS::..</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Admin Client &copy; 2025</p>
      </footer>
    </>
  );
}

export default Layout;