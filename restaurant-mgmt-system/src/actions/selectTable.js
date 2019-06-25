import { SELECT_TABLE } from "../constants/constants.js";

const selectTable = id => {
  return {
    type: SELECT_TABLE,
    id: id
  };
};

/*
The selectTable action creator will create a SELECT_TABLE action that contains
the id of the table to select
*/

export default selectTable;