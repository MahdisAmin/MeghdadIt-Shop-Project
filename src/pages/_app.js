import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{setShowMenu , showMenu}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
