import fbSvg from "../../../../public/facebook.svg";
import emailSvg from "../../../../public/ui-email.svg";
import phoneSvg from "../../../../public/phone.svg";

export default function Follow() {
  return (
    <div className=" container m-auto mt-[60px]">
      <div className=" flex md:text-[32px]  border-primary">
        <strong className="w-1/2  border border-primary  py-4 pl-8">
          #FOLLOW US
        </strong>
        <strong className="w-1/2 uppercase border border-primary  py-4 pl-8">
          #subscribe us
        </strong>
      </div>

      <div className=" flex md:text-[32px]  border-primary ">
        <div className="w-1/2  border border-primary  py-4 pl-8 text-base">
          <div>想第一時間獲得新奇有趣的活動資訊？</div>
          <div>追蹤我們的社群吧！</div>
          <div>也歡迎你聯繫我們，提供好玩有趣的活動企劃。</div>

          <ul className=" flex gap-2 flex-col mt-8">
            <li className=" flex  items-center gap-2">
              <span className=" bg-black p-3">
                <img src={emailSvg} alt="" />
              </span>
              <span>7tao.event@gmail.com</span>
            </li>
            <li className=" flex  items-center gap-2">
              <span className=" bg-black p-3">
                <img src={phoneSvg} alt="" />
              </span>
              <span>09123123123</span>
            </li>
            <li className=" flex  items-center gap-2">
              <span className=" bg-black p-3">
                <img src={fbSvg} alt="" />
              </span>
              <span>7TAO七逃</span>
            </li>
          </ul>
        </div>
        <div className="w-1/2 uppercase border border-primary  pt-8  text-base">
          <div className="pl-8">訂閱電子報送折價券！</div>
          <div className="pl-8">定期精選文章資訊及最新優惠資訊，</div>
          <div className=" mb-8 pl-8">還不通通給我訂閱起來？</div>

          <div className="pl-8 mb-[58px]">
            <input
              type="email"
              name=""
              placeholder="輸入Email"
              className="input-lg  input-bordered w-2/3 border-primary border-2"
              id=""
            />
          </div>

          <div>
            <button
              type="submit"
              className=" rounded-none w-full btn bg-primary text-white"
            >
              確認訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
