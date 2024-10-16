import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <form className="flex flex-col gap-2 w-full">
          <label>Correo</label>

          <input
            type="email"
            placeholder="juanperez@gmail.com"
            className="input input-bordered w-full font-dmSans"
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="*************"
            className="input input-bordered w-full "
          />
          <button className="btn btn-neutral ">Registrarse</button>
        </form>
        <div className="flex justify-between py-2">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm" />

            <span className=" px-1">Recuerdame</span>
          </label>
          {/* <Link href="/register">¿Olvido su contraseña?</Link> */}
        </div>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            className="btn btn-outline items-center flex gap-2 w-2/5 justify-center border rounded-md
            px-5 py-2"
          >
            <Image
              src="/google.png"
              alt="logo de google"
              height={25}
              width={25}
            />
            <p className="hidden lg:block">Google</p>
          </button>

          <button
            className="btn btn-outline items-center w-2/5 flex justify-center gap-2  
            px-5 py-2 "
          >
            <Image
              src="/facebook.png"
              alt="logo de facebook"
              height={25}
              width={25}
            />
            <p className="hidden lg:block">Facebook</p>
          </button>
        </div>
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
