import { combineReducers } from "redux";
import users from "./users";
import contact from "./contact";
import profile from "./profile";
import project from "./project";
import countWord from "./countWord";

// jangan lupa masukin ke store.js
export default combineReducers({ users, contact, profile, project, countWord });
