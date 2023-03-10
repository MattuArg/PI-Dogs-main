import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from 'react-redux';

import { MainPage } from './views/MainPage/MainPage';
import { Home } from './views/Home/Home';
import { DogDetails } from './views/DogDetails/DogDetails';
import { CreateDog } from './views/CreateDog/CreateDog';
import store from "./redux/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={MainPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/dog/:id" component={DogDetails}/>
          <Route path="/createDog" component={CreateDog}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
