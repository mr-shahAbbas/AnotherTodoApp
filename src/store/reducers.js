import constants from "../constants";

export const growTodo = (state, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [...state, action.payload];
    case constants.REMOVE_TODO:
      return state.filter((message, index) => action.payload !== index);
    default:
      return state;
  }
}
//TO complete the 
export const completeTodo = (state, action) => {

} 
