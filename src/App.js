import React from 'react';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom';

function App() {
        // щас мы вот че делаем, мы пишем   React.useEffect что есть анонимная функция которая будет выполнятся когда нас нужно, и потом скажет что пустой массив для юсЭффект говорит что это компонент дидмоунт, и теперь означает чо приложение будет выполнять этот эффект только один раз при первом рендере 
  return (
    <div className="wrapper">
 <Header /> 
<div className="content">
<Route exact path="/" component={Home}></Route>
 <Route exact path="/cart" component={Cart}></Route>

      </div>
    </div>
  );
}

export default App;

