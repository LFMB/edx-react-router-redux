import { INCREMENT_MONEY_EARNED } from '../constants/constants.js';

const incrementMoneyEarned = amount => {
  return {
    type: INCREMENT_MONEY_EARNED,
    amount: amount
  };
};

/*
The incrementMoneyEarned action creator will create an INCREMENT_MONEY_EARNED 
action that contains the amount to add to the total amount of money earned
*/

export default incrementMoneyEarned;