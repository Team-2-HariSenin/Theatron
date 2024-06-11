import React from "react";

const NextButton = () => {
  return (
    <div className="absolute right-0 top-1/4 z-40 rounded border border-white px-3 py-5 align-baseline text-2xl leading-[0]">
      <svg
        className="h-[1em] w-[1em] overflow-hidden fill-white align-baseline text-2xl leading-[0] tracking-[0.3125em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="presentation"
      >
        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
      </svg>
    </div>
  );
};

export default NextButton;
