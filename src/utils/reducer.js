const reducer = (state, action) => {
  if (action.type === "DISPLAY_TRACK") {
    return {
      ...state,
      track_list: action.payload,
      loading: false,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.payload === "SEARCH_TRACKS") {
    return {
      ...state,
      track_list: action.payload,
      heading: "Search Results",
    };
  }

  throw new Error("No matching action type");
};

export default reducer;
