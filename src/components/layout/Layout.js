import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import OffCanvasMenu from "../elements/OffCanvasMenu";

function Layout({children}) {
  return <div>
    <Header />
    {children}
    <Footer />
    <OffCanvasMenu/>
  </div>;
}

export default Layout;
