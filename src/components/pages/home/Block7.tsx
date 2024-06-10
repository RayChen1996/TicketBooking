interface Block7Props {
  title: string;
  subTitle: string;
}
export default function Block7({ title, subTitle }: Block7Props) {
  return (
    <div className=" border-2 border-primary flex justify-center flex-col items-center py-[60px]">
      <div>
        <strong className=" md:text-[32px]">{title}</strong>
      </div>
      <p className=" md:text-[18px]">{subTitle}</p>
    </div>
  );
}
