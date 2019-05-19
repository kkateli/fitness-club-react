import React, { Component } from "react";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="post img"/>;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div className="new-post">
        {/* <!-- page title --> */}
        <form className="text-center border border-light">
          <div className="section-title">
            <h2>New Post</h2>
            <p>{this.props.sectionDescription}</p>
            <span className="section-title-bg">New Post</span>
          </div>
          {/* //form starts here */}
          {/* <div className="form-row mb-4">
            <div className="col"> */}
              {/* <!-- Name --> */}
              <input
                type="text"
                className="form-control"
                placeholder="Author Name"
              />
            {/* </div> */}
            {/* <div className="col"> */}
              <div className="previewComponent">
                <form onSubmit={e => this._handleSubmit(e)}>
                  <input
                    className="fileInput"
                    type="file"
                    onChange={e => this._handleImageChange(e)}
                  />
                  <button
                    className="submitButton"
                    type="submit"
                    onClick={e => this._handleSubmit(e)}
                  >
                    Upload Image
                  </button>
                </form>
                <div className="imgPreview">{$imagePreview}</div>
              </div>
              {/* <!-- img --> */}
              {/* <input
                type="img"
                className="form-control"
                placeholder="img"
              /> */}

              {/* <div id="mainApp" />
              <div class="centerText">
                <span>Checkout associated </span>
                <a
                  href="http://www.hartzis.me/react-image-upload/"
                  target="_blank"
                >
                  blog post
                </a> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}

          {/* <!-- Title --> */}
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Post Title"
          />

          {/* <!-- Content --> */}
          <input
            type="text"
            className="form-control"
            placeholder="Post Content"
          />

          {/* <!-- Tag --> */}
          <input
            type="text"
            className="form-control"
            placeholder="Tag Name"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />

          {/* <!-- Submit button --> */}
          <button className="btn my-4 btn-block" type="submit">
            Submit
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
