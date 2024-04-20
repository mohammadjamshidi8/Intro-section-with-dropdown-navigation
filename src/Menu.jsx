export default function Menu() {
  return (
    <>
      <div className="w-full flex justify-between items-center mt-6 px-3 lg:px-8 bg-rose-300">
        <div className="flex items-center gap-x-10">
          <div>
            <img src="./public/images/logo.svg" alt="" />
          </div>
          <ul className="hidden lg:flex items-center gap-x-10 capitalize">
            <li className="relative group transition-all duration-300">
              <a href="#" className="flex items-center gap-x-1">
                <span className="group-hover:font-bold">features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mt-1 group-hover:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <ul className="invisible opacity-0 absolute top-8 w-max group-hover:visible flex group-hover:opacity-100  flex-col gap-y-4 bg-white px-8 rounded-md py-4 transition-all shadow-lg">
                <li>
                    <a href="#" className="flex items-center gap-x-4">
                    <img src="./public/images/icon-todo.svg" alt="" />
                    <span className="capitalize">todo list</span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex items-center gap-x-4">
                    <img src="./public/images/icon-calendar.svg" alt="" />
                    <span className="capitalize">calendar</span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex items-center gap-x-4">
                    <img src="./public/images/icon-reminders.svg" alt="" />
                    <span className="capitalize">reminders</span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex items-center gap-x-4">
                    <img src="./public/images/icon-planning.svg" alt="" />
                    <span className="capitalize">planning</span>
                    </a>
                </li>
              </ul>
            </li>
            <li className="relative group transition-all duration-300">
              <a href="#" className="flex items-center gap-x-1">
                <span className="group-hover:font-bold">company</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mt-1 group-hover:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <ul className="invisible opacity-0 absolute top-8 w-max group-hover:visible flex group-hover:opacity-100  flex-col gap-y-4 bg-white pl-3 pr-5 rounded-md py-4 transition-all shadow-lg">
                <li>
                    <a href="#" className="flex items-center gap-x-4">
                    <span className="capitalize">history</span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex items-center gap-x-4">
                    <span className="capitalize">our team</span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex items-center gap-x-4">
                    <span className="capitalize">blog</span>
                    </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src="./public/images/icon-menu.svg"
            className="lg:hidden"
            alt=""
          />
          <button className="hidden lg:block capitalize">login</button>
          <button className="hidden lg:flex capitalize  justify-center items-center border-[1px] rounded-md px-6 py-2 border-mediumGrey">
            register
          </button>
        </div>
      </div>
    </>
  );
}
