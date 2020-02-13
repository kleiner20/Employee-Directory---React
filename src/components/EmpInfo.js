import React from "react";
import EmpList from "../data/employees.json";

function EmpInfo(props) {
  console.log(props)

  const results = EmpList.filter(emp => emp.FirstName.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Directory by Name</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b> {result.FirstName} {result.lastName} </b>- {result.JobTitle} Hired {result.hired}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmpInfo;
