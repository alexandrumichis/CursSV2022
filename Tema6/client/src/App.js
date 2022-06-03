import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import FeedbackInput from "./components/FeedbackInput";
import Matrix from "./components/Matrix";

function App() {

  const [connectedSocket, setConnectedSocket] = useState(null);
  const [matrix, setMatrix] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [selected, setSelected] = useState(null);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  useEffect(() => {
    const socket = io();
    setConnectedSocket(socket);
    socket.on("data", matrix => setMatrix(matrix));
  }, []);


  const feedbackHandler = value => {
    if (!value) {
      console.log("No feedback was introduced!");
    } else if (!selected) {
      console.log("No note was selected!");
    } else {
      setSubmittedFeedback(true);
      connectedSocket.emit("feedback", { value, selected });
    }
  };

  return (
    <React.Fragment>
      {!submittedFeedback ?
        <FeedbackInput feedbackHandler={feedbackHandler} /> :
        <h1
          style={{ textAlign: "center" }}
          onClick={() => setSubmittedFeedback(false)}
        >Thank you for your feedback!</h1>}
      <Matrix matrix={matrix} selectedHandler={e => setSelected(e.target.id)} />
    </React.Fragment>
  );
}

export default App;
