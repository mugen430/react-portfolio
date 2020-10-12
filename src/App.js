import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Maverick Acampado" scroll>
          <Navigation>
            <Link to="/landing">Home</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/projects">Portfolio</Link>
            <Link to="/about">About Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Maverick Acampado">
          <Navigation>
            <Link to="/landing">Home</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/projects">Portfolio</Link>
            <Link to="/about">About Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
