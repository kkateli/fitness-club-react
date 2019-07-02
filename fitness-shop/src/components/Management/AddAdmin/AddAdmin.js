import React, { Component } from "react";
import "./AddAdmin.css";
import Input from "../../Input/Input";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import axios from "axios";

class AddAdmin extends Component {
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
          placeholder: "Password (No less than 6 characters)"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      job: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Job Title"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      sponsor: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "The person who adds this new admin"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
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
    this.props.manaSignupAction(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
    const admin = {
      email: "admin/" + this.state.controls.email.value,
      name:this.state.controls.name.value,
      Job:this.state.controls.job.value,
      sponsor:this.state.controls.sponsor.value,
      signupTime: new Date()
    };
    axios
      .post("https://fitness-admin.firebaseio.com/.json", admin)
      .catch(err => {
        console.log(err);
      });
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

  render() {
      console.log(this.state.controls);
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
      <div className="addAdmin-form">
        <h1>Add A New Admin</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            {form}
            <div style={{marginTop:"30px"}} className="btn-f">
              <button className="button">
                Submit
                <div className="mask" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 const mapDispatchToProps=(dispatch)=>{
    return {
        manaSignupAction: (email, password) => dispatch(actions.manaSignup(email, password))
      };
}


export default connect(null, mapDispatchToProps)(AddAdmin);
