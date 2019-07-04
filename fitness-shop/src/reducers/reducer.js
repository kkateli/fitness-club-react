import { combineReducers } from "redux";
const initialState = {
  token: null,
  userId: null,
  userType: null,
  userEmail: null,
  error: null,
  loading: false
};

const initialMemberList = {
  memberList: null,
  error: null,
  loading: false
};

const initialAdminList = {
  adminList: null,
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
        userType: action.userType,
        userEmail: action.userEmail,
        error: null,
        loading: false
      }
    };
  } else if (action.type === "AUTH_FAIL") {
    return {
      ...state,
      ...{ error: action.error, loading: false }
    };
  } else if (action.type === "AUTH_LOGOUT") {
    return {
      ...state,
      ...{
        token: null,
        userId: null,
        userType: null,
        userEmail: null,
        loading: false
      }
    };
  }
  return state; //NOTE 
};

const memberManagement = (state = initialMemberList, action) => {
  if (action.type === "MEMBER_LIST") {
    return {
      ...state,
      ...{ memberList: action.payload, error: null }
    };
  } else if (action.type === "MEMBER_FAIL") {
    return {
      ...state,
      ...{ error: action.error, memberList:null }
    };
  }else if (action.type==="MEMBER_LOGOUT"){
    return {
      ...state,
      ...{memberList: null,
        error: null,
        loading: false}
    }
  }
  return state;
};

const adminManagement = (state = initialAdminList, action) => {
  if (action.type === "ADMIN_LIST") {
    return {
      ...state,
      ...{ adminList: action.payload, error: null }
    };
  } else if (action.type === "ADMIN_FAIL") {
    return {
      ...state,
      ...{ error: action.error, adminList:null }
    };
  }else if (action.type==="ADMIN_LOGOUT"){
    return {
      ...state,
      ...{adminList: null,
        error: null,
        loading: false}
    }
  }
  return state;
};

export default combineReducers({
  auth: authReducer,
  member: memberManagement,
  admin:adminManagement
});
