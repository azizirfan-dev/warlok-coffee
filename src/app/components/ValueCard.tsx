"use client";
interface ValueCardProps {
  title: string;
  desc: string;
}

export default function ValueCard({ title, desc }: ValueCardProps) {
  return (
    <div
      className="
        bg-white rounded-2xl p-6 border border-[#E4DCD1]/70 
        shadow-[0_4px_15px_rgba(0,0,0,0.05)]
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
    >
      <h4 className="font-semibold text-[#3B2B2B] mb-2 text-lg">{title}</h4>
      <p className="text-[#5E4C43]/80 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
