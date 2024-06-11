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

function App() {
  return (
    <>
      <AppNav />
      <Block1 />
      <Block2 />
      <SectionTitle chtTitle="近期活動" engTitle="RECENT" />
      <ActivityCards />
      <SectionTitle chtTitle="線上活動" engTitle="ONLINE" />
      <OnlineBlock />

      <Advistise description="活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS" />
      <Block8 />
      <Advistise description="活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS" />

      <Follow />
      <Block7
        title="此刻打盹，你將做夢；此刻學習，你將圓夢"
        subTitle="——我也不知道誰說的"
      />
      <AppFooter />
    </>
  );
}

export default App;
