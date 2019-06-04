import React from "react";
import css from "./LoaderThree.module.css";
const loaderThree = () => {
  return (
    <div className={css.background}>
      <div class={css.spinner} />
    </div>
  );
};
export default loaderThree;
