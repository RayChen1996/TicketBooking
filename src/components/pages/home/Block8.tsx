import active1 from "../../../../public/active1.png";
import active2 from "../../../../public/active2.png";
import active3 from "../../../../public/active3.png";
import active4 from "../../../../public/active4.png";

export default function Block8() {
  const data: ActivityCardProps[] = [
    {
      name: "無聲派對-閉閉嘴dancing",
      imgSrc: active1,
      tag: "社群活動",
    },
    {
      name: "拯救老店大作戰",
      imgSrc: active2,
      tag: "藝文活動",
    },
    {
      name: "內觀修行-部落篇",
      imgSrc: active3,
      tag: "自我覺察",
    },
    {
      name: "賞櫻野餐",
      imgSrc: active4,
      tag: "聯誼活動",
    },
  ];
  return (
    <div className=" my-14 container m-auto grid grid-cols-1 md:grid-cols-4 gap-3 ">
      {data.map((item, idx) => (
        <ActiveCard key={`active-${idx}`} {...item} />
      ))}
    </div>
  );
}

interface ActivityCardProps {
  name: string;
  imgSrc: string;
  tag: string;
}

function ActiveCard({ name, imgSrc, tag }: ActivityCardProps) {
  return (
    <div className=" relative border-2 border-primary">
      <div className=" absolute -top-10 left-1/2 px-4 py-4 bg-white ">
        {tag}
      </div>
      <img src={imgSrc} alt="" className=" w-full px-3 pt-3" />
      <div className=" px-2">{name}</div>
    </div>
  );
}
