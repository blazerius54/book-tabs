import {
  CHANGE_BOOK_STATUS,
  CHANGE_BOOK_FILTER,
  RESET_BOOK_FILTER,
} from './consts';
import bookData from '../../data/books';

export const initialState = {
  books: {
    toread: [...bookData.items],
    inprogress: [],
    done: [],
  },
  filterTags: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOOK_STATUS:
      return {
        ...state,
        books: {
          ...state.books,
          [action.currentStatus]: [
            ...state.books[action.currentStatus].filter(
              book => book.id !== action.id,
            ),
          ],
          [action.newStatus]: [
            ...state.books[action.newStatus],
            ...state.books[action.currentStatus].filter(
              book => book.id === action.id,
            ),
          ],
        },
      };
    case CHANGE_BOOK_FILTER:
      if (state.filterTags.includes(action.newFilter)) {
        return state;
      }
      return {
        ...state,
        filterTags: [...state.filterTags, action.newFilter],
      };
    case RESET_BOOK_FILTER:
      return {
        ...state,
        filterTags: [],
      };
    default:
      return state;
  }
}

export default appReducer;
