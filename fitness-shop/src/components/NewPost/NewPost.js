import React, { Component } from "react";
class NewPost extends Component {
  render() {
    return (
      <div className="new-post">
        {/* <!-- Default form register --> */}
        <form class="text-center border border-light">
          <div className="section-title">
            <h2>New Post</h2>
            <p>{this.props.sectionDescription}</p>
            <span className="section-title-bg">New Post</span>
          </div>

          <div class="form-row mb-4">
            <div class="col">
              {/* <!-- First name --> */}
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              {/* <!-- Last name --> */}
              <input
                type="text"
                id="defaultRegisterFormLastName"
                class="form-control"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* <!-- E-mail --> */}
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          {/* <!-- Password --> */}
          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            class="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>

          {/* <!-- Phone number --> */}
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            class="form-text text-muted mb-4"
          >
            Optional - for two step authentication
          </small>

          {/* <!-- Newsletter --> */}
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
            <label
              class="custom-control-label"
              for="defaultRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>
          </div>

          {/* <!-- Sign up button --> */}
          <button class="btn btn-info my-4 btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
NewPost.defaultProps = {
  SectionbgTitle: "New Post",
  sectionTitle: "New Post",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
};
export default NewPost;
