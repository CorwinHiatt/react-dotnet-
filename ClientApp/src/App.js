import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Alert } from 'reactstrap';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        
        <h1>Its corwin</h1>
        <button 
>PUSH ME</button>
        
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
