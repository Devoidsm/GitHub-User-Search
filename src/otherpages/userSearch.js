//imports 
import React from 'react';
import { UI, SearchgitUser, Header } from '../components/allcomp.js';
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
import loadingGif from '../images/loading.gif';
//function used to display the main search page
const Main = () => {
  const { Loading } = React.useContext(GitInfo);
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
