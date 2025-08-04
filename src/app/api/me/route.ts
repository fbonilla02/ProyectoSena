import { NextResponse } from "next/server";
import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user?.email) return NextResponse.redirect("/login");

  const data = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user)
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );

  const profile = await prisma.userProfile.create({
    data: {
      userId: user.id,
      age: Number(data.age),
      sex: data.sex,
      height_cm: Number(data.height_cm),
      weight_kg: Number(data.weight_kg),
      notes: data.notes || null,
    },
  });

  return NextResponse.json({ profile });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ profile: null });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: true },
  });

  return NextResponse.json({ profile: user?.profile ?? null });
}
