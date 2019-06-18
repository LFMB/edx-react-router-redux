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


function App() {
  return (
    <div className="App">
		<h1>Hello</h1>
	</div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);