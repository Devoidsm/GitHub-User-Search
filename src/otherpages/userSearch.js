//imports 
import React from 'react';
import { UI, SearchgitUser, Header } from '../components/allcomp.js';
import { GitInformation } from '../gitHubInfo/gitHubInfo.js';
//function used to display the main search page
const Main = () => {
  const { Loading } = React.useContext(GitInformation);
  if (Loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loding' />
      </main>
    );
  }
  return (
    <main>
      <Header></Header>
      <SearchgitUser></SearchgitUser>
      <UI></UI>
    </main>
  );
};

export default Main;
