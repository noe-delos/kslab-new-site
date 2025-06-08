"use client";

export default function BackgroundLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Mobile lines - closer together */}
      <div className="block md:hidden">
        <div
          className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
          style={{
            width: "5rem",
            left: "calc(50% - 4rem)",
          }}
        />
        <div
          className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
          style={{
            width: "5rem",
            left: "calc(50% - 1rem)",
          }}
        />
      </div>

      {/* Desktop lines - original spacing */}
      <div className="hidden md:block">
        <div
          className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
          style={{
            width: "5rem",
            left: "calc(50% - 6rem)",
          }}
        />
        <div
          className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
          style={{
            width: "5rem",
            left: "calc(50% + 1rem)",
          }}
        />
      </div>
    </div>
  );
}
