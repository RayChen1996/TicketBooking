interface SectionTitleProps {
  engTitle: string;
  chtTitle: string;
}
export default function SectionTitle({
  engTitle,
  chtTitle,
}: SectionTitleProps) {
  return (
    <div className=" mt-12 py-[38px] px-8 container m-auto border-2 border-primary flex justify-between items-center ">
      <h1 className=" md:text-[64px]">{engTitle}</h1>
      <h3 className=" md:text-[32px]">{chtTitle}</h3>
    </div>
  );
}
