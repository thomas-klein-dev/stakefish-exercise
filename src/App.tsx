import { IntlProvider } from "react-intl";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Root } from "./components";
import { ExchangeDetails, Exchanges } from "./pages";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Exchanges />,
      },
      {
        path: "exchanges/:exchangeId",
        element: <ExchangeDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={navigator.language}>
        <RouterProvider router={router} />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
