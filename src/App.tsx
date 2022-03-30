import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { LayoutProvider } from "./context/useLayout";
import Settings from "pages/Settings";
import recallTheme from "./theme/recall";
import "react-datepicker/dist/react-datepicker.css";
import "components/DatePicker/react-datepicker.css";

function App() {
  return (
    <ChakraProvider theme={recallTheme}>
      <AnimatePresence>
        <LayoutProvider>
          <Router>
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </Layout>
          </Router>
        </LayoutProvider>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App;
