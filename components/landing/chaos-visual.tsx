"use client";

export function ChaosVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] select-none pointer-events-none">
      {/* Scattered tool cards */}
      <div className="absolute top-4 left-4 w-28 h-20 rounded-lg bg-white border border-red-200 shadow-sm rotate-[-6deg] p-2">
        <div className="h-2 w-12 rounded bg-red-200 mb-1.5" />
        <div className="h-1.5 w-20 rounded bg-muted" />
        <div className="h-1.5 w-16 rounded bg-muted mt-1" />
        <div className="absolute -top-2 -right-2 size-5 rounded-full bg-red-500 flex items-center justify-center text-[8px] font-bold text-white">5</div>
      </div>

      <div className="absolute top-2 right-8 w-32 h-16 rounded-lg bg-white border border-orange-200 shadow-sm rotate-[4deg] p-2">
        <div className="h-2 w-10 rounded bg-orange-200 mb-1.5" />
        <div className="h-1.5 w-24 rounded bg-muted" />
        <div className="absolute -top-2 -right-2 size-5 rounded-full bg-orange-500 flex items-center justify-center text-[8px] font-bold text-white">12</div>
      </div>

      <div className="absolute top-24 left-12 w-24 h-24 rounded-lg bg-white border border-yellow-200 shadow-sm rotate-[3deg] p-2">
        <div className="h-2 w-8 rounded bg-yellow-300 mb-2" />
        <div className="grid grid-cols-3 gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-3 rounded bg-muted" />
          ))}
        </div>
      </div>

      <div className="absolute top-20 right-4 w-28 h-20 rounded-lg bg-white border border-blue-200 shadow-sm rotate-[-3deg] p-2">
        <div className="h-2 w-14 rounded bg-blue-200 mb-1.5" />
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-muted" />
          <div className="h-1.5 w-3/4 rounded bg-muted" />
          <div className="h-1.5 w-full rounded bg-muted" />
        </div>
      </div>

      {/* Email thread card */}
      <div className="absolute bottom-8 left-8 w-36 h-20 rounded-lg bg-white border border-red-200 shadow-sm rotate-[2deg] p-2">
        <div className="flex items-center gap-1 mb-1.5">
          <div className="size-3 rounded-full bg-muted" />
          <div className="h-1.5 w-12 rounded bg-muted" />
          <div className="text-[6px] text-red-400 ml-auto">14 CC</div>
        </div>
        <div className="h-1.5 w-full rounded bg-muted" />
        <div className="h-1.5 w-2/3 rounded bg-muted mt-1" />
        <div className="absolute -top-2 -left-2 size-5 rounded-full bg-red-500 flex items-center justify-center text-[8px] font-bold text-white">!</div>
      </div>

      {/* Missed deadline card */}
      <div className="absolute bottom-4 right-6 w-28 h-16 rounded-lg bg-red-50 border border-red-200 shadow-sm rotate-[-4deg] p-2">
        <div className="h-2 w-16 rounded bg-red-300 mb-1" />
        <div className="text-[7px] text-red-500 font-medium">OVERDUE: 3 days</div>
        <div className="h-1.5 w-20 rounded bg-muted mt-1" />
      </div>

      {/* Decorative connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <line x1="30%" y1="20%" x2="70%" y2="15%" stroke="#fecaca" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="40%" y1="50%" x2="75%" y2="40%" stroke="#fecaca" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="70%" x2="60%" y2="80%" stroke="#fecaca" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
