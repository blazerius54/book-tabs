import { CHANGE_BOOK_STATUS } from './consts';
import bookData from '../../data/books';

export const initialState = {
  books: {
    toread: [...bookData.items],
    inprogress: [],
    done: [],
  },
  filter: 'toread',
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOOK_STATUS:
      return {
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
    default:
      return state;
  }
}

export default appReducer;
