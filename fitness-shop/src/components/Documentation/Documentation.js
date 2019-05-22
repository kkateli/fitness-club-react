import React from "react";
const documentation = () => {
  return (
    <div className="documentation">
      <div className="section-title">
        <h2>Documentation</h2>
        <span className="section-title-bg">Documentation</span>
      </div>
      <p>
        <span className="initWord">O</span>ur site enables people to train their bodies at home. We provide
        detailed training videos, demonstrated by professional personal
        trainers, to make sure you understand every single tip to follow. We can
        leave comments or share them with your friends. You also can post your
        training experience to share with others.
      </p>
      <p>
        <span className="initWord">T</span>his project is Front-end only. Data are stored in Firebase directly
        through AJAX calls. It is set up by
        create-react-app(https://github.com/facebook/create-react-app), where
        amazing tools such as Webpack, Babel, ESLint are already installed. The
        project follows continuous integration / continuous delivery pipelines.
        All commits are recorded on GitHub.
      </p>
      <p><span className="initWord">P</span>lease view:</p>
      <p>https://github.com/kkateli/fitness-club-react </p>
      <p>
      <span className="initWord">S</span>ome contents are filled with dummy text. They will be updeated after
        all functionalities are built.{" "}
      </p>
      <p>
      <span className="initWord">R</span>equirements: <span className="sprintOne">Sprint one</span>,
        <span className="sprintTwo">Sprint two</span>,
        <span className="reachHere">Where I have reached</span>
      </p>
      <ol>
        <span className="sprintOne">
          <li>Users are able to navigate pages.</li>
          <li>
            Users are able to view a background video when they open up the home
            page.
          </li>
          <li>Users are able to view what the club does on whatWeDo page.</li>
          <li>Users are able to view our top trainers on club page.</li>
          <li>
            Users are able to view our members' latest posts on club page.{" "}
          </li>
          <li>Users are able to submit their own posts on newPost page.</li>
          <ul>
            <li className="reachHere">-Push state to Firebase</li>
          </ul>
          <li>Users are able to view the post they have submitted.</li>
          <ul>
            <li>-Get data from Firebese</li>
          </ul>
          <li>Users are able to upload training videos.</li>
          <li> Users are able to view training videos.</li>
        </span>
        <span className="sprintTwo">
          <li>User Authentication. (User types: manager/member)</li>
          <li>A manager is able to upload a trainer's details. </li>
          <li>A manager is able to delete a trainer's details.</li>
          <li>A manager is able to delete a member's posts. </li>
          <li>A manager is able to upload training videos by categories. </li>
          <li> A member is able to edit/delete their posts.</li>
          <li>
            A member is able to view training videos by categories.(Yoga,
            cardio, and weight-lifting).
          </li>
        </span>
      </ol>

      <p><span className="initWord">S</span>chedules:</p>
      <p> Sprint one: 16 May 2019-23 May 2019 </p>
      <p>Sprint two: 23 May 2019-30 May 2019</p>
      <p><span className="initWord">A</span>ny questions, Please contact: Kate li kateli24@outlook.com</p>
      <p><span className="initWord">V</span>ideo used: </p>
      <p>Nike Running Commercial | "Steps"</p>
      <p>https://www.youtube.com/watch?v=d1qnvK3ID_w </p>
      <p><span className="initWord">I</span>mages used:</p>
      <p>
        https://www.walmart.ca/en/ip/sunny-health-fitness-sf-e905-magnetic-elliptical-trainer/6000193040818
      </p>
      <p>
        https://ifpa-fitness.com/product/personal-fitness-trainer-exam-only/
      </p>
      <p>https://www.kmart.co.nz/product/balance-trainer/1643378</p>
      <p>
        https://www.amazon.com/Schwinn-411-Compact-Elliptical-Machine/dp/B07H1BKRQ3
      </p>
    </div>
  );
};
export default documentation;