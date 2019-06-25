import { TOGGLE_TABLE } from "../constants/constants.js";

const toggleTable = id => {
  return {
    type: TOGGLE_TABLE,
    id: id
  };
};

/*
The toggleTable action creator will create a TOGGLE_TABLE action 
that contains the id of the table to check in and out
*/

export default toggleTable;