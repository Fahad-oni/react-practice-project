import banner from '../assets/bg-shadow.png';
import banner_img from '../assets/banner-main.png'

const Banner = () => {
  return (
    <div
      className=" bg-zinc-900 rounded-xl bg-cover bg-center bg-no-repeat text-center container mx-auto  px-8 py-2 my-4 space-y-2"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <img className="h-[40%] w-[20%] mx-auto mt-8 mb-8" src={banner_img} alt="" />
      <div className="text-center">
        <h2 className="text-white font-semibold text-4xl my-3">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[#B1B1B1] my-4">Beyond Boundaries Beyond Limits</p>
        <button className="btn btn-outline btn-warning mt-3 mb-6">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;