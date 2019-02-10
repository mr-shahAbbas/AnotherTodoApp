import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1 className="blue lighten-3 center-align">Todo App</h1>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
