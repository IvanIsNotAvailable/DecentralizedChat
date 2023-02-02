import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ChatDAppProvider } from "../Context/ChatAppContext";
import { NavBar, Sidebar, Login, Signup } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChatDAppProvider>
      {/*<Signup /> */}
      <NavBar />
      <div className="wrapper">
        {/* <Sidebar /> */}
        <Component {...pageProps} />
      </div>
    </ChatDAppProvider>
  </div>
);

export default MyApp;
