import Stepper from "./Stepper";
import Svg from "../../../../public/sparkler.svg";
import arrowSvg from "../../../../public/arrow.svg";
import checkSvg from "../../../../public/check-circled.svg";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { stepIndex } from "../../../jotai/order";
import { useAtom, Provider } from "jotai";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function Views() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [index, setIndex] = useAtom(stepIndex);

  console.log(index, errors);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (index === "ORDER_CHECK") {
      setIndex("PAYMENT");
    }
    if (index === "PAYMENT") {
      setIndex("RESULT");
    }
  };

  return (
    <div className=" container m-auto">
      <Stepper index={index} />
      <div className=" container m-auto w-full text-center mb-8">
        <h1 className=" md:text-5xl font-bold">返老還童-制服聯誼</h1>
      </div>
      <p className=" mb-8 text-[#FBFF22] text-base px-3 py-2 text-center bg-black">
        您的訂單已保留，請在2023/5/30 04:32
        前完成繳費。若逾期未繳款，系統將取消您的訂單。
      </p>
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

      <img
        src={index === "RESULT" ? checkSvg : Svg}
        alt=""
        className=" w-20 m-auto mt-12 "
      />
      {/* <img src={Svg} alt="" className=" w-20 m-auto mt-12 " /> */}

      <h2 className="text-center font-bold mb-4 text-2xl tracking-widest">
        {index === "ORDER_CHECK" && "聯絡人資料"}
        {index === "PAYMENT" && "結帳資訊"}
        {index === "RESULT" && "訂購成功"}
      </h2>
      <Provider>
        {index === "ORDER_CHECK" && (
          <form
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log(err);
            })}
            className="text-center"
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                return (
                  <label className="form-control ">
                    <div className="label">
                      <span className="label-text">聯絡人姓名</span>
                    </div>
                    <input
                      {...field}
                      type="text"
                      placeholder="請輸入聯絡人名稱"
                      className="input input-bordered w-full "
                    />
                  </label>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <label className="form-control  ">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      {...field}
                      type="text"
                      placeholder="請輸入Email"
                      className="input input-bordered w-full  "
                    />
                  </label>
                );
              }}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => {
                return (
                  <label className="form-control  ">
                    <div className="label">
                      <span className="label-text">手機</span>
                    </div>
                    <input
                      {...field}
                      type="text"
                      placeholder="請輸入手機號碼"
                      className="input input-bordered w-full  "
                    />
                  </label>
                );
              }}
            />

            <button
              type="submit"
              className=" w-2/3 btn btn-lg mt-8 mb-4  bg-primary text-white"
            >
              確認表單資料
              <img src={arrowSvg} alt="" className=" text-white" />
            </button>

            <br />

            <button type="button" className="  ">
              取消購票
            </button>
          </form>
        )}

        {index === "PAYMENT" && (
          <form
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log(err);
            })}
            className="text-center"
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                return (
                  <label className="form-control ">
                    <div className="label">
                      <span className="label-text">取票資訊</span>
                    </div>
                    <input
                      {...field}
                      type="text"
                      placeholder="請輸入身分證字號或護照號碼"
                      className="input input-bordered w-full "
                    />
                  </label>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <label className="form-control  ">
                    <div className="label">
                      <span className="label-text">付款方式</span>
                    </div>
                    <input
                      {...field}
                      type="radio"
                      className="input radio-primary  "
                    />
                  </label>
                );
              }}
            />

            <button
              type="submit"
              className=" w-2/3 btn btn-lg mt-8 mb-4  bg-primary text-white"
            >
              確認訂單並繳費
              <img src={arrowSvg} alt="" className=" text-white" />
            </button>
          </form>
        )}
      </Provider>
    </div>
  );
}
