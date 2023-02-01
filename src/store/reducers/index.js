import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import productsReducer from "./productsReducer";
import suppliersReducer from "./suppliersReducer";

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  clients: clientsReducer,
  products: productsReducer,
  suppliers: suppliersReducer,
});
