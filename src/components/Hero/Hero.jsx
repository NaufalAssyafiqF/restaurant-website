import HeroImg from "../../assets/1.png"
const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8">
        {/* text section */}
        <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:pt-0 pb-10">
          <h1 className="text-4xl lg:text-5xl font-semibold capitalize">
            Delicious food is waiting for you
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta
            nesciunt officiis nostrum modi culpa, fugiat aut perspiciatis
            doloremque amet.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button className="primary-btn hover:scale-105 duration-200">
              Food Menu
            </button>
            <button className="secondary-btn text-black hover:scale-105 duration-200">
              Book table
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt=""
            className="img-shadow animate-spin-slow w-[400px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero