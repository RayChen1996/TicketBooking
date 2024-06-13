import Block1 from "./Block1";
import Block2 from "./Block2";
import SectionTitle from "../../SectionTitle";
import Advistise from "./Advistise";
import Block7 from "./Block7";
import ActivityCards from "./ActivityCards";
import Follow from "./Follow";
import OnlineBlock from "./OnlineBlock";
import Block8 from "./Block8";
export default function Home() {
  return (
    <div>
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
    </div>
  );
}
