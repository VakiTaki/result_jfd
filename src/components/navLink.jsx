import React from "react";

function NavLink(props) {
  const getClasses = () => {
    let classes = "nav-link";
    return (classes += props.active ? " active" : "");
  };

  return (
    <li className="nav-item" onClick={() => props.onItemClick(props.id)}>
      <a href={props.link} className={getClasses()}>
        {props.text}
      </a>
    </li>
  );
}

export default NavLink;
