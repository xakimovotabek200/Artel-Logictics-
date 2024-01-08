import { useEffect, useState } from "react";
import { PAGES } from "../../constants";
import { changeLang } from "../../redux";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Eng, Rus, Uzb, Globe } from "../../assets";
import { useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const language = useSelector((state) => state.language.lang);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleClickOutsideNav = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideNav);
    return;
  }, []);

  return (
    <div
      ref={navbarRef}
      className="z-50 w-full sticky top-0 px-8 pt-2 pb-4 bg-white/50 backdrop-blur-md shadow "
    >
      {/* nav top section */}
      <div className="w-fit ml-auto flex items-center gap-5 mr-10">
        <div>
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="inline-flex gap-2 items-center font-semibold px-3 text-sm"
          >
            <img
              src={
                language === "uz"
                  ? Uzb
                  : language === "eng"
                    ? Eng
                    : language === "ru"
                      ? Rus
                      : Globe
              }
              className="w-5 aspect-square rounded-full"
            />
            {language === "uz"
              ? "O'zbek"
              : language === "eng"
                ? "English"
                : language === "ru"
                  ? "Russian"
                  : "Languge"}
          </button>
          {isLanguageOpen && (
            <menu
              className="z-10 origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1 grid grid-cols-1 gap-2 px-1" role="none">
                <button
                  onClick={() => {
                    dispatch(changeLang("uz"));
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Uzb} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">O'zbek</span>
                </button>
                <button
                  onClick={() => {
                    dispatch(changeLang("eng"));
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Eng} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">English</span>
                </button>
                <button
                  onClick={() => {
                    dispatch(changeLang("ru"));
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Rus} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">Русский</span>
                </button>
              </div>
            </menu>
          )}
        </div>
        <a
          href="https://maps.app.goo.gl/vZbiBiis2U5dXj5h7"
          target={"_blank"}
          className="inline-flex gap-2 items-center font-semibold px-3 text-sm"
        >
          <span className="fa-solid fa-location-dot text-gray-500" />
          <p>Ohio, US</p>
        </a>
        <a
          href="tel:+19378656660"
          className="inline-flex gap-2 items-center font-semibold px-3 text-sm"
        >
          <span className="fa-solid fa-phone text-gray-500" />
          <p>+1 937-865-6660</p>
        </a>
        <Link
          to="/contact"
          className="inline-flex gap-2 items-center font-semibold px-3 text-sm"
        >
          <span className="fa-solid fa-headset text-gray-500" />
          <p>Support</p>
        </Link>
      </div>
      {/* nav bottom section */}
      <nav className="flex items-center justify-between gap-3">
        <Link to={"/"}>
          <img src="./logo.png" alt="logo" width={180} />
        </Link>
        <ul className="flex items-center gap-1">
          {PAGES.map((page, ind) => (
            <li key={ind}>
              <Link
                to={page.path}
                className={`bg-gray-300 py-2 md:px-5 lg:px-10 text-lg border-r-8 border-primary inline-block -skew-x-[15deg] hover:bg-gray-200 hover:text-black ${pathname === page.path && "bg-secondary text-white"
                  }`}
              >
                <div className="skew-x-[15deg]">{page.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
