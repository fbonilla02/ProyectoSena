"use client";
import { registerUser } from "@/actions/auth/register";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../../actions/auth/login";

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setErrorMessage("");
    const { username, email, password } = data;
    const resp = await registerUser(username, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }
    console.log("salio bien");

    await login(email.toLowerCase(), password);
    window.location.replace("/dashboard");
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full">
        <label>Apodo</label>

        <input
          {...register("username", {
            required: "este campo es requerido",
          })}
          type="username"
          placeholder="juan perez"
          className={clsx("input input-bordered border w-full font-dmSans", {
            "border-red-500": errors.username,
          })}
        />

        <label>Correo</label>

        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="juanperez@gmail.com"
          className={clsx("input input-bordered border w-full font-dmSans", {
            "border-red-500": errors.email,
          })}
        />
        <label>Contraseña</label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="*************"
          className={clsx("input input-bordered border w-full", {
            "border-red-500": errors.email,
          })}
        />
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
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
