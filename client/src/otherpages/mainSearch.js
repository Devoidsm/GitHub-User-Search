//imports 
import React from 'react';
import { UiUser, UiCommits, SearchgitUser, Header, SearchgitCommits } from '../components/allcomp.js';
import loadingGif from '../images/loading.gif';
import { GitInfo } from '../gitHubInfo/gitHubInfo.js';
//function used to display the main search page
const Main = () => {
  const { loading } = React.useContext(GitInfo);
  if (loading) {
    return (
      <main>
        <Header />
        <SearchgitUser />
        <img src={loadingGif} className='loading-img' alt='loading' />
      </main>
    );
  }
  return (
    <main>
      <Header></Header>
      <SearchgitUser></SearchgitUser>
      <UiUser></UiUser>
      <SearchgitCommits></SearchgitCommits>
      <UiCommits></UiCommits>
    </main>
  );
};

export default Main;