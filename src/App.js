import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Kras',
    age: 34,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        ...this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.age}</p>
              <p>Name: {context.name}</p>
              <button onClick={context.growAYearOlder}>+1</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <h1>Testing context</h1>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;