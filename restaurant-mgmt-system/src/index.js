import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/reducer.js";
import addTableItem from "./actions/addTableItem.js";
import deleteTableItem from "./actions/deleteTableItem.js";
import incrementMoneyEarned from "./actions/incrementMoneyEarned.js";
import selectTable from "./actions/selectTable.js";
import toggleTable from "./actions/toggleTable.js";

// need to create styles.css and import it

var store = createStore(reducer);

const getSelectedTable = () => {
	var state = store.getState();
	return state.selectedTable;
};

const getAvailableTables = () => {
	var state = store.getState();
	var tablesAvailable = 0;

	for(let i = 0; i < state.tableStatusData.length; i++) {
		if(state.tableStatusData[i] === true) tableStatusData++;
	}
	return tablesAvailable;
};

const getTableStatusData = () => {
	var state = store.getState();
	return state.tableStatusData;
};

const getTableItems = () => {
	var state = store.getState();
	// need to finish this
	/*
		./src/index.js
  		Line 25:  'tableStatusData' is not defined  no-undef
	*/
}


function App() {
  return (
    <div className="App">
		<h1>Hello</h1>
	</div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);