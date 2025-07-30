import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RegisterForm } from "./ui/RegisterForm";

const RegisterPage = () => {
  return (
    <div
      className="flex flex-col py-[54px] w-full items-center h-[90vh]
    justify-center"
    >
      <div className="w-3/5">
        <div className="text-center py-10 gap-2 flex flex-col">
          <h5>REGISTRATE</h5>
          <p className="">Escribe tu correo y contraseña para continuar</p>
        </div>
        <RegisterForm />
      </div>

      <div className="py-5 flex gap-2">
        <p>ya tienes cuenta ?</p>{" "}
        <Link className="font-bold" href="/login">
          Inicia sesion
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
