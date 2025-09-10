import Logo from "/assets/logo.svg";
import Menu from "/assets/icon-menu.svg";

export default function Header() {
  return (
    <header className="bg-[#132450] flex items-center justify-between py-[12px] px-[20px] xl:hidden">
      <div className="flex items-center gap-[9px]">
        <img src={Logo} alt="logo icon" />
        <h4 className="text-white font-bold text-[10px]">ENAGRAM</h4>
      </div>
      <button className="cursor-pointer">
        <img src={Menu} alt="menu icon" />
      </button>
    </header>
  );
}
