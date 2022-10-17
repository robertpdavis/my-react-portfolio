import React from 'react';
import Navigation from "./Navigation";
import '../App.css';

const styles = {
  header: {
    display: 'flex'
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <a className="title" href="/"><h1>Rob Davis Profile</h1></a>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
