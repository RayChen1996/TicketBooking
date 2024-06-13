// import { useParams } from "react-router-dom";
import SectionTitle from "../../SectionTitle";
import Bg from "../../../../public/eventBG.png";
import lineSvg from "../../../../public/line.svg";
import line1Svg from "../../../../public/Line1.svg";
export default function EventDetail() {
  // const { id } = useParams(); // 使用 useParams 來獲取動態參數

  return (
    <div>
      <Block1 />
      <SectionBlock />
      <Block2 />

      <SectionTitle chtTitle="購票資訊" engTitle="TICKET" />
      <Tbl />
    </div>
  );
}
interface TblItemProps {
  dateStr: string;
  ticketType: string;
  Price: number;
}
function Tbl() {
  const data: TblItemProps[] = [
    {
      dateStr: "2023/5/12",
      Price: 600,
      ticketType: "普通票",
    },
    {
      dateStr: "2023/5/12",
      Price: 3600,
      ticketType: "改頭換面票（含大改造）",
    },
    {
      dateStr: "2023/5/12",
      Price: 8000,
      ticketType: "必勝票（含戀愛小抄）",
    },
  ];

  function _renderItem({ Price, dateStr, ticketType }: TblItemProps) {
    return (
      <tr>
        <td>{dateStr}</td>
        <td>{ticketType}</td>
        <td>${Price}</td>
        <td>
          <button className=" px-6 py-2 border-2 border-primary rounded-none">
            立即購票
          </button>
        </td>
      </tr>
    );
  }
  return (
    <div className=" container m-auto">
      <table className=" table text-center mt-4 ">
        <thead>
          <tr>
            <th>活動日期</th>
            <th>票種</th>
            <th>票價</th>
            <th>購票</th>
          </tr>
        </thead>
        <tbody>{data.map((item) => _renderItem(item))}</tbody>
      </table>
    </div>
  );
}

function Block1() {
  return (
    <div className=" container m-auto md:flex gap-6  mb-6 mt-[30px] md:h-[600px]">
      <div className=" md:w-3/4 border-2 border-primary p-3">
        <img src={Bg} alt="" className=" h-full w-full" />
      </div>
      <div className=" md:w-1/5 flex md:flex-col  gap-6 h-full">
        <div className=" w-1/3 md:w-full  border-2 border-primary text-center py-8 px-10 ">
          <span className=" text-5xl   ">2023</span>
        </div>
        <div className="w-2/3 md:w-full text-center border-2 border-primary py-8 px-10 flex-1 flex items-center justify-center md:flex-col">
          <div className=" text-5xl">MAY</div>
          <div className=" text-5xl">19</div>
          <img className=" m-auto" src={line1Svg} alt="" />
          <div className=" text-[32px]">12:00</div>

          <img src={lineSvg} className=" m-auto" alt="" />
          <div className=" text-[32px]">20:00</div>
        </div>
      </div>
    </div>
  );
}

function SectionBlock() {
  return (
    <div className=" container m-auto">
      <strong className=" md:text-6xl mt-6">返老還童-制服聯誼</strong>
      <p className=" md:text-[22px] mt-4">
        穿上制服，無年齡限制，一起走上街頭、尋找青春才有的純愛心動！
      </p>

      <ul className=" gap-2 mt-6 hidden md:flex">
        <li className=" border-2 border-primary border-l-4">
          <strong className="px-6 py-1">聯誼</strong>
        </li>
        <li className=" border-2 border-primary border-l-4">
          <strong className="px-6 py-1">美食</strong>
        </li>
        <li className=" border-2 border-primary border-l-4">
          <strong className="px-6 py-1">戶外</strong>
        </li>
        <li className=" border-2 border-primary border-l-4">
          <strong className="px-6 py-1">交通旅遊</strong>
        </li>
      </ul>
    </div>
  );
}

function Block2() {
  return (
    <div className=" mt-12 container m-auto border-2 border-primary p-8 ">
      <p>想回到過去？試著讓故事繼續？</p>
      <br />
      <p>
        由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！制服由主辦方提供，妝髮造型可額外加價購！
      </p>
      <br />

      <p>
        活動中全程會有隨行攝影師，捕捉你們的純愛互動，拍攝成實境電視劇，讓你們能留下永恆的美好回憶
        &lt;3
      </p>
    </div>
  );
}
