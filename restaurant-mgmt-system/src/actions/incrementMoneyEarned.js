import { INCREMENT_MONEY_EARNED } from '../constants/constants.js';

const incrementMoneyEarned = ammount => {
	return {
		type: INCREMENT_MONEY_EARNED,
		ammount: ammount,
	}
}

/*
The incrementMoneyEarned action creator will create an INCREMENT_MONEY_EARNED 
action that contains the amount to add to the total amount of money earned
*/

export default incrementMoneyEarned;