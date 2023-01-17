import "../styles/globals.css";

import { ChatDAppProvider } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";


const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChatDAppProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChatDAppProvider>
  </div>
);




export default MyApp;
