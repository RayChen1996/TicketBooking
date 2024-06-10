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

      <div className=" flex md:text-[32px]  border-primary">
        <div className="w-1/2  border border-primary  py-4 pl-8">
          <div>想第一時間獲得新奇有趣的活動資訊？</div>
          <div>追蹤我們的社群吧！</div>
          <div>也歡迎你聯繫我們，提供好玩有趣的活動企劃。</div>
        </div>
        <div className="w-1/2 uppercase border border-primary  py-4 pl-8">
          <div>訂閱電子報送折價券！</div>
          <div>定期精選文章資訊及最新優惠資訊，</div>
          <div>還不通通給我訂閱起來？</div>

          <input
            type="email"
            name=""
            placeholder="輸入Email"
            className="input-lg input-bordered w-2/3 border-primary border-2"
            id=""
          />
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
