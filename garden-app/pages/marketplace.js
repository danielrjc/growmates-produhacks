import React, { useState } from 'react';
import withAuth from '../components/withAuth';
import Header from '../components/header';
import Footer from '../components/footer'; 
import SeedsPage from '../components/seedsPage';

const Marketplace = () => {
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState('buying'); // 'buying' or 'selling'
  const [focused, setFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [reserveButtonText, setReserveButtonText] = useState("Reserve Plot");


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const styles = {
    searchContainer: {
      backgroundColor: focused
        ? 'rgba(180, 180, 180 , 0.75)'
        : 'rgba(209, 209, 209 , 0.75)',
      width: '800px',
      height: '30px',
      borderRadius: '10px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: isClicked ? 'flex-start' : 'space-between',
      transition: 'all 0.5s ease',
      marginLeft: '125px' 
    },
    searchInput: {
      width: '100%',
      padding: '5px',
      borderRadius: '5px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      marginLeft: focused || isClicked ? '5px' : '0',
      color: focused || isClicked ? 'white' : 'black',
      transition: 'all 0.5s ease',
    },
    searchIcon: {
      color: focused || isClicked ? 'white' : '#888',
      transition: 'all 0.5s ease',
    },
    copymarketplace:{
        width: '800px',
        marginLeft: '150px' ,
        marginBottom: '50px'


    }
  };

  return (
<div style={{ height: '100vh', overflow: 'hidden' }}>
      <Header source="marketplace" />
      <div style={{ paddingTop: '90px'}}>
        <div >
            <div style = {styles.copymarketplace}>
            <h1 style ={{marginBottom:'15px', fontSize:'60px'}}>Seeds Marketplace</h1>
            <span>Welcome to Sprouts Marketplace, the one-stop-shop for all your gardening needs! Our marketplace lets you </span>
            <span>trade your Sprouts currency for crops, seeds, and even list your homegrown produce for sale. Join our growing </span>
            <span >community of gardeners and start trading today! </span> 
            </div>
          <div style={styles.searchContainer} onClick={handleClick}>
            <i className="fas fa-search" style={styles.searchIcon} />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search products..."
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <SeedsPage search={search} mode={mode} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default withAuth(Marketplace);
