// reducers/exampleReducer.js
const initialState = {
    // Your initial state here
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EXAMPLE_ACTION':
        // Modify state based on the action
        return {
          ...state,
          // Update state
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  