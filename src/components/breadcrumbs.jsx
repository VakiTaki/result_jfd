import React from "react";

const Breadcrumbs = (props) => {
  // console.log(props);
  const isMainPage = props.page.id === "main";
  const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");
  return (
    <nav>
      <ol className="breadcrumb">
        <li className={mainClasses} onClick={props.onGoMain}>
          Главная
        </li>
        {!isMainPage && (
          <li className="breadcrumb-item active" aria-current="page">
            {props.page.text}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
