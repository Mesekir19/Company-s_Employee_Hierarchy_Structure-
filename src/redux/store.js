import { createStore, combineReducers } from "redux";
import employeeReducer from "./reducers/employeeReducer";
import positionReducer from "./reducers/positionReducer";
import employeeTableReducer from "./reducers/employeeTableReducer";
import modalReducer from "./reducers/modalReducer";
import empOrPosi from "./reducers/empOrPosi";
import newPositionModal from "./reducers/newPositionModal";
const rootReducer = combineReducers({
  employee: employeeReducer,
  position: positionReducer,
  employeeTable: employeeTableReducer,
  addModal: modalReducer,
  addNewEmpOrPosi: empOrPosi,
  positionModal: newPositionModal,
});

const store = createStore(rootReducer);

export default store;
