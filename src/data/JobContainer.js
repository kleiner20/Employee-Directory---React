import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import JobSearchForm from "./JobSearchForm";
import EmpInfo from "./EmpInfo";
import EmpList from "../data/employees.json";

class JobContainer extends Component {
  state = {
    result: [],
    search: "Web Developer",
    searchtype: 'job'
  };

  // When this component mounts, search for the employee
  componentDidMount() {
    this.searchJobs();
  }

  searchJobs = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = EmpList.filter((emp) => emp.JobTitle === searchQuery);
    this.setState({ 'result': searchResults, 'searchtype':'job' });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the employees.json for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchJobs();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <JobSearchForm
              searchtype="JobTitle"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-3" />
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmpInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default JobContainer;
