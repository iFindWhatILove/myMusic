import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import 'antd/dist/antd.css'
import './assets/css/base.css'

import { EventEmitter } from 'events'

import App from './App';

export const eventBus = new EventEmitter()  //创建事件总线


ReactDOM.render(
   <HashRouter>
    <App />
   </HashRouter> ,
  document.getElementById('root')
);
