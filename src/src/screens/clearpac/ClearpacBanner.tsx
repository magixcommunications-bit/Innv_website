// import MainImg from 'assets/clearpac/HeartLine.png'
import Logo from 'assets/clearpac/Mainclearpaclogo.png'
import MainImg3 from 'assets/clearpac/MainHeartLine-768.png'
import MainImg2 from 'assets/clearpac/MainHeartLine.png'
import useWidth from 'hooks/useWidth'
import MainImg from 'assets/clearpac/MainHeartLine-1280.png'

export default function ClearpacBanner() {
  const width = useWidth()
  return (
    // <div className="relative min-h-screen gap-10 bg-gradient-to-r from-[#194b8f] to-[#8a97bf] ">
    <div className="relative sm:min-h-screen gap-10 lg:bg-[url('assets/clearpac/Bgclearpac.png')] bg-center bg-cover w-full h-full bg-no-repeat">
      {/* <img
        src={width >= 1025 ? MainImg : MainImg2}
        alt=""
        className="absolute sm:top-44 md:top-32 lg:inset-0 object-cover object-center w-full lg:h-[810px] xl:h-[820px] 2xl:h-[890px] gsap-scale"
      /> */}
      {/* {width >= 768 ? (
        <img
          src={width >= 1025 ? MainImg : MainImg2}
          alt=""
          className="absolute sm:top-44 md:top-32 lg:inset-0 object-cover object-center w-full lg:h-[810px] xl:h-[820px] 2xl:h-[890px] gsap-scale"
        />
      ) : (
        <img
          src={MainImg2}
          alt=""
          className="absolute object-contain w-full h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-[47%] gsap-scale"
        />
      )} */}

      {width >= 1024 && (
        <img
          src={width >= 1025 ? MainImg : MainImg2}
          alt=""
          className="absolute sm:top-44 md:top-32 lg:inset-0 object-cover object-center w-full lg:h-[810px] xl:h-[820px] 2xl:h-[890px] gsap-scale"
        />
      )}

      <div className="flex flex-col w-full h-[600px] sm:h-screen">
        <div className="flex items-center justify-center lg:justify-end flex-1 lg:pr-[100px] xl:pr-[160px] 2xl:pr-[330px] bg-gradient-to-r from-[#1d4c90] to-[#a6aacc] lg:bg-none lg:flex-row flex-col sm:pt-[140px] md:pt-[155px] lg:pt-0 pt-[100px]">
          <span className="text-2xl sm:text-3xl font-bold text-white lg:text-[40px] xl:text-4xl gsap-opacity-trans-appear-top">
            Optimised Drug Delivery,
            <br /> Maximising Impact
          </span>
          {width < 1024 && (
            <div className="w-full h-full">
              <img src={MainImg3} alt="" className="w-full h-full gsap-scale" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center lg:justify-end flex-1 lg:pr-[100px] xl:pr-[110px] 2xl:pr-[260px]">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
            <img
              src={Logo}
              alt=""
              className="w-full h-full gsap-opacity-trans-appear"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
