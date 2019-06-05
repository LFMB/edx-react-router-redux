import { SELECT_TABLE } from "../constants/constants.js";

const selectedTable = (state = null, action) => {
	switch (action.type){
		case SELECT_TABLE:
			if (state === action.id) return null;
			else return action.id;
		default:
			return state;
	}
};

/*
The selectedTable reducer is in charge of handling the state changes to the selectedTable
attribute of the overall state. The selectedTable state should just be a single integer
that represents the id of the selected table. The state is initialized to null. The reducer
only handles the SELECT_TABLE action. In the SELECT_TABLE action logic, if the dispatched action
contains an id that is already selected, we return null to the deselect the table.
Otherwise, we return the action id to select the table.

*/
export default selectedTable;