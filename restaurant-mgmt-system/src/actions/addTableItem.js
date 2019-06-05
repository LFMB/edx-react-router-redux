import { ADD_TABLE_ITEM } from "../constants/constants.js";

const addTableItem = (name, price, id) => {
	return {
		type: ADD_TABLE_ITEM,
		tableId: id,
		item: {
			name: name,
			price: price,
		}
	}
};

/*
The addTable action creator will create an ADD_TABLE_ITEM action that contains a tableId
to indicate which table to add to and an item object with: name and price attributes 
	
*/

export default addTableItem;