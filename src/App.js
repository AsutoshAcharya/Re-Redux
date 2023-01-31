
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
