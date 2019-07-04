import React, { Component } from "react";
import css from "./Signin.module.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { Form, Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
class Signin extends Component {
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
    userType: ""
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

  selectUserTypeHandler = event => {
    this.setState({ userType: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.state.userType === "Member" || this.state.userType === "Admin") {
      this.props.signinAction(
        this.state.controls.email.value,
        this.state.controls.password.value,
        this.state.userType
      );
    } else {
      alert("Please choose a user type");
    }
  };

  render() {
    //signin after auth needs to be allowed in PageBuilder page ANCHOR 
    let redirect = null;
    console.log(this.props.ifAuth);
    if (this.props.ifAuth) {
      if (this.props.userType === "Member") {
        redirect = <Redirect to="/" />;
      }
      if (this.props.userType === "Admin") {
        redirect = <Redirect to="/management" />;
      }
    }
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <div className={css.Signin}>
        {redirect}
        <h1>Sign in</h1>
        <form onSubmit={this.submitHandler}>
          {form}
          <div className={css.userTypeSelect}>
            <Container>
              <Row>
                <Col className={css.title}>User Type</Col>
                <Col xs={9}>
                  <Form.Control
                    as="select"
                    onChange={event => {
                      this.selectUserTypeHandler(event);
                    }}
                  >
                    <option>Choose...</option>
                    <option>Member</option>
                    <option>Admin</option>
                  </Form.Control>
                </Col>
              </Row>
            </Container>
          </div>
          <p>
            New member? Please{" "}
            <span className={css.signup}>
              <Link to={"/signup"}>
                <strong>sign up</strong>
              </Link>
            </span>
          </p>
          <div style={{ border: "1px black dotted", marginBottom: "10px" }}>
            <strong>
              <p>Quick Start</p>
            </strong>
            <div>
              <Container>
                <Row>
                  <Col>
                    <p>Sign in as a member</p>
                    <p>Email: test@test.com</p>
                    <p> Password: 111111</p>
                  </Col>
                  <Col>
                    <p>Sign in as an admin</p>
                    <p>Email: admin@test.com</p>
                    <p> Password: 222222</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
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
    signinAction: (email, password, userType) =>
      dispatch(actions.signin(email, password, userType))
  };
};

const mapStateToProps = state => {
  return {
    ifAuth: state.auth.token != null,
    userType: state.auth.userType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
