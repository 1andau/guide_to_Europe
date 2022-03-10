import React from 'react';
// import { BrowserRouter as Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';




ReactDOM.render(
//{/* тут мы гооворим что есть путь Route если у него путь будет полный, то компонент app должен отображаться и мы говорим ему что у нас рендерится все приложение и получается что если по пути / перешел пользователь, он перейдет на страницу app а если нет -- то не будет отображаться. Иными словами exact path это строгий путь, и если в ссылке есть / то страница будет отображаться */}
 
// <Routes>
// <Provider store={store}>
//      <App />
//      </Provider>
// </Routes>,

<Provider store={store}>
<Router>
  <App />
</Router>
</Provider>,



  document.getElementById('root')
);

