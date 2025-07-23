import { useState, useRef, useEffect } from "react";

const FaqItem = ({ index, title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const plusSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );

  const minusSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  );

  return (
    <div className="border border-[#E2E1E1]">
      <button
        onClick={() => onClick(index)}
        className={`w-full flex justify-between text-left items-center p-5 cursor-pointer font-bold transition-colors duration-300 ${
          isOpen ? "bg-[#F15B25] text-white" : "text-[#001C43]"
        }`}
      >
        <div>{title}</div>
        <div className="transition-all duration-500 ease-in-out">
          {isOpen ? minusSVG : plusSVG}
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="p-5 text-sm text-[#333931] text-justify">{content}</div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title:
        "Is the Master of Business Administration (MBA) Course accredited and is the qualification recognised by the Australian Government?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "What is the difference between full time and part time study?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "How long will the MBA take me?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 space-y-[20px]">
      <h2 className="text-4xl font-bold text-center text-[#001C43] mb-6">
        Frequently ASK{" "}
        <span className="text-[#F15B25] underline">Questions</span>
      </h2>
      {items.map((item, i) => (
        <FaqItem
          key={i}
          index={i}
          title={item.title}
          content={item.content}
          isOpen={openIndex === i}
          onClick={handleToggle}
        />
      ))}
    </div>
  );
};

export default Faq;
