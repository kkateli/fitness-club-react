import { combineReducers } from "redux";
const initialState = {
  token: null,
  userId: null,
  userType:null,
  userEmail:null,
  error: null,
  loading: false
};
const authReducer = (state = initialState, action) => {
  if (action.type === "AUTH_START") {
    return {
      ...state,
      ...{ error: null, loading: true }
    };
  } else if (action.type === "AUTH_SUCCESS") {
    return {
      ...state,
      ...{
        token: action.token,
        userId: action.userId,
        userType:action.userType,
        userEmail:action.userEmail,
        error: null,
        loading: false
      }
    };
  } else if (action.type === "AUTH_FAIL") {
    return {
      ...state,
      ...{ error: action.error, loading: false }
    };
  }
  else if(action.type ==="AUTH_LOGOUT"){
    return {
      ...state,
      ...{token:null,userId:null,userType:null,userEmail: null,loading:false}
    }
  }
  return state;
};

export default combineReducers({
  auth: authReducer
});