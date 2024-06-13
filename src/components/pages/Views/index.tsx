import Stepper from "./Stepper";
import Svg from "../../../../public/sparkler.svg";
import arrowSvg from "../../../../public/arrow.svg";

export default function Views() {
  return (
    <div className=" container m-auto">
      <Stepper label="" />
      <div className=" container m-auto w-full text-center mb-8">
        <h1 className=" md:text-5xl font-bold">返老還童-制服聯誼</h1>
      </div>
      <ul className="container m-auto">
        <div className=" h-[2px] bg-black"></div>
        <li className=" flex justify-between py-2">
          <span>日期</span>
          <span>2023/5/12</span>
        </li>
        <div className=" h-[1px] bg-black"></div>
        <li className=" flex justify-between py-2">
          <span>票種</span>
          <span>改頭換面票（含大改造）</span>
        </li>
        <div className=" h-[1px] bg-black"></div>

        <li className=" flex justify-between py-2">
          <span>票價</span>
          <span>$8000</span>
        </li>
        <div className=" h-[1px] bg-black"></div>
      </ul>

      <img src={Svg} alt="" className=" w-20 m-auto mt-12 " />

      <h2 className="  text-center font-bold mb-4 text-2xl tracking-widest">
        聯絡人資料
      </h2>

      <form action="" className=" text-center">
        <label className="form-control ">
          <div className="label">
            <span className="label-text">聯絡人姓名</span>
          </div>
          <input
            type="text"
            placeholder="請輸入聯絡人名稱"
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control  ">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="請輸入Email"
            className="input input-bordered w-full  "
          />
        </label>

        <label className="form-control  ">
          <div className="label">
            <span className="label-text">手機</span>
          </div>
          <input
            type="text"
            placeholder="請輸入手機號碼"
            className="input input-bordered w-full  "
          />
        </label>

        <button
          type="submit"
          className=" w-2/3 btn btn-lg mt-8 mb-4  bg-primary text-white"
        >
          登入
          <img src={arrowSvg} alt="" className=" text-white" />
        </button>

        <br />

        <button type="button" className="  ">
          取消購票
        </button>
      </form>
    </div>
  );
}
