import axios from "axios";
export const authStart = () => {
  return {
    type: "AUTH-START"
  };
};

export const authSuccess = (token, userId, userType,userEmail) => {
  return {
    type: "AUTH_SUCCESS",
    token: token,
    userId: userId,
    userType:userType,
    userEmail: userEmail
  };
};

export const authFail = error => {
  return {
    type: "AUTH_FAIL",
    payload: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
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
      email: email,
      signupTime: new Date(),
      userType:"Member"
    };

    axios
      .post("https://fitness-members.firebaseio.com/.json", member)
      .catch(err => {
        console.log(err);
      });
    const authData = {
      email: email,
      password: password,
      returnSesureToken: true,
      
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

export const signin = (email, password,userType) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSesureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6rdzOOzlZBeUU4kSwqxuKIFXc2nvKr9Q";
    axios
      .post(url, authData)
      .then(response => {
        console.log(response.data);
        console.log(userType);
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
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
