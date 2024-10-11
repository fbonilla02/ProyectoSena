import { TrainingImage } from "@/components/ui/TraningImage";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <section className="py-10 lg:py-20 px-8 flex flex-col items-center">
        <h1 className="text-center">
          TRANSFORMA <span className="block"> TU CUERPO </span>
        </h1>
        <div className="py-8 flex flex-col items-center justify-center relative">
          <Image
            className="rounded-3xl"
            src="/hero.jpg"
            alt="persona haciendo estiramientos"
            width={1000}
            height={800}
          />
          <h2 className="text-colorWhite absolute text-center">
            MEJORA <span className="block">TU VIDA</span>
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h4 className="text-center px-2">
          EL EJERCICIO DEBE DE SER
          <span className="lg:block">ACCESIBLE PARA TODOS </span>
        </h4>
        <p className="px-2 lg:px-72 py-5 text-center">
          En un mundo donde el tiempo y los recursos son limitados, creemos que
          llevar un estilo de vida saludable no debería ser un lujo. Nuestra
          aplicación está diseñada para ofrecer planes de ejercicio y nutrición
          adaptados a cualquier nivel de condición física, sin necesidad de
          costosos equipos o membresías.{" "}
        </p>
      </section>
      <section>
        <div className="px-2 py-5">
          <h5 className="">ENTRENAMIENTOS</h5>
          <Link
            href="/entrenamientos"
            className="hidden lg:flex items-center gap-2 text-2xl leading-9 tracking-tight font-bold"
          >
            VER TODOS
            <span className="p-2 rounded-full bg-colorBlack">
              <FaArrowRightLong color="white" />
            </span>
          </Link>
        </div>
        <div className="flex lg:px-8 px-2 flex-col gap-10 items-center">
          <TrainingImage
            image="pecho.jpg"
            activity="mujer haciendo ejercicios de abdominales"
            name="ABDOMINALES"
          />
          <TrainingImage
            image="stretch.jpg"
            activity="Mujer haciendo ejercicios de estiramientos"
            name="ESTIRAMIENTOS"
          />
          <TrainingImage
            image="antebrazo.jpg"
            activity="mujer haciendo ejercicios de antebrazo"
            name="ANTEBRAZO"
          />
          <TrainingImage
            image="yoga.jpg"
            activity="mujer haciendo ejercicios de yoga"
            name="YOGA"
          />
        </div>
        <Link
          href="/entrenamientos"
          className="flex lg:hidden items-center justify-center py-5 gap-2 text-2xl leading-9 tracking-tight font-bold"
        >
          VER TODOS
          <span className="p-2 rounded-full bg-colorBlack">
            <FaArrowRightLong color="white" />
          </span>
        </Link>
      </section>
    </>
  );
}
