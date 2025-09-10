import { useState } from "react";
import Logo from "/assets/logo.svg";

interface INav {
  name: string;
  path: string;
}

const nav: INav[] = [
  {
    name: "მართლმწერი",
    path: "/assets/icon-check.svg",
  },
  {
    name: "ტექსტის შედარება",
    path: "/assets/icon-compare.svg",
  },
  {
    name: "ხმა -> ტექსტი",
    path: "/assets/icon-mic.svg",
  },
  {
    name: "ტექსტი -> ხმა",
    path: "/assets/icon-sound.svg",
  },
  {
    name: "PDF კონვერტაცია",
    path: "/assets/icon-pdf.svg",
  },
];

export default function Sidebar() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  return (
    <>
      <aside className="hidden w-[280px] bg-[#132450] pt-[12px]  xl:flex flex-col justify-between">
        <div className="flex flex-col gap-10 pl-[12.8px]">
          <div>
            <button className="w-full flex justify-end p-5">
              <img
                src="/assets/icon-arrows-left.svg"
                alt="arrows icon"
                className="cursor-pointer"
              />
            </button>
            <div className="flex items-center gap-5">
              <img src={Logo} className="w-[42px]" alt="logo icon" />
              <span className="text-white font-semibold text-[13px]">
                ENAGRAM
              </span>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => {
                const isActive = currentIndex === i;

                return (
                  <li
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`navs flex items-center gap-3 text-${
                      isActive ? "[#132450]" : "white"
                    } text-[14px] bg-${
                      isActive ? "white" : "transparent"
                    } py-[24px] pl-[11.2px] rounded-[100px] ${
                      !isActive ? "hover:bg-[#ffffff26]" : ""
                    } rounded-tr-[0px] rounded-br-[0px] cursor-pointer transition-[0.2s] font-semibold`}>
                    <img
                      src={item.path}
                      className={`brightness-${
                        isActive ? "0" : "100"
                      } transition-[0.2s]`}
                      alt={`${item.name} route icon`}
                    />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <section className="flex items-center justify-between px-[14px] py-[20px] border-t-1 border-[#9EB9FF33]">
          <div className="flex items-center gap-2">
            <div className="p-3 rounded-[50%] w-[20px] h-[20px] bg-[#9EC8FF] flex items-center justify-center">
              ც
            </div>
            <span className="text-white text-[14px]">ცოტნე ცინცაძე</span>
          </div>
          <img src="/assets/icon-dots.svg" alt="profile menu" />
        </section>
      </aside>
    </>
  );
}
