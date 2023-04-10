import React, { useState } from "react";
import Navbar from "./Navbar";
import CounterList from "./counterList";
import Breadcrumbs from "./breadcrumbs";

function Page() {
  const logoUrl = "https://picsum.photos/100";
  const siteName = "example.com";
  const [menuItems, setMenuItems] = useState([
    { id: "main", text: "Главная", active: true },
    { id: "blog", text: "Блог", active: false },
    { id: "contacts", text: "Контакты", active: false },
  ]);

  const handleItemClick = (id) => {
    const newMenuItems = menuItems.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setMenuItems(newMenuItems);
  };
  const handleSetMainActive = () => {
    const newMenuItems = menuItems.map((item) => ({
      ...item,
      active: item.id === "main",
    }));
    setMenuItems(newMenuItems);
  };

  const currentActivePage = menuItems.find((item) => item.active);

  return (
    <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logoUrl} alt="" className="bi pe-none me-2" />
          <span className="fs-4">{siteName}</span>
        </div>
        <hr />
        <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
      </div>
      <div className="p-4">
        <div>
          <Breadcrumbs
            page={currentActivePage}
            onGoMain={handleSetMainActive}
          />
        </div>
        <CounterList />
      </div>
    </main>
  );
}

export default Page;
