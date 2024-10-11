import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Link
        href="/"
        className="lg:text-5xl logo-text flex items-center justify-center"
      >
        ACTIVA
      </Link>
      <div>{children}</div>
    </main>
  );
}
