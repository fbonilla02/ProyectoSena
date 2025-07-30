import Image from "next/image";
import React from "react";

export const RegisterForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-2 w-full">
        <label>Nombre</label>

        <input
          type="name"
          placeholder="juan perez"
          className="input input-bordered w-full font-dmSans"
        />
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
      {/* <div className="flex justify-between py-2">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />

          <span className=" px-1">Recuerdame</span>
        </label> */}
      {/* <Link href="/register">¿Olvido su contraseña?</Link> */}
      {/* </div> */}

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
          className="btn btn-outline items-center flex gap-2 w-2/5 justify-center border rounded-md
            px-5 py-2"
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
  );
};
