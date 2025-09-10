import { useContext, useState, useEffect, type JSX } from "react";
import { diffWords } from "diff";
import { MainContext } from "../App";

export default function Inputs() {
  const { text1, setText1, text2, setText2 } = useContext(MainContext);
  const [result, setResult] = useState<JSX.Element[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!text1 && !text2) {
      setResult([]);
      setShowResult(false);
    }
  }, [text1, text2]);

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();

    const diff = diffWords(text1, text2);

    const formatted = diff.map((part, i) => {
      let style = "";
      if (part.added) style = "bg-[#3EBC5E] text-white";
      else if (part.removed) style = "bg-[#B50022] text-white";

      return (
        <span key={i} className={style}>
          {part.value}
        </span>
      );
    });

    setResult(formatted);
    setShowResult(true);
  };

  const handleResultClick = () => {
    setShowResult(false);
  };

  return (
    <>
      <form
        onSubmit={handleCompare}
        className="flex flex-col gap-[16px] px-[16px] py-[24px] items-center w-full md:gap-[32px]">
        <div className="w-full flex flex-col gap-5 items-center md:flex-row">
          {showResult ? (
            <div
              className="bg-[#F0F7FF] rounded-[8px] p-[12px] resize-none min-h-[190px] w-full md:min-h-[330px] xl:min-h-[432px] cursor-pointer"
              onClick={handleResultClick}
              title="დააჭირე რომ შეცვალო">
              {text1}
            </div>
          ) : (
            <textarea
              placeholder="დაიწყე წერა..."
              className="bg-[#F0F7FF] rounded-[8px] p-[12px] resize-none h-[190px] w-full md:h-[330px] xl:h-[432px]"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            />
          )}
          <img
            src="/assets/icon-arrow.svg"
            className="w-[32px] md:rotate-90"
            alt="arrow icon"
          />
          {showResult ? (
            <div
              className="bg-[#F0F7FF] rounded-[8px] p-[12px] resize-none min-h-[190px] w-full md:min-h-[330px] xl:min-h-[432px] cursor-pointer"
              onClick={handleResultClick}
              title="დააჭირე რომ შეცვალო">
              {result}
            </div>
          ) : (
            <textarea
              placeholder="დაიწყე წერა..."
              className="bg-[#F0F7FF] rounded-[8px] p-[12px] resize-none h-[190px] w-full md:h-[330px] xl:h-[432px]"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
          )}
        </div>
        <button
          type="submit"
          className={`${
            text1 || text2 ? "bg-[#4571E4]" : "bg-[#383A4899]"
          } text-white rounded-[6px] text-[14px] px-[37px] py-[10px] cursor-pointer ${
            text1 || text2 ? "hover:bg-[#4572e4b2]" : ""
          } transition-[0.2s]`}>
          შედარება
        </button>
      </form>
    </>
  );
}
