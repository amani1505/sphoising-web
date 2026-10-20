/** Slow-moving brand-blue light blobs and film grain behind the whole page. Purely decorative. */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-(--aurora-opacity)">
      <div className="absolute -top-[20vmax] -left-[15vmax] size-[55vmax] rounded-full bg-sky/60 blur-[120px] motion-safe:animate-drift-a" />
      <div className="absolute top-[30vh] -right-[20vmax] size-[50vmax] rounded-full bg-signal/45 blur-[140px] motion-safe:animate-drift-b" />
      <div className="absolute -bottom-[25vmax] left-[20vw] size-[45vmax] rounded-full bg-periwinkle/60 blur-[120px] motion-safe:animate-drift-a" />
      <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
    </div>
  );
}
