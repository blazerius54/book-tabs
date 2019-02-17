import {
  CHANGE_BOOK_STATUS,
  CHANGE_BOOK_FILTER,
  RESET_BOOK_FILTER,
} from './consts';

export const changeBookStatus = (id, newStatus, currentStatus) => ({
  type: CHANGE_BOOK_STATUS,
  id,
  newStatus,
  currentStatus,
});

export const changeBookFilter = newFilter => ({
  type: CHANGE_BOOK_FILTER,
  newFilter,
});

export const resetBookFilter = () => ({
  type: RESET_BOOK_FILTER,
});
