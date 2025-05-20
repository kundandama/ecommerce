export function loadCategories() {
  return function (dispatch) {
    fetch("https://run.mocky.io/v3/f1f7456b-b7e2-43fa-9746-7625084d5283")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dispatch({ type: "LOAD_CATEGORIES", payload: response });
        console.log(response);
      });
  };
}

function categoriesReducer(state = { categories: [] }, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
}

export default categoriesReducer;
