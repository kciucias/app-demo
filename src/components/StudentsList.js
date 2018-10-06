import React from 'react';

const StudentsList = ({ list }) => (
  <table className="table is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Average</th>
      </tr>
    </thead>
    <tbody>
      {list.map(student => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.surname}</td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StudentsList;
