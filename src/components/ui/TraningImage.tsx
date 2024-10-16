import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  name: string;
  image: string;
  activity: string;
}

export const TrainingImage = ({ name, image, activity }: Props) => {
  return (
    <Link
      className="flex relative w-full"
      href={`/ejercicios/${name.toLowerCase()}`}
    >
      <Image
        // className="rounded-3xl h-[450px]   object-cover object-[center_15%]  "
        style={{
          width: "100%",
          // height: "450px",
          height: "auto",
          minHeight: "200px",
          maxHeight: "450px",
          objectFit: "cover",
          objectPosition: "center 15%",
          borderRadius: "30px",
        }}
        src={`/${image}`}
        alt={activity}
        height={450}
        width={500}
        unoptimized
      />
      <div className="absolute bottom-4 px-2  flex items-center justify-between w-full">
        <h3 className="text-colorWhite">{name}</h3>
        <FaArrowRightLong
          color="white"
          className=" h-10 w-10 lg:h-32 lg:w-32"
        />
      </div>
    </Link>
  );
};
