// const phoneSubMenuWrapper = document.querySelector('#mobile-sub-menu')
// const phoneMenuItem = document.querySelector('#mobile-menu')

// console.log(phoneMenuItem);

// phoneMenuItem.addEventListener('click',() => {
//   console.log('true');
// })

export default function Menu() {
  const firstMobileMenuItem = () => {
    const phoneSubMenuWrapper = document.querySelector("#mobile-sub-menu");
    const arrowIcon = document.querySelector('#arrow-icon')

    phoneSubMenuWrapper.classList.toggle('h-0')
    phoneSubMenuWrapper.classList.toggle('opacity-0')
    arrowIcon.classList.toggle('rotate-180')
  };

  const secondMobileMenuItem = () => {
    const phoneSubMenuWrapper2 = document.querySelector("#mobile-sub-menu-2");
    const arrowIcon2 = document.querySelector('#arrow-icon-2')

    phoneSubMenuWrapper2.classList.toggle('h-0')
    phoneSubMenuWrapper2.classList.toggle('opacity-0')
    arrowIcon2.classList.toggle('rotate-180')
  }

  const closeFunc = (e) => {
    const closeIcon = document.querySelector('#close-icon')
    const mobileMenuContainer = document.querySelector('#mobile-menu-container')

    mobileMenuContainer.classList.toggle('right-[-4000px]')
    mobileMenuContainer.classList.toggle('right-0')
    mobileMenuContainer.classList.toggle('opacity-0')
    
  }

  return (
    <>
      <div className="w-full flex justify-between items-center pt-6 px-3 lg:px-8">
        <div className="flex items-center gap-x-10">
          <div>
            <a href="">
            <img src="./public/images/logo.svg" alt="" />
            </a>
          </div>
          <ul className="hidden lg:flex items-center gap-x-10 capitalize">
            <li className="relative group transition-all duration-300">
              <a href="#" className="flex items-center gap-x-1">
                <span className="group-hover:font-bold">features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mt-1 group-hover:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mt-1 group-hover:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
            <li className="hover:font-bold">
              <a href="#">careers</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">about</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            onClick={closeFunc}
            src="./public/images/icon-menu.svg"
            className="lg:hidden cursor-pointer"
            alt=""
          />
          <button className="hidden lg:block capitalize hover:font-bold transition-all duration-200">login</button>
          <button className="hidden lg:flex capitalize  justify-center items-center border-[1px] rounded-md px-6 py-2 border-mediumGrey hover:border-black hover:border-2 transition-all duration-200">
            register
          </button>
        </div>

        {/* mobile menu start */}
        <div id="mobile-menu-container" className="transition-all duration-300 lg:hidden opacity-0 fixed p-5 top-0 bottom-0 right-[-4000px] w-[55%] h-full bg-white flex flex-col gap-y-14 z-50">
          <div className="w-full flex justify-end">
            <svg
              onClick={closeFunc}
              id="close-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="capitalize">
            <ul className="flex flex-col gap-y-4 pl-5">
              <li onClick={firstMobileMenuItem} >
                <a href="#" className="flex gap-x-1 items-center">
                  <span className="text-2xl">features</span>
                  <svg
                  id="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <ul
                  id="mobile-sub-menu"
                  className="flex flex-col gap-y-3 mt-2 pl-10 overflow-hidden h-0 opacity-0 transition-all duration-500 text-lg"
                >
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <img src="./public/images/icon-todo.svg" alt="" />
                      <span>todo list</span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <img src="./public/images/icon-calendar.svg" alt="" />
                      <span>calendar</span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <img src="./public/images/icon-reminders.svg" alt="" />
                      <span>reminders</span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <img src="./public/images/icon-planning.svg" alt="" />
                      <span>planning</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li onClick={secondMobileMenuItem}>
                <a href="#" className="flex gap-x-1 items-center">
                  <span className="text-2xl">company</span>
                  <svg
                  id="arrow-icon-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <ul
                  id="mobile-sub-menu-2"
                  className="flex flex-col gap-y-3 mt-2 pl-10 overflow-hidden h-0 opacity-0 transition-all duration-500 text-lg"
                >
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <span>history</span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <span>our teams</span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="flex items-center gap-x-3">
                      <span>blog</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li><a className="text-2xl" href="#">Careers</a></li>
              <li><a className="text-2xl" href="#">about</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <button className="w-10/12 text-xl text-center mx-auto py-3 rounded-2xl">Login</button>
            <button className="w-10/12 text-xl text-center mx-auto py-3 rounded-2xl border-[1px] border-mediumGrey">Register</button>
          </div>
        </div>
        {/* mobile menu ends */}

      </div>
    </>
  );
}
