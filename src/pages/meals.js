import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import AppContext from '../context/Context';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Meals() {
  const { setHandleSearch, handleSearch } = useContext(AppContext);
  const history = useHistory();
  return (
    <div>
      <Header>
        <h4 data-testid="page-title">Meals</h4>
        <button
          type="button"
          onClick={ () => history.push('./profile') }
        >
          <img
            src={ profileIcon }
            alt="profile-icon"
            data-testid="profile-top-btn"
          />
        </button>
        <button
          type="button"
          onClick={ () => setHandleSearch(!handleSearch) }
        >
          <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
        </button>
      </Header>
      <Recipes url="https://www.themealdb.com/api/json/v1/1/search.php?s=" />
      <Footer />
    </div>
  );
}
