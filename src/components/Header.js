import React from 'react';
import '../App.css';
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Rob Davis Profile</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
