import { combineReducers } from "redux";
import users from "./users";
import contact from "./contact";
import profile from "./profile";
import project from "./project";

// jangan lupa masukin ke store.js
export default combineReducers({ users, contact, profile, project });
