export function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-pulse" />
        <div className="absolute top-[30%] right-[5%] h-[400px] w-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse animation-delay-3000" />
        <div className="absolute bottom-[5%] left-[20%] h-[300px] w-[300px] rounded-full bg-teal-500/20 blur-3xl animate-pulse animation-delay-6000" />
      </div>
    </div>
  );
}
