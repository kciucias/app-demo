import React from 'react';

const StudentsList = ({ list, deleteStudentHandler }) => (
  <table className="table is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Average</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {list.map(student => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.surname}</td>
          <td></td>
          <td>
            <a class="button is-warning is-small">Edit</a>
            <a 
              class="button is-danger is-small" 
              onClick={() => deleteStudentHandler(student.id)}
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StudentsList;
