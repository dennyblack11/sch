import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import { store } from "./Global/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { ContextProvider } from "./Global/ReactContextApi/ContextProvider";

const App = () => {
  let persistor = persistStore(store);
  return (
    <div>
      <ContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={MainRouter} />
          </PersistGate>
        </Provider>
      </ContextProvider>
    </div>
  );
};

export default App;
