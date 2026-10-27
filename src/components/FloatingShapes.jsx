export function FloatingShapes({ variant = "hero" }) {
    if (variant === "section") {
        return (<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-royal/5 blur-3xl animate-float-slow"/>
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange/5 blur-3xl animate-float-delayed"/>
      </div>);
    }
    return (<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-gradient-to-br from-royal/20 to-royal/5 blur-3xl animate-float"/>
      <div className="absolute right-[6%] top-[8%] h-96 w-96 rounded-full bg-gradient-to-br from-orange/20 to-orange/5 blur-3xl animate-float-delayed"/>
      <div className="absolute left-[35%] bottom-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-royal/10 to-orange/10 blur-3xl animate-float-slow"/>

      {/* Floating geometric outlines */}
      <div className="absolute right-[14%] top-[22%] h-16 w-16 rotate-12 rounded-2xl border-2 border-orange/30 animate-float-slow"/>
      <div className="absolute left-[12%] bottom-[18%] h-12 w-12 rounded-full border-2 border-royal/25 animate-float-delayed"/>
      <div className="absolute right-[22%] bottom-[12%] h-10 w-10 rotate-45 border-2 border-royal/20 animate-float"/>
      <div className="absolute left-[45%] top-[10%] h-6 w-6 rounded-full bg-orange/40 animate-pulse-soft"/>
    </div>);
}
