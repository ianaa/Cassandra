import React, { Component } from "react";
import { Query } from "react-apollo";

import getExternalResource from "../../Apollo/Queries/getExternalResource";

function withHTTP(link) {
  if (!link || typeof link !== "string") {
    return "#";
  }
  if (link.startsWith("http")) {
    return link;
  }
  return `https://${link}`;
}

export default class ExternalResourcePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query
        query={getExternalResource}
        variables={{ id: this.props.match.params.id }}
      >
        {({ data, loading }) => {
          console.log(data);
          return (
            <div>
              {loading && "Loading..."}
              {data && data.externalResource && (
                <div>
                  {/* render logo */}
                  <h3>{data.externalResource.title}</h3>
                  <h5>{data.externalResource.description}</h5>
                  <p>
                    Link:{" "}
                    <a href={withHTTP(data.externalResource.linkURL)}>
                      {withHTTP(data.externalResource.linkURL)}
                    </a>
                  </p>

                  <div>
                    Categories: {data.externalResource.categories.length}
                    <ul>
                      {data.externalResource.categories.map(category => (
                        <li>{category}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    Votes:{" "}
                    <p>
                      up{" "}
                      {
                        data.externalResource.votes.filter(
                          v => v.positive === true
                        ).length
                      }
                    </p>
                    <p>
                      down{" "}
                      {
                        data.externalResource.votes.filter(
                          v => v.positive === false
                        ).length
                      }
                    </p>
                  </div>

                  <div>
                    Comments: {data.externalResource.comments.length}
                    <ul>
                      {data.externalResource.comments.map(comment => (
                        <li>
                          <p>
                            {comment.user}: {comment.comment}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    Reviews: {data.externalResource.reviews.length}
                    <ul>
                      {data.externalResource.reviews.map(review => (
                        <li>
                          <p>
                            {review.user}: {review.rating}
                          </p>
                          <p>{review.review}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* TODO: for authorized users: vote up/down, comment, review??? */}
                </div>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
