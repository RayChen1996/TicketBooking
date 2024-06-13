import "./App.css";
import AppNav from "./components/Layouts/Basic/AppNav";
import AppFooter from "./components/Layouts/Basic/AppFooter";
import Block1 from "./components/pages/home/Block1";
import Block2 from "./components/pages/home/Block2";
import SectionTitle from "./components/SectionTitle";
import Advistise from "./components/pages/home/Advistise";
import Block7 from "./components/pages/home/Block7";
import ActivityCards from "./components/pages/home/ActivityCards";
import Follow from "./components/pages/home/Follow";
import OnlineBlock from "./components/pages/home/OnlineBlock";
import Block8 from "./components/pages/home/Block8";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Event from "./components/pages/Event";
function App() {
  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/event" element={<Event />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <AppFooter />
    </>
  );
}

export default App;
