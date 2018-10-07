import React from 'react';

const StudentForm = props => (
    <form onSubmit={(event) => {
        event.preventDefault();
        props.submitHandler(event.target);
    }}>
        <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
                <input className="input" name="name" placeholder="Test" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>        
            </div>
        </div>
        <div className="field">
            <label className="label">Surname</label>
            <div className="control has-icons-left">
                <input className="input" type="text" name="surname" placeholder="Anonymous" />
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>        
            </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Add</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
    </form>
);

export default StudentForm;
