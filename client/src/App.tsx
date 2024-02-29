import Home from "./pages/Home";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
