import Reveal from "./Reveal";

// Uniform header for list pages.
export default function PageHeader({
  kicker,
  judul,
  jumlah,
}: {
  kicker: string;
  judul: string;
  jumlah: number;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-8 pt-28 md:pt-36">
      <Reveal>
        <p className="label-kecil mb-2">
          {kicker} · {jumlah} entries
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          {judul}
        </h1>
      </Reveal>
    </header>
  );
}
