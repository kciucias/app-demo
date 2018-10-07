import React, { Component } from 'react';
import Header from './components/Header';
import StudentsList from './components/StudentsList';
import StudentForm from './components/StudentForm';
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

  addStudent(body) {
    fetch('http://localhost:3000/students', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      alert('Dodano studenta!');
    });
  }

  submitHandler(form) {
    const name = form.querySelector('input[name="name"]').value;
    const surname = form.querySelector('input[name="surname"]').value;

    this.addStudent(JSON.stringify({
      name,
      surname,
      grades: []
    }));
  }

  deleteStudentHandler(id) {
    fetch(`http://localhost:3000/students/${id}`, {
      method: 'DELETE'
    }).then(res => {
      alert('Usunięto studenta!');
    });
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
              <div className="column is-half is-offset-one-quarter">
                <StudentForm submitHandler={this.submitHandler.bind(this)} />
              </div>
            </div>
            <div className="column">
              <StudentsList list={this.state.list} deleteStudentHandler={this.deleteStudentHandler.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
