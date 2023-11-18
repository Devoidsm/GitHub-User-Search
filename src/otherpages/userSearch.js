//imports 
import React from 'react';
import { UI, SearchgitUser, Header } from '../components/allcomp.js';

//function used to display the main search page
const Main = () => {
  return (
    <main>
      <Header></Header>
      <SearchgitUser></SearchgitUser>
      <UI></UI>
    </main>
  );
};

export default Main;