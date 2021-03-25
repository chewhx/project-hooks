import React from "react";
import { Alert, Card } from "react-bootstrap";

const Reponse = ({ results, message }) => {
  return (
    <>
      <Alert
        variant={results && results.status === 404 ? "danger" : "success"}
        dismissible
      >
        <Alert.Heading>Status Code: {results && results.status}</Alert.Heading>
        {message}
      </Alert>
      {results &&
        results.data &&
        results.data.length > 0 &&
        results.data.map((each, idx) => (
          <Card key={`card-${idx}`}>
            <Card.Header>Title: {each.title}</Card.Header>
            <Card.Body>
              <p>
                ID: {each.id} USERID: {each.userId}
              </p>
              Body: {each.body}
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Reponse;
