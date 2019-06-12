import React, { Component } from "react";
import Question from "../Question/Question";
import cssClasses from "./Questions.module.css";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import QuestionDetails from "../components/QuestionDetails/QuestionDetails";

class Questions extends Component {
  state = {
    questions: [],
    searchQuestion: "",
    ifShown:false
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

  showDetailHandler=()=>{
    this.setState({ifShown:true});
  }

  cancelHandler=()=>{
    this.setState({ifShown:false});
  }

  render() {
    const questionList = this.state.questions.map((e, index) => {
      if (e.title.includes(this.state.searchQuestion)) {
        return (
          <div key={index}>
            <Question title={e.title} content={e.content} showDetail={this.showDetailHandler}/>
          </div>
        );
      } else {
        return null;
      }
    });

    let report  = null;
    if(this.state.ifShown){
      report=(
        <Modal>
          <QuestionDetails cancel={this.cancelHandler}/>
        </Modal>
      )

    }

    return (
      <div className={cssClasses.questions}>
        <div className="section-title">
          <h2>Questions</h2>

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
        </div>
        {report}
      </div>
    );
  }
}
export default Questions;
