import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { Link, Route } from "react-router-dom";

import ExternalResourcePage from "./ExternalResourcePage";
import getExternalResources from "../../Apollo/Queries/getExternalResources";
import AddResourceForm from "./AddResourceForm";

export default class ExternalResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addResourceFormOpen: false
    };
  }
  toggleAddResourceForm = () => {
    this.setState(prevState => ({
      addResourceFormOpen: !prevState.addResourceFormOpen
    }));
  };

  render() {
    return (
      <div>
        <h1>External Resources</h1>
        <p>
          Search here to find courses to start learning for your new career or
          to improve your skills at your current job. Vote for any recources you
          think have value and post any courses you have found to help others
          know what could help them get to that next stage of their careers.
        </p>
        {/* TODO: hide add button for unauthenticated users */}
        <button onClick={this.toggleAddResourceForm}>
          {this.state.addResourceFormOpen ? "x" : "+"}
        </button>
        {this.state.addResourceFormOpen && (
          <AddResourceForm closeForm={this.toggleAddResourceForm} />
        )}
        <Query query={getExternalResources}>
          {/* TODO: add error handling */}
          {({ data, loading }) => {
            return (
              <div>
                {loading && "Loading..."}
                <ul>
                  {data && data.externalResources
                    ? data.externalResources.map(resource => (
                        <li key={resource.id}>
                          {/* TODO: replace with a smarter way to add/validate the http prefix */}
                          <Link to={`${this.props.match.url}/${resource.id}`}>
                            {resource.title}
                          </Link>
                        </li>
                      ))
                    : "No results"}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
