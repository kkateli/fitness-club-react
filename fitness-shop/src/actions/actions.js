import axios from "axios";
export const authStart = () => {
  return {
    type: "AUTH-START"
  };
};

export const authSuccess = (token, userId, userType, userEmail) => {
  return {
    type: "AUTH_SUCCESS",
    token: token,
    userId: userId,
    userType: userType,
    userEmail: userEmail
  };
};

export const authFail = error => {
  return {
    type: "AUTH_FAIL",
    error: error
  };
};

export const members = memberList => {
  return {
    type: "MEMBER_LIST",
    payload: memberList
  };
};

export const memberFail = error => {
  return {
    type: "MEMBER_FAIL",
    error: error
  };
};

export const viewMembers = () => {
  return dispatch => {
    axios
      .get("https://fitness-members.firebaseio.com/.json")
      .then(response => {
        dispatch(members(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        dispatch(memberFail(error));
      });
  };
};

export const admins = adminList => {
  return {
    type: "ADMIN_LIST",
    payload: adminList
  };
};

export const adminFail = error => {
  return {
    type: "ADMIN_FAIL",
    error: error
  };
};

export const viewAdmins = () => {
  return dispatch => {
    axios
    .get("https://fitness-admin.firebaseio.com/.json")
    .then(response => {
      dispatch(admins(response.data));
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
      dispatch(adminFail(error));
    });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("userType");
  return {
    type: "AUTH_LOGOUT"
  };
};

export const authCheck = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      //localstorage only returns string
      const expirationTime = new Date(localStorage.getItem("expirationTime"));
      if (expirationTime < new Date()) {
        dispatch(logout());
      } else {
        const userType = localStorage.getItem("userType");
        const userId = localStorage.getItem("userId");
        const userEmail = localStorage.getItem("email");
        dispatch(authSuccess(token, userId, userType, userEmail));
      }
    }
  };
};

export const signup = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const member = {
      email: "member/" + email,
      signupTime: new Date()
    };
    axios
      .post("https://fitness-members.firebaseio.com/.json", member)
      .catch(err => {
        console.log(err);
      });

    const authData = {
      email: "member/" + email,
      password: password,
      returnSesureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6rdzOOzlZBeUU4kSwqxuKIFXc2nvKr9Q";
    axios
      .post(url, authData)
      .then(response => {
        console.log(response.data);
        alert("Your account has been created. Thank you!");
        document.location.href = "/signin";
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };
};

export const manaSignup = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: "admin/" + email,
      password: password,
      returnSesureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6rdzOOzlZBeUU4kSwqxuKIFXc2nvKr9Q";
    axios
      .post(url, authData)
      .then(response => {
        console.log(response.data);
        alert("Your admin account has been created. Thank you!");
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };
};

export const signin = (email, password, userType) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: userType.toLowerCase() + "/" + email,
      password: password,
      returnSesureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6rdzOOzlZBeUU4kSwqxuKIFXc2nvKr9Q";
    axios
      .post(url, authData)
      .then(response => {
        console.log(response.data);
        //Local storage to hold auth info after reloading
        //to store in an obj
        const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationTime", expirationTime);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("userType", userType);
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.localId,
            userType,
            response.data.email
          )
        );
        // if(userType==="Member"){
        //   document.location.href = "/home";
        // }
        // if(userType==="Admin"){
        //   document.location.href = "/Management";
        // }
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
