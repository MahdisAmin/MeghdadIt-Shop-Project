import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  return (
    <AppContext.Provider value={{ setShowMenu, showMenu }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
