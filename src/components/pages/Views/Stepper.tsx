import "./stepper.module.css";
type Props = {
  label: string;
};

export default function Stepper({ label }: Props) {
  console.log(label);
  return (
    <div className=" w-full md:mt-[60px] md:mb-12">
      <ul className="steps w-full">
        <li className="step step-primary rounded-none">訂單確認</li>
        <li className="step step-primary">結帳付款</li>
        <li className="step">訂購結果</li>
      </ul>
    </div>
  );
}
