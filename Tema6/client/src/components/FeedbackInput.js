import React, { useRef, useState } from "react";
// @ts-ignore
import classes from "./Feedback.module.css";
import Card from "./Card";

const FeedbackInput = props => {
  const feedbackInputRef = useRef(null);
  const [input, setInput] = useState(null);

  const inputHandler = e => {
    feedbackInputRef.current.value
      ? setInput(feedbackInputRef.current.value)
      : setInput(null);
  };

  const submitHandler = e => {
    props.feedbackHandler(input);
  };

  return (
    <Card className={classes.input}>
      <label htmlFor="feedback">Feedback: </label>
      <input
        id="feedback"
        type="text"
        ref={feedbackInputRef}
        onChange={inputHandler}
      />
      <button
        className={classes.button}
        type="button"
        onClick={submitHandler}
        disabled={(input && props.selected) ? false : true}
        style={{
          backgroundColor: !(input && props.selected) && "#6e6e6e",
          cursor: !(input && props.selected) && "not-allowed"
        }}
      >Add feedback
      </button >
    </Card>
  );
};

export default FeedbackInput;