import React from "react";
import { Spinner } from "react-bootstrap";

const SpinLoader = () => {
  return (
    <div className="container spinner-div">
      <Spinner
        className="loading-spinner spinner-1"
        animation="grow"
        size="sm"
      />
      <Spinner
        className="loading-spinner spinner-2"
        animation="grow"
        size="sm"
      />
      <Spinner
        className="loading-spinner spinner-3"
        animation="grow"
        size="sm"
      />
    </div>
  );
};

export default SpinLoader;
