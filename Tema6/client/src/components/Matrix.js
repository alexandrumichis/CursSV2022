import React from "react";
import Card from "./Card";
// @ts-ignore
import classes from "./Matrix.module.css";

const Matrix = props => (
  <Card className={classes.matrix}>
    <table className={classes.table}>
      <tbody>
        {
          props.matrix.map((rows, rowIndex) =>
          (<tr key={`Row ${rowIndex}`}>{
            rows.map((value, colIndex) =>
            (<td
              id={`${rowIndex}${colIndex}`}
              key={`Column ${colIndex}`}
              onClick={props.selectedHandler}
            ><div>{value}</div></td>))
          }</tr>))
        }
      </tbody>
    </table>
  </Card>
);

export default Matrix;