import React from "react";
import "./style.css";

function JobSearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Job Title Search </h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Title Search</label>
          <input
            onChange={props.handleEmpInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Jobs"
            id="search"
          />
          <br />
          <button onClick={props.empSearch} className="btn btn-primary">
            Search Jobs
        </button>
        </div>
      </form>
    </div>

  );
}
console.log("Job Search!")
export default JobSearchForm;
