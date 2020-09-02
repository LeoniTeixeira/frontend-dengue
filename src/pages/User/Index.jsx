import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Citizen from "./Citizen";
import Agent from "./Agent";
import Adm from "./Adm";
import { data } from "../../data/user"

export default props => {
    const type = data.user.type
    return (
        <>
            <Header link1="/" label1="Sair" />
            <div>
      {(() => {
        switch (type) {
          case "citizen":
            return <Citizen />;
          case "agent":
            return <Agent />;
          case "adm":
            return <Adm />;
          default:
            return null;
        }
      })()}
    </div>
            <Footer />

        </>
    )
}