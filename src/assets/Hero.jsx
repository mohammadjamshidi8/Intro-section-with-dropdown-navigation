export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:flex-row-reverse lg:items-start items-center gap-y-10 lg:gap-x-10 h-[90vh] lg:h-max lg:mx-40">
        <div className="bg-mobile lg:bg-desktop w-full lg:w-1/2 bg-cover h-[290px] lg:h-[800px] lg:bg-contain lg:aspect-square object-contain bg-no-repeat mt-4 bg-center mx-1"></div>

        <div className="flex flex-col gap-y-10 items-center lg:h-[84vh] lg:justify-between">
          <div className="w-11/12 flex flex-col gap-y-6 items-center lg:items-start lg:justify-around lg:h-full lg:py-40">
            <h1 className="text-3xl lg:text-8xl capitalize font-bold tracking-wide">
              Make remote work
            </h1>
            <span className="w-11/12 text-center lg:text-start line-clamp-3 text-lg lg:text-2xl">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </span>
            <button className="capitalize bg-almostgray text-white px-8 py-3 rounded-lg font-bold hover:bg-transparent hover:text-black hover:border-black hover:border-[1px] transition-all duration-200">
              learn more
            </button>
          </div>

          <div className="flex gap-x-3 lg:gap-x-14 w-11/12">
            <img
              src="./public/images/client-databiz.svg"
              className="aspect-video object-contain w-1/4"
              alt=""
            />
            <img
              src="./public/images/client-audiophile.svg"
              className="aspect-video object-contain w-1/4"
              alt=""
            />
            <img
              src="./public/images/client-meet.svg"
              className="aspect-video object-contain w-1/4"
              alt=""
            />
            <img
              src="./public/images/client-maker.svg"
              className="aspect-video object-contain w-1/4"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
