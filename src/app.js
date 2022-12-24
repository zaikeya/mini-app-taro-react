import { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configStore from "./redux/store/store";
import "./app.scss";

const { store, persistor } = configStore;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {() => this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
