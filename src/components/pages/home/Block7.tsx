interface Block7Props {
  title: string;
  subTitle: string;
}
export default function Block7({ title, subTitle }: Block7Props) {
  return (
    <div className=" mt-[60px] border-[3px] border-b-0 border-l-0 border-r-0 border-primary flex justify-center flex-col items-center py-[60px]">
      <div>
        <strong className=" md:text-[32px]">{title}</strong>
      </div>
      <p className=" md:text-[18px] mt-4">{subTitle}</p>
    </div>
  );
}
