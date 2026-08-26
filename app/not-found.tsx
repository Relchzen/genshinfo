import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 text-center">
      <Logo ukuran={44} />
      <p className="label-kecil">Kesasar di Teyvat</p>
      <h1 className="text-5xl font-extrabold tracking-tight">404</h1>
      <p className="max-w-sm text-sm leading-relaxed text-mute">
        Halaman yang kamu cari tidak ada, mungkin sudah dipindah ke dimensi lain.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-[#0a0e1a] transition-transform duration-200 hover:-translate-y-0.5"
      >
        Kembali ke Home
      </Link>
    </section>
  );
}
