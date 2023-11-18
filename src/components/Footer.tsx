export const Footer = () => {
  return (
    <footer
      className="
      h-[8rem]
      bg-black-200
      w-full py-10 bg-[url('assets/icons/background-stars-dark.svg')]"
    >
      <div className="w-[90%] lg:w-[1000px] xl:w-[1200px] m-auto flex items-center justify-between flex-col md:flex-row pb-6 gap-8">
        <a
          className="bg-white-500 py-2 px-8 text-black-200 hover:text-orange-100 transition-all duration-500 underline"
          href="https://www.emekac.com"
          target="_blank"
        >
          {" "}
          Portfolio{" "}
        </a>

        <a
          className="bg-white-500 py-2 px-8 text-black-200 hover:text-orange-100 transition-all duration-500 underline"
          href="https://dryicons.com/free-icons"
          target="_blank"
        >
          {" "}
          Icon by Dryicons{" "}
        </a>
      </div>
    </footer>
  );
};
