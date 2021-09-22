import "./App.css";
import Bugs from "./components/Bugs";
import store from "./store/store";
import { Provider } from "react-redux";
import BugList from "./components/BugList";

function App() {
  return (
    <Provider store={store}>
      <BugList />
    </Provider>
  );
}

export default App;
