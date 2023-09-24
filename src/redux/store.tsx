import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { studentApi } from '../Pages/Students/student-api';
import { visitApi } from '../Pages/Visit/visit-api';
import { CommitteeApi } from '../Pages/comittes/Committee-api';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

const reducers = combineReducers({
  [studentApi.reducerPath]: studentApi.reducer,
  [visitApi.reducerPath]: visitApi.reducer,
  [CommitteeApi.reducerPath]: CommitteeApi.reducer,
});
const middleWares = [
  studentApi.middleware,
  visitApi.middleware,
  CommitteeApi.middleware,
];
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
// setupListeners(store.dispatch);
