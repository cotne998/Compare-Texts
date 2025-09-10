import { useContext, useState } from "react";
import { MainContext } from "../App";

export default function UpperSection() {
  const [language, setLanguage] = useState("ka");
  const { setText1, setText2, text1, text2 } = useContext(MainContext);

  const handleClick = () => {
    setText1("");
    setText2("");
  };

  return (
    <section className="px-[16px] py-[24px] flex flex-col gap-5 border-b-1 border-[#EDEDED] md:flex-row md:gap-[24px] md:items-center md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-[14px] py-[9px] border-1 border-[#E0E0E0] rounded-[8px] md:w-[155px]"
          id="language"
          value={language}
          name="language">
          <option value="ka">ქართული</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
        <form>
          <label className="flex items-center gap-3">
            <input type="checkbox" name="subscribe" value="yes" />
            ფორმატის შენარჩუნება
          </label>
        </form>
      </div>
      <button
        onClick={handleClick}
        className={`text-[14px] text-white ${
          text1 || text2 ? "bg-[#4571E4]" : "bg-[#383A4899]"
        } flex items-center justify-center py-[9px] gap-[4px] rounded-[6px] cursor-pointer md:px-[12px] ${
          text1 || text2 ? "hover:bg-[#4572e4b2]" : ""
        } transition-[0.2s]`}>
        {" "}
        <img
          src="/assets/icon-add.svg"
          className="w-[24px]"
          alt="add icon"
        />{" "}
        ახლის გახსნა
      </button>
    </section>
  );
}
