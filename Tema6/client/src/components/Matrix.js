import React, { useState } from "react";
import Card from "./Card";
// @ts-ignore
import classes from "./Matrix.module.css";

const Matrix = props => {
  const [activeNote, setActiveNote] = useState(null);

  const selectedHandler = e => {
    if (e.target.id === activeNote) {
      props.selectedHandler('');
      setActiveNote('');
    } else {
      props.selectedHandler(e.target.id);
      setActiveNote(e.target.id);
    }
  };
  return (
    <Card className={classes.matrix}>
      <table className={classes.table}>
        <tbody>
          {
            props.matrix.map((rows, rowIndex) =>
            (<tr key={`Row ${rowIndex}`}>{
              rows.map((value, colIndex) =>
              (<td
                key={`Column ${colIndex}`}
                style={{
                  backgroundColor: activeNote === `${rowIndex}${colIndex}`
                    ? "#FFFFFF"
                    : props.colorPalette[rowIndex][colIndex]
                }}
              ><div id={`${rowIndex}${colIndex}`} onClick={selectedHandler}
              >{value}</div>
              </td>))
            }</tr>))
          }
        </tbody>
      </table>
    </Card>
  );
};

export default Matrix;