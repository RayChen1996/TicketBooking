import "./App.css";
import AppNav from "./components/Layouts/Basic/AppNav";
import AppFooter from "./components/Layouts/Basic/AppFooter";
import Block1 from "./components/pages/home/Block1";
import Block2 from "./components/pages/home/Block2";
import SectionTitle from "./components/SectionTitle";
import Advistise from "./components/pages/home/Advistise";
import Block7 from "./components/pages/home/Block7";

function App() {
  return (
    <>
      <AppNav />
      <Block1 />
      <Block2 />
      <SectionTitle chtTitle="近期活動" engTitle="RECENT" />
      <SectionTitle chtTitle="線上活動" engTitle="ONLINE" />

      <Advistise description="活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS" />
      <Advistise description="活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS" />

      <Block7
        title="此刻打盹，你將做夢；此刻學習，你將圓夢"
        subTitle="——我也不知道誰說的"
      />
      <AppFooter />
    </>
  );
}

export default App;
