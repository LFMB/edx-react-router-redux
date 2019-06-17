import {
	ADD_TABLE_ITEM,
	DELETE_TABLE_ITEM,
	TOGGLE_TABLE
}	from "../constants/constants.js";

var initialTableData = [];

for (let i = 0; i < 16; i++) {
	initialTableData.push([]);
}

const tableData = (state = initialTableData, action) => {
	switch (action.type){
		case ADD_TABLE_ITEM:
			var stateCopy = [];
			for (let i = 0; i < 16; i++){
				stateCopy.push(state[i].slice());
			}
			stateCopy[action.tableId].push(action.item);
			return stateCopy;
		case DELETE_TABLE_ITEM:
			var stateCopy = [];
			for (let i = 0; i < 16; i++){
				stateCopy.push(state[i].slice());
			}
			stateCopy[action.tableId].splice(action.id, 1);
			return stateCopy;
		case TOGGLE_TABLE:
			var stateCopy = [];
			for (let i = 0; i < 16; i++) {
				stateCopy.push(state[i].slice());
			}
			stateCopy[action.id] = [];
			return stateCopy;
		default:
			return state;
	}	
};

/*

The tableData reducer is in charge of handling the state changes to the tableData
attribute of the overall state. The tableData state should be a 2D array that
contains 16 arrays that each contain the ordered items for the table that they 
represent. The state initialized to be an array of 16 empty arrays.

The reducer handles the ADD_TABLE_ITEM, DELETE_TABLE_ITEM and TOGGLE_TABLE actions:

ADD_TABLE_ITEM - the reducer makes a copy of the 2D array, finds the array representing the
the tableID from the dispatched action, and deletes the dispatched action index from it.

DELETE_TABLE_ITEM - The reducer makes a copy of the 2D array, finds the array representing 
the tableId from the dispatched action and deletes the dispatched action index from it.

TOGGLE_TABLE - The reducer makes a copy of the 2D array, finds the array representing the
tableId from the dispatched action, and empties the array. (Both checking in and out result empty arrays)


*/

export default tableData;