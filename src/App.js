import React, { Component } from 'react';
import Header from './components/Header';
import StudentsList from './components/StudentsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getStudentsList() {
    fetch('http://localhost:3000/students')
      .then(res => res.json())
      .then(list => this.setState({ list }));
  }

  componentDidMount() {
    this.getStudentsList();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="columns">
            <div className="column">
              First column
            </div>
            <div className="column">
              <StudentsList list={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
