export default function Logo({ ukuran = 26 }: { ukuran?: number }) {
  return (
    <svg
      width={ukuran}
      height={ukuran}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Berlian primogem: identitas kecil yang mengikat semua halaman */}
      <path
        d="M16 2 L27 12 L16 30 L5 12 Z"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(233, 196, 106, 0.12)"
      />
      <path
        d="M16 4.5 V29 M7 12 H25"
        stroke="var(--gold)"
        strokeWidth="1"
        opacity="0.45"
      />
    </svg>
  );
}
