import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" >
                <Main/>
              </div>
          </Content>
      </Layout>
    </div>
    );
  }
}

export default App;
