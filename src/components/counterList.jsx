import React, { useState } from "react";
import Counter from "./counter";

function CounterList() {
  const initCounters = [
    { id: 0, value: 0, title: "Ненужная вещь" },
    { id: 1, value: 4, title: "Ложка" },
    { id: 2, value: 1, title: "Вилка" },
    { id: 3, value: 4, title: "Тарелка" },
    { id: 4, value: 1, title: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initCounters);
  const handleDelete = (id) => {
    setCounters((prev) => prev.filter((count) => count.id !== id));
  };
  return (
    <div className="container">
      <table className="table mt-5 fs-5">
        <thead>
          <tr>
            <th scope="col" colSpan="4">
              {counters.length ? "Товары в корзине" : "Корзина пуста"}
            </th>
          </tr>
        </thead>
        <tbody>
          {counters.map((count) => (
            <Counter
              key={count.id}
              {...count}
              onDelete={handleDelete}
              onSetCounters={setCounters}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CounterList;
