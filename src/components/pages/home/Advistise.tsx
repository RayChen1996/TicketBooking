interface AdvistiseProps {
  description: string;
}
export default function Advistise({ description }: AdvistiseProps) {
  return (
    <div className="py-6 bg-primary text-4xl font-bold text-secondary">
      {description}
    </div>
  );
}
