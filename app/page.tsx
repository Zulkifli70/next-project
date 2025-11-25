import Image from "next/image";
import heroImg from "../public/hero-image.png";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-start justify-between p-4 h-70 mb-10 flex-1 md:justify-center ">
        <div className="">
          <h1 className="text-4xl mb-4 font-bold">
            Discover what’s possible with 3D printing
          </h1>
          <p className="text-lg">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
        </div>
        <button className="border-2 px-3 py-2">BROWSE MODELS</button>
      </div>
      <div className="flex-1">
        <Image src={heroImg} alt="hero-image" className="w-full max-w-lg md:" />
      </div>
    </main>
  );
}
