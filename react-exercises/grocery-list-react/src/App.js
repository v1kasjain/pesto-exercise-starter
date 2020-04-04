import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>
            Grocery List
          </h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type='text' name={'name'}/>
              <button>Add Item To List</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
