import "rc-drawer/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";
import store from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[…nextauth]/route";
import ReduxProvider from "@/contexts/ReduxProvider";
import AppProvider from "../contexts/provider";

export default async function RootLayout({ children }) {
  // @ts-ignore
  const session = await getServerSession(authOptions);
  return (
    <>
      <html lang="en">
        <body className="font-inter custom-tippy dashcode-app">
          <AppProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </AppProvider>
        </body>
      </html>
    </>
  );
}
