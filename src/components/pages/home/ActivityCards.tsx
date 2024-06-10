import decroSvg from "../../../../public/sparkler.svg";
import rightSvg from "../../../../public/rounded-double-right.svg";

import act1Png from "../../../../public/act1.png";
import act2Png from "../../../../public/act2.png";
import act3Png from "../../../../public/act3.png";
import act4Png from "../../../../public/act4.png";
import act5Png from "../../../../public/act5.png";
import act6Png from "../../../../public/act6.png";

export default function ActivityCards() {
  const _data: ActivityCardProps[] = [
    {
      dateStr: "19 MAY 2023",
      activityName: "邪典電影派對——房間",
      imgSrc: act1Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
    {
      dateStr: "19 MAY 2023",
      activityName: "怪舞俱樂部",
      imgSrc: act2Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
    {
      dateStr: "19 MAY 2023",
      activityName: "哈利波特馬拉松",
      imgSrc: act3Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
    {
      dateStr: "19 MAY 2023",
      activityName: "皮卡丘排球大賽",
      imgSrc: act4Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
    {
      dateStr: "19 MAY 2023",
      activityName: "酒精路跑",
      imgSrc: act5Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
    {
      dateStr: "19 MAY 2023",
      activityName: "展覽——我的房間",
      imgSrc: act6Png,
      type: "社群活動",
      status: "開賣中",
      description:
        "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
    },
  ];
  return (
    <div className=" container m-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {_data.map((item) => (
        <ActivityCard key={`activity-${item.activityName}`} {...item} />
      ))}
    </div>
  );
}
interface ActivityCardProps {
  dateStr: string;
  imgSrc: string;
  activityName: string;
  description: string;
  type: string;
  status: string;
}
function ActivityCard({
  dateStr,
  imgSrc,
  activityName,
  description,
  type,
  status,
}: ActivityCardProps) {
  return (
    <div className=" card mt-8 ">
      <div className=" md:text-5xl mb-3">{dateStr}</div>
      <div className=" h-1 bg-primary mb-3"></div>
      <img src={imgSrc} alt="" />
      <strong className=" text-2xl mt-3">{activityName}</strong>
      <p className=" mb-4 mt-3">{description}</p>
      <div className="h-1 bg-primary"></div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={decroSvg} alt="" className="py-3" />
          <span>{type}</span>
        </div>

        <div className=" flex items-center">
          <strong>{status}</strong>
          <img src={rightSvg} alt="" />
        </div>
      </div>
      <div className=" h-1 bg-primary"></div>
    </div>
  );
}
