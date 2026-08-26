import Image from "next/image";

export default function Logo({
  width = 135,
  height = 36,
  ukuran,
  className = "",
}: {
  width?: number;
  height?: number;
  ukuran?: number;
  className?: string;
}) {
  const finalWidth = ukuran ? ukuran * 3.6 : width;
  const finalHeight = ukuran ?? height;

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <Image
        src="/logonew.png"
        alt="Genshinfo Logo"
        width={finalWidth}
        height={finalHeight}
        className="h-auto max-h-9 w-auto object-contain"
        priority
      />
    </div>
  );
}
