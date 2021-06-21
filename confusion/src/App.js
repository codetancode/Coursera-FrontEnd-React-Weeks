import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent.js';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configure';


//initiate store with the help of config/ get store}
const store = ConfigureStore();
//{Wrap our main APP with the help of provider with store to always render new state from store */}

class App extends Component{

  render() {
    return (
      <Provider store={ store }>
          <BrowserRouter>
            <div>
              <Main />
            </div>
         </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
