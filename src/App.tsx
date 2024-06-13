import "./App.css";
import AppNav from "./components/Layouts/Basic/AppNav";
import AppFooter from "./components/Layouts/Basic/AppFooter";

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Event from "./components/pages/Event";
import EventDetail from "./components/pages/Event/Detail";
function App() {
  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <AppFooter />
    </>
  );
}

export default App;
