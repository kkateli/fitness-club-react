import React, { Component } from "react";
import css from "./Signup.module.css";
import Input from "../Input/Input";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

class Signup extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    ifShow: false
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  noteHandler = () => {
    this.setState({ ifShow: !this.state.ifShow });
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.signupAction(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementsArray.map(formElement => (
      <div key={formElement.id}>
        <Input
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => this.inputChangedHandler(event, formElement.id)}
        />
      </div>
    ));

    return (
      <div className={css.Signup}>
        <h1 onClick={this.noteHandler}>
          Sign up
          <i
            style={{
              fontSize: "10px",
              border: "1px solid black",
              borderRadius: "50px",
              backgroundColor: "lightGray",
              color: "black"
            }}
            class="icofont-question"
          />
        </h1>
        {this.state.ifShow ? (
          <div className={css.talkBubble}>
            <p>
              Member signup only. If you are an administrator, please log in as
              an admin to manage staff
            </p>
          </div>
        ) : null}

        <form onSubmit={this.submitHandler}>
          {form}
          <p>Password should not be less than 6 characters</p>
          <div className="btn-f">
            <button className="button">
              Submit
              <div className="mask" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signupAction: (email, password) => dispatch(actions.signup(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
