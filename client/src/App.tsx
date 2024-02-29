import Home from "./pages/Home";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://task-manager-bzxg.vercel.app";

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
