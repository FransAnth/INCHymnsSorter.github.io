import { useState } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/header";

const Layout = () => {
  const [message, setMessage] = useState("Welcome to The Hymn Sorter");

  return (
    <div className="h-screen w-screen font-roboto">
      <PageHeader message={message} setMessage={setMessage} />
      <Outlet context={[setMessage]} />
    </div>
  );
};
export default Layout;
