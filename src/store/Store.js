import { createStore } from "redux";

import rootReducer from "../reducer/TodoReducer";

const store=createStore(rootReducer);

export default store