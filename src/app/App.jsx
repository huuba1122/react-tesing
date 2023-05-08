import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import MainLayout from "@components/layouts/main";
import Todo from "@features/todo";
import Post from "@features/posts";

import { store } from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <MainLayout>
        {/* <Todo /> */}
        <Post />
      </MainLayout>
    </ReduxProvider>
  );
}

export default App;
