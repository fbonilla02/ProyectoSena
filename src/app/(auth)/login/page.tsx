import Link from "next/link";
import React from "react";
import { LoginForm } from "./ui/LoginForm";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col py-[54px] w-full items-center h-[90vh]
    justify-center"
    >
      <div className="w-3/5">
        <div className="text-center py-10 gap-2 flex flex-col">
          <h5>INICIAR SESION</h5>
          <p className="">Escribe tu correo y contraseña para continuar</p>
        </div>
        <LoginForm />
      </div>
      <div className="py-5 flex gap-2">
        <p>¿No tienes cuenta? </p>{" "}
        <Link className="font-bold" href="/register">
          Registrate
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
