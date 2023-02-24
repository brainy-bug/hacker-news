import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: false };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter(({ objectID: id }) => id !== action.payload),
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
      };

    case HANDLE_PAGE:
      const prevPage = state.page;
      let nextPage;

      if (action.payload === "dec") {
        if (prevPage <= 0) nextPage = state.nbPages - 1;
        else {
          nextPage = state.page - 1;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "inc") {
        if (prevPage >= state.nbPages - 1) nextPage = 0;
        else {
          nextPage = state.page + 1;
        }
        return { ...state, page: nextPage };
      }

    default:
      throw new Error(`no matching "${action.type} action`);
  }
};
export default reducer;
