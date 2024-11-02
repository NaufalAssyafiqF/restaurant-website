import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* img section */}
            <div className="flex justify-center items-center">
                <img src={BannerImg} alt="" className=""/>
            </div>
            {/* text section */}
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-semibold">Food is always good</h1>
                <p className="py-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil delectus ullam accusamus velit pariatur voluptas, dicta nesciunt. Illo corrupti, animi, obcaecati assumenda vitae saepe rerum qui quod iusto autem inventore ut rem ex dolores exercitationem sed. Possimus vero autem id!</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
