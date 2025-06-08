"use client";

export default function BackgroundLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Left vertical line - perfectly centered with more spacing */}
      <div
        className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
        style={{
          width: "5rem",
          left: "calc(50% - 8rem)",
        }}
      />

      {/* Right vertical line - perfectly centered with more spacing */}
      <div
        className="absolute top-0 h-full bg-[#F7F7F7] border-l border-r border-border"
        style={{
          width: "5rem",
          left: "calc(50% + 3rem)",
        }}
      />
    </div>
  );
}
