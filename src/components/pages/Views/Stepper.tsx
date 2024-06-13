import clsx from "clsx";
import checkSvg from "../../../../public/verification-check.svg";
import { type StepStype } from "../../../jotai/order";
type Props = {
  index: StepStype;
};

export default function Stepper({ index }: Props) {
  console.log(index);
  return (
    <div className=" w-full md:mt-[60px] md:mb-12">
      <ul className="steps w-full">
        <li
          className={clsx(
            "step step-primary rounded-none",
            index === "ORDER_CHECK" && "complete"
          )}
        >
          {index === "ORDER_CHECK" && (
            <img src={checkSvg} className="w-6 h-6  " alt="Check icon" />
          )}
          <img src={checkSvg} className="w-10 h-10  " alt="Check icon" />
          訂單確認
        </li>
        <li
          className={clsx(
            "step ",
            index === "PAYMENT" || (index === "RESULT" && "step-primary")
          )}
        >
          結帳付款
        </li>
        <li className={clsx("step", index === "RESULT" && "step-primary")}>
          訂購結果
        </li>
      </ul>
    </div>
  );
}
