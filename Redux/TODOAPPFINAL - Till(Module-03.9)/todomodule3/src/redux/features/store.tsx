import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../features/slice/todoSlice";
export const store = configureStore({
  reducer: {
    todos: todoreducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
