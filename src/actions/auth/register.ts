"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password),
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    return {
      ok: true,
      user: user,
      message: "Usuario creado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
