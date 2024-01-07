import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PROGRESS,POST_PRODUCT_PROGRESS,DELETE_PRODUCT_PROGRESS,PATCH_PRODUCT_PROGRESS } from "./redux-saga/admin/action/action";
import Data from "./components/Data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type:GET_PRODUCT_PROGRESS,
      POST_PRODUCT_PROGRESS,
      DELETE_PRODUCT_PROGRESS,
      PATCH_PRODUCT_PROGRESS,});
  }, []);

  return (
    <div className="App">
      redux saga
      <Data />
    </div>
  );
}
export default App;