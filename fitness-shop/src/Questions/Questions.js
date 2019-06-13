import React, { Component } from "react";
import Question from "../Question/Question";
import cssClasses from "./Questions.module.css";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import QuestionDetails from "../components/QuestionDetails/QuestionDetails";
import Backdrop from "../components/Backdrop/Backdrop";

class Questions extends Component {
  state = {
    questions: [],
    searchQuestion: "",
    ifShown: false,
    qustion:""
  };
  //Ajax calls
  componentDidMount() {
    axios
      .get("https://search-engine-e54b4.firebaseio.com/.json")
      .then(response => {
        this.setState({
          questions: response.data
        });
      })

      .then(response => {
        console.log(this.state.questions);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  search = event => {
    this.setState({
      searchQuestion: event.target.value
    });
  };

  showDetailHandler = i => {
    this.setState({ ifShown: true });
    this.state.questions.map((e, index) => {
      if (i === index) {
        this.setState({question:e});
      } 
    });
  };

  cancelHandler = () => {
    this.setState({ ifShown: false });
  };

  render() {
    const questionList = this.state.questions.map((e, index) => {
      if (e.title.includes(this.state.searchQuestion)) {
        return (
          <div key={index}>
            <Question
              title={e.title}
              content={e.content}
              showDetail={() => this.showDetailHandler(index)}
            />
          </div>
        );
      } else {
        return null;
      }
    });

    let report = null;
    if (this.state.ifShown && this.state.qustion!=null) {
      report = (
        <div>
<Modal>
          <QuestionDetails qTitle={this.state.question.title} qContent = {this.state.question.content} cancel={this.cancelHandler} />
        </Modal>
        <Backdrop backdropClicked={this.cancelHandler}/>
        </div>
        
      );
    }

    return (
      <div className={cssClasses.questions}>
        <div className="section-title">
          <h2>Questions</h2>
          <p>Questions can be searched here. Key words are case-sensitive</p>
          </div>
          <form className={cssClasses.searchEngine}>
            <i className="icofont-search" />
            <input
              type="text"
              className={cssClasses.searchBar}
              placeholder="Search for something..."
              onChange={event => this.search(event)}
            />
          </form>

          {questionList}
        
        {report}
      </div>
    );
  }
}
export default Questions;
