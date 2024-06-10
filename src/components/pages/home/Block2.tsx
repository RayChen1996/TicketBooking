import Svg1 from "../../../../public/music.svg";
import Svg2 from "../../../../public/heart.svg";
import Svg3 from "../../../../public/museu.svg";
import Svg4 from "../../../../public/cutlery.svg";
import Svg5 from "../../../../public/snowed-mountains.svg";

export default function Block2() {
  const _data: BoxProps[] = [
    {
      label: "演出",
      svg: Svg1,
    },
    {
      label: "聯誼",
      svg: Svg2,
    },
    {
      label: "展覽",
      svg: Svg3,
    },
    {
      label: "美食",
      svg: Svg4,
    },
    {
      label: "戶外",
      svg: Svg5,
    },
  ];
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3  items-center justify-center container  m-auto">
      {_data.map((item, idx) => (
        <Box key={`item-${idx}`} label={item.label} svg={item.svg} />
      ))}
      <div className=" m-auto text-nowrap text-2xl text-secondary md:text-5xl flex items-center bg-primary border-primary border-4 flex-col md:py-9 md:px-[58px] px-8 py-6  ">
        <span className="mt-3">探索 </span>

        <span className=" mt-3">更多 </span>
      </div>
    </div>
  );
}
interface BoxProps {
  svg: string;
  label: string;
}
function Box({ label, svg }: BoxProps) {
  return (
    <div className="text-2xl  text-nowrap m-auto flex items-center border-primary border-4 flex-col md:py-9 md:px-[58px] px-8 py-6">
      <img src={svg} />
      <span className=" mt-3">{label}</span>
    </div>
  );
}
