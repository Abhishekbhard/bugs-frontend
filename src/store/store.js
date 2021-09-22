import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "../middleware/logger";
import api from "../middleware/api";
import func from "../middleware/func";
import toast from "../middleware/toast";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger("console"),
    func,
    toast,
    api,
  ],
});

export default store;
