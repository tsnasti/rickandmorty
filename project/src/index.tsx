import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { fetchCharactersAction } from "./store/api-actions";

store.dispatch(
  fetchCharactersAction({
    page: 1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  })
);

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
