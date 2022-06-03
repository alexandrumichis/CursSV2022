import React, { useRef } from "react";
// @ts-ignore
import classes from "./Feedback.module.css";
import Card from "./Card";

const FeedbackInput = props => {
  const feedbackInputRef = useRef(null);

  const submitHandler = e => {
    props.feedbackHandler(feedbackInputRef.current.value);
    feedbackInputRef.current.value = '';
    feedbackInputRef.current.focus();
  };

  return (
    <Card className={classes.input}>
      <label htmlFor="feedback">Feedback: </label>
      <input
        id="feedback"
        type="text"
        ref={feedbackInputRef}
      />
      <button
        className={classes.button}
        type="button"
        onClick={submitHandler}
      >Add feedback
      </button >
    </Card>
  );
};

export default FeedbackInput;