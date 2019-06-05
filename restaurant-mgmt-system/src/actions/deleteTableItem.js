import { DELETE_TABLE_ITEM } from '../constants/constants.js';

const deleteTableItem = (tableId, id) => {
	return {
		type: DELETE_TABLE_ITEM,
		tableId: tableId,
		id: id,
	}
}

/*
	the deleteTableItem action creator will create a DELETE_TABLE_ITEM 
	action that contains a tableId to indicate which table to delete from
	and an id to indicate which item to delete
*/

export default deleteTableItem;