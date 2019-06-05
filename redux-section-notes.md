# Redux Course Notes

## 3 Principles of Redux

- Single source of truth
- State is read only
- Changes are made with pure functions
	(Redux doesn't check for changes in state thus wont update React components on state mutations)

## Actions

- Actions are categorized events that trigger changes to your state. Actions require a type attribute and also should contain payload data.
- Once actions are dispatched, the Reducer updates the state based on the specified action type and its corresponding payload.

- It is common practice to factor out the action type into a `const` variable. The `payload` attribute is used to attach any type of data (string, number, object, boolen, etc.) to the action. 
- It is recommended to miminalize the ammount of data transfering. 
- The payload attribute can have any name of format as long as its referenced in the Reducer.

### Action:

```
// const variable to hold action type
const ADD_ITEM = 'ADD_ITEM'

var action = {
	// action type
	type: ADD_ITEM,
	// payload
	item: 'React-Router-Redux Course'
}
```

### Action Creators

Action creators are functions that return actions. Their purpose is to remove the manual creation of an action object during an action dispatch.

Action Creator:

```
const addItem = (item) => {
	return {
		type: ADD_ITEM,
		item: item
	};
};

addItem('apple');
```

### Dispatching Actions

To dispatch an action, use Redux's `store.dispatch(action)` method

```
store.dispatch(addItem('Data Science Course'));
```

## Reducers

Reducers are functions that define how the state should change after an action is dispatched.

### Reducers must be pure functions

A reducer must be a pure function that takes in the previous state and dispatched action as inputs and returns the new state as an output.

```
const items = (state, action ) => {
	// return new state based on previous state and action
}
```

Reducer functions should never contain any of the following calls:
- API 
- Math.random()
- Date.Now()

These functions need to be no more than functional calculations that output the same returns with the same inputs.

Redux triggers changes to React components whenever ther is a new state object loaded into the store.

### State shape and intial state

- Need to understand the shape of the state tree before coding a reducer so one will know how to update the state.
- The state argument will be undefined the first time the reducer is called so there is a need to provide an intial default state

```
const items = (state = [], action ) => {
	// return new state based on previous state and action
}
```

### Handling Actions

Use a switch statement to handle different types of actions:

```
const items = (state = [], action ) => { // providing an empty array as a default value to the state argument in case it's undefined
	switch(action.type) {
		case 'ADD_ITEM':
			// return new state with added item
		case 'DELETE_ITEM':
			// return new state with deleted item
		default:
			return state
	}
}

```

#### Implementing ADD_ITEM

The ADD_ITEM action will look like the following:

ADD_ITEM:

```
{
	type: 'ADD_ITEM',
	item: 'React-Redux Intermediate'
}
```

To implement ADD_ITEM, generate a new array, load in the previous state's items using the spread operator then add in the new item from the action.

```
 case 'ADD_ITEM':
 	return [...state, action.item]
```

#### Implementing DELETE_ITEM

DELETE_ITEM:

```
{
	type: 'DELETE_ITEM',
	index: 0 // any index number
}
```

To implement DELETE_ITEM, generate a new array, load in previous state's items up to the removed index, then load in the previous state's items that come after the removed index.

```
case 'DELETE_ITEM':
	return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
```


#### Handling invalid actions

Invalid actions can be caught with the default case of the switch statement which sill just return the original state

```
default:
	return state
```

### Helpful method for pure functions

There are several JS methods that are helpful when writting pure functions.

- array.slice() used for returning a new array that contais a portion of an existing array
```
var array = ['a','b','c', 'd', 'e'];
var newArray = array.slice(0,2);
console.log(newArray)
// ['a', 'b']
```

- Object.assign used for creating a new object and merging over other objects into the new object
```
var oldState = {
	id: 123,
	value: 'abc'
}

var newState = Object.assign({}, oldObject, {value: 'new value'})

console.log(newState) // {id: 123, value: 'new value'}
```

- ...(spread operator) used for loading data from an existing object or array
```
var oldState = { id: 123, value: 'abc'}
var newData = {value: 'new value'}
var newState = {...OldObject, ...newData}

console.log(newState) // {id: 123, value: 'new value'}

var array = [0,1,2,3,4]
var newArray = [...array, 5,6]
console.log(newArray) // [0,1,2,3,4,5,6]
```

## Store

The Store is the object that holds all your application state - there is only one store.

### Creating a Store

You can create a store using the `createStore(reducer, [preloadedState], [enhancer])` method from the Redux library.

The createStore method takes the following arguments:

- reducer: reducer that describes how dispatched actions should update the state
- preloadedState: optional initial state
- enhancer: optional middleware

import createStore

`import {createStore} from 'redux'`

create a store by calling the createStore method with a reducer

```
const reducer = (state, action) => {
	// return updated state
}

const store = createStore(reducer)
```

### Getting state from a store

Access state from the store using the `store.getState()` method:

```
var state = store.getState()
console.log(state)
// {...}
```

### Dispatching actions to update the store

Your can dispatch actions using the `store.dispatch(action)` method:

`store.dispatch(addItem('apple')) // 'apple' is now added to the item array`

### Subscribing to store updates

the `store.subscribe()` method is used to trigger a function whenever the store updates 

```
// trigger a console log everytime the store updates
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// stop subscribing to store updates
unsubscribe()
```

## Designing the actions

Need to design actions before designing the reducers. For this project there are four distinct actions that a user can take:

- Add item to the cart
- Delete and item from the cart
- Set sort by filter
- Set coupon discount percentage

```

// ADD_ITEM
{
	type: 'ADD_ITEM',
	item: {
		name: string,
		price: double 
	}
}

// DELETE_ITEM
{
	type: 'DELETE_ITEM',
	index: integer // index value
}

// SET_FILTER
{
	type: 'SET_FILTER',
	filter: string // either none, alphabetical or price
}

// SET_DISCOUNT
{
	type: 'SET_DISCOUNT',
	discount: double // percentage amount
}

```


## Designing the state tree

Also need to design the state tree before reducers (That's right - design actions and state tree before going into reducers). The state tree should be a single object and in this example contains an array for the shopping cart items, its attributes that holds the values for the filter type and discount amount.

State tree:

```
{
	items: [],
	filter: value, // either none, alphabetical or price
	discount: value // percentage amount
}
```

NOTE: only track necessary data! KISS and DRY principles.

## Designing the reducers

Will be going through an interative approach to show why and how to split your reducer into smaller reducers

```
var initialState = {
	items: [],
	filter: 'none',
	discount: 0,
}

const giantReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_ITEM':
			return Object.assign({}, state,
				items:[...state.items, action.item]
			)
		case 'DELETE_ITEM':
			return Object.assign({}, state, 
				items: [...state.slice(0, action.index), ...state.slice(action.index + 1)]
			)
		case 'SET_FILTER':
			return Object.assign({}, state, 
				filter: action.filter
			)
		case 'SET_DISCOUNT':
			return Object.assign({}, state,
				discount: action.discount
			)
	}
}
```

The Object.assign() method generates the entire state tree each time and is uncessary for modifying one state attribute per action. This creates needless mental complexity in understanding the code. 

Notice the giantReducer function initates state with the predefined intialState object which has three attributes: items, filter, and discount. To break up the giantReducer reducer function in a coherent fashion each of these attributes should have their own reducer function. This means the 'ADD_ITEM' and 'DELETE_ITEM' actions can share a reducer while the 'SET_FILTER' and 'SET_DISCOUNT' will have their own for now.


```
// items reducer
const items = (state = [], action) => {
	switch(action.type){
		case 'ADD_ITEM': 
			return [...state.items, action.item]
		case 'DELETE_ITEM': 
			return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
		default:
			return state
	}
}

// filter reducer
const filter = (state = 'none', action) => {
	switch(action.type){
		case 'SET_FILTER':
			return action.filter
		default:
			return state
	}
}

const discount = (state = 0, action) => {
	switch(action.type){
		case 'SET_DISCOUNT':
			return action.discount
		default:
			return state
	}
}
```

Next is to cobmine these factored out reducers to the main one.

```
const giantReducer = (state, action) => {
	{
		items: items(state.items, action),
		filter: filter(state.filter, action),
		discount: discount(state.discount, action),
	}
}
```

Redux has a combineReducers method that does the above. 

```
const reducer = combineReducers({
	items,
	filter,
	discount,
})
```

To change the reducer name from the attribute

```
const reducer = combineReducers({
	a: items,
	b: filter,
	c: disocunt,
})
```

This is the result will be the same as:

```
const giantReducer = (state, action) => {
	{
		a: items(state.a, action),
		b: filter(state.b, action),
		c: discount(state.c, action),
	}
}
```

## Importing Reducers from a separate file

It is common practice to create all your reducers in a separate file and then import into your main file to be combined with combineReducers().

```
import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers'


const reducer = combineReducers(reducers)
var store = createStore(reducer)

```


## Redux Summary

Redux is a state management library that uses the concepts of actions, reducres and store to make it easier to access and modify your application state.

### Example Redux scenario

Here is an example of how actions, reducers and the store are connected:

1. Current state is stored an a `store`

```
console.log(store.getState())
// ['bread', 'cheese']
```

2. The user wants to add a new item to the store. The user uses an action creator to create an action with a type of `ADD_ITEM` and an intem attrinute of `apple` and dispatches it.

```
const addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		item: item,
	}
}

store.dispatch(addItem('apple'))

```

3. The reducer calculates how the store state should change according to the dispatched action. If there are multiple reducers, they are combined together to produce the final state tree.

```
const reducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_ITEM':
			return [...state, action.item]
		default:
			return state
	}
}
```

4. The store is updated and now contains the new information based on the action.

```
console.log(store.getState())
// ['bread', 'cheese', 'apple']
```
