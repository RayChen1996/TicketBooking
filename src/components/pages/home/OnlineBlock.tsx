import GPTPng from "../../../../public/onlineImg.png";
import leftSvg from "../../../../public/rounded-double-right.svg";

export default function OnlineBlock() {
  return (
    <div className=" container m-auto grid grid-cols-1 md:grid-cols-2 mt-8 mb-[60px]">
      <img src={GPTPng} alt="" />
      <div>
        <strong className=" text-[32px]">切特居批踢</strong>
        <ul className="flex gap-2 mt-4">
          <li className=" border-2 border-primary border-l-4">
            <strong className="px-6 py-1">競賽</strong>
          </li>
          <li className=" border-2 border-primary border-l-4">
            <strong className="px-6 py-1">科技</strong>
          </li>
          <li className=" border-2 border-primary border-l-4">
            <strong className="px-6 py-1">有趣</strong>
          </li>
        </ul>
        <p className=" mt-8">
          最近網路上很流行的AI程式
          ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。
          這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。
          該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
        </p>
        <button type="button" className="mt-8 btn bg-primary text-white w-full">
          查看活動詳情
          <img src={leftSvg} alt="" className=" bg-white" />
        </button>
      </div>
    </div>
  );
}
