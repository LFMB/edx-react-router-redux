import { combineReducers } from "redux";

import selectedTable from "./selectedTable.js";
import tableStatusData from "./tableStatusData.js";
import tableData from "./tableData.js";
import moneyEarned from "./moneyEarned.js";


const reducer = combineReducers({
  selectedTable,
  tableStatusData,
  tableData,
  moneyEarned
});

/*

All 4 reducers are combined together by using the combineReducers() method from the redux library

*/

export default reducer;