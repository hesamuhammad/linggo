import { combineReducers } from "redux";
import profile from "./profile";
import project from "./project";

// jangan lupa masukin ke store.js
export default combineReducers({ profile, project });