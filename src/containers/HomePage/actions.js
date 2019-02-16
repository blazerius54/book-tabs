import { CHANGE_BOOK_STATUS } from './consts';

export const changeBookStatus = (id, newStatus, currentStatus) => ({
  type: CHANGE_BOOK_STATUS,
  id,
  newStatus,
  currentStatus,
});
