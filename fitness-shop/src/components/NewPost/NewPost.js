import React, { Component } from "react";

import Loader from "../Loader/LoaderOne/LoaderOne";
import "firebase/storage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const today = new Date();
const dd = String(today.getDate());
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const mm = monthNames[today.getMonth()];
class NewPost extends Component {
  state = {
    file: "",
    imagePreviewUrl: "",
    name: "",
    title: "",
    content: "",
    tag: "",
    date: dd,
    month: mm,
    ifSpin: false,
    // imgId:""
  };

  postSubmitButton = () => {
    if (this.state.name !== "") {
      // axios
      //   .post("https://fitness-club-56fdc.firebaseio.com/.json", {

      //     name: this.state.name,
      //     title: this.state.title,
      //     content: this.state.pontent,
      //     tag: this.state.tag,
      //     imageUrl: this.state.imagePreviewUrl,
      //     date: this.state.date,
      //     month: this.state.month
      //   })
      //   .then(response => {
      //     console.log(response);
      //     alert("Post submitted. Thanks :)");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

      let key = firebase
        .database()
        .ref("/")
        .push().key;
      firebase
        .database()
        .ref("/" + key)
        .set({
          name: this.state.name,
          id: key,
          title: this.state.title,
          content: this.state.content,
          tag: this.state.tag,
          date: this.state.date,
          month: this.state.month,
          // imgId:this.state.imgId,
          imagePreviewUrl:this.state.imagePreviewUrl
        })
        .then(() => {
          alert("Post submitted. Thanks :)");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert("Please fill up the form. It is super fun :)");
    }
  };

  name = event => {
    this.setState({
      name: event.target.value
    });
  };

  title = event => {
    this.setState({
      title: event.target.value
    });
  };

  content = event => {
    this.setState({
      content: event.target.value
    });
  };

  tag = event => {
    this.setState({
      tag: event.target.value
    });
  };
  // Uploading img to Firebase storage
  handleSubmit(e) {
    this.setState({ ifSpin: true });
    e.preventDefault();

    // let key = firebase
    //     .database()
    //     .ref("/")
    //     .push().key;
    // const extension = this.state.file.name.slice(this.state.file.name.lastIndexOf('.'));

    firebase
      .storage()
      .ref("postImg/" + String(this.state.file.name))
      .put(this.state.file)
      .then(() => {
        this.setState({ ifSpin: false});
        alert("Uploaded to Firebase");
      })
      .catch(error => {
        console.log(error);
        this.setState({ ifSpin: false });
      });
  }

  handleImageChange(e) {
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
    // img preview
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="post img" />;
    } else {
      $imagePreview = <div className="previewText">Image Preview</div>;
    }
    // Loader set up
    let spinner = null;

    if (this.state.imagePreviewUrl !== "") {
      if (this.state.ifSpin) {
        spinner = <Loader />;
      }
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

          {/* <!-- Name --> */}
          <div className="input-control">
            <input
              type="text"
              className="form-control"
              placeholder="Author Name(required)"
              onChange={event => this.name(event)}
            />
          </div>
          {spinner}
          {/* img */}
          <div className="previewComponent">
            <form className="file" onSubmit={e => this.handleSubmit(e)}>
              <input
                className="fileInput"
                type="file"
                onChange={e => this.handleImageChange(e)}
              />
              <button
                className="submitButton"
                type="submit"
                onClick={e => this.handleSubmit(e)}
              >
                Upload Image
              </button>
            </form>

            <div className="imgPreview">{$imagePreview}</div>
          </div>

          {/* <!-- Title --> */}
          <div className="input-control">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Post Title"
              onChange={event => this.title(event)}
            />
          </div>

          {/* <!-- Content --> */}
          <div className="input-control" id="postTextArea">
            <textarea
              rows="4"
              cols="61"
              placeholder="Post Content"
              onChange={event => this.content(event)}
            />
          </div>

          {/* <!-- Tag --> */}
          <div className="input-control">
            <input
              type="text"
              className="form-control"
              placeholder="Tag Name"
              aria-describedby="defaultRegisterFormPhoneHelpBlock"
              onChange={event => this.tag(event)}
            />
          </div>

          {/* <!-- Submit button --> */}
          <div
            className="button"
            id="postButton"
            onClick={this.postSubmitButton}
          >
            Submit
            <div className="mask" />
          </div>
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
