import "@/src/styles/index.scss";
import { AuthProvider } from "@/src/context/AuthContext";
import ContextProvider from "@/src/context/ContextProvider";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </AuthProvider>
  );
}
