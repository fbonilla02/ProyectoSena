import { auth } from "@/auth.config";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <main>
      <Link
        href="/"
        className="lg:text-5xl logo-text flex items-center justify-center"
      >
        ACTIVA
      </Link>
      <>{children}</>
    </main>
  );
}
