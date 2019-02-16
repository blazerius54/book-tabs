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
  return state;
}

export default appReducer;
