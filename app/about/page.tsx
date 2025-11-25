import Image from "next/image";
import aboutImg from "../../public/hero-bg.png";

const page = () => {
  return (
    <div className="py-5 md:flex md:flex-col md:gap-20 md:justify-center md:items-center">
      <div className="md:flex">
        <div className="px-5 flex-1 md:max-w-xl">
          <Image src={aboutImg} alt="about image" className="rounded-xs" />
        </div>
        <div className="flex flex-col gap-5 p-5 flex-1 md:max-w-xl">
          <h5 className="text-[14px]">ABOUT PRINTFORGE</h5>
          <h1 className="text-[40px] font-bold">Empowering makers worldwide</h1>
          <p className="text-xl">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing. <br />
            <br />
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </div>
      <hr />
      <div className="p-5 flex flex-col gap-12 md:max-w-[80%] md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[28px] font-bold">100K+ Models</h1>
          <p className="text-xl">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-5 ">
          <h1 className="text-[28px] font-bold">Active Community</h1>
          <p className="text-xl">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-5 ">
          <h1 className="text-[28px] font-bold">Free to Use</h1>
          <p className="text-xl">
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </div>
      </div>
      <hr />
      <div className="p-5 md:flex md:justify-center">
        <div className="flex flex-col gap-5 md:max-w-4xl">
          <h1 className="text-[40px] font-bold">Our vision</h1>
          <p className="text-2xl">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what &apos;s
            possible with 3D printing.
          </p>
          <div className="p-5">
            <hr />
          </div>
          <p className="text-2xl">
            Whether you&apos;re a hobbyist looking for your next weekend
            project, an educator seeking teaching materials, or a professional
            designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey in 3D printing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
