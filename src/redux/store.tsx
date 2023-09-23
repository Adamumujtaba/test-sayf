import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { studentApi } from '../Pages/Students/student-api';
import { visitApi } from '../Pages/Visit/visit-api';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

const reducers = combineReducers({
  [studentApi.reducerPath]: studentApi.reducer,
  [visitApi.reducerPath]: visitApi.reducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware, visitApi.middleware),
});
// setupListeners(store.dispatch);
