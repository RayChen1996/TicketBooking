import markSvg from "../../../../public/sparkler.svg";
import arrowSvg from "../../../../public/arrow.svg";
export default function SignIn() {
  return (
    <div className=" container m-auto min-h-screen">
      <FormBlock />
    </div>
  );
}

function FormBlock() {
  return (
    <div className="  text-center">
      <img src={markSvg} alt="" className=" w-20 m-auto mt-16" />
      <h2 className=" font-bold text-2xl">會員登入</h2>

      <form className="   flex flex-col    ">
        <label className="form-control ">
          <div className="label">
            <span className="label-text">帳號</span>
          </div>
          <input
            type="text"
            placeholder="請輸入帳號"
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control  ">
          <div className="label">
            <span className="label-text">密碼</span>
          </div>
          <input
            type="text"
            placeholder="請輸入密碼"
            className="input input-bordered w-full  "
          />
        </label>
        <button className=" btn bg-primary text-white">
          登入
          <img src={arrowSvg} alt="" className=" text-white" />
        </button>
      </form>
    </div>
  );
}
