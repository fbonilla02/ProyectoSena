import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email as string },
    include: { profile: true },
  });

  if (!user?.profile) {
    console.log("si funciona");
  }

  return <div>{children}</div>;
}
