export const NavBar = () => {
  return (
    <div
      className="
        h-[8rem]
        bg-black-200
        w-full py-10 bg-[url('assets/icons/background-stars-dark.svg')]"
    >
      <nav
        className="w-[90%] lg:w-[1000px] xl:w-[1200px]
          m-auto flex flex-col justify-center items-center"
      >
        <span className="text-md md:text-lg text-white-100 tracking-widest opacity-75 font-bold">
          Memory Game
        </span>
      </nav>
    </div>
  );
};
