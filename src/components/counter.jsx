import React from "react";

const Counter = (props) => {
  const valueFormat = () => {
    return props.value === 0 ? "empty" : props.value;
  };
  const badgeCls = () => {
    let cls = "badge m-2 ";
    return props.value === 0 ? cls + "bg-warning" : cls + "bg-primary";
  };

  //Домашка начало
  function handlerChangeValue(n) {
    props.onSetCounters((prev) =>
      prev.map((val) => {
        if (
          val.id === props.id
          // Убираем отрицательные
          // && val.value + n >= 0
        ) {
          return { ...val, value: val.value + n };
        }
        return val;
      })
    );
  }
  //домашка конец

  return (
    <tr>
      <td>
        <span>{props.title}</span>
      </td>
      <td style={{ minWidth: "100px" }}>
        <span className={badgeCls()}>{valueFormat()}</span>
      </td>
      <td>
        {" "}
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => handlerChangeValue(1)}
        >
          +
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => handlerChangeValue(-1)}
        >
          -
        </button>
      </td>
      <td>
        {" "}
        <button
          className=" btn btn-danger m-2 btn-sm"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Counter;
