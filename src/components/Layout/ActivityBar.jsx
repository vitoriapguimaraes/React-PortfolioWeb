import React from "react";
import "./ActivityBar.css";

const ActivityBar = () => {
  return (
    <div className="activity-bar">
      <div className="icon active" title="Explorer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 3V21"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="icon" title="Search">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="icon" title="Source Control">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00006 19.9999C7.65691 19.9999 9.00006 18.6568 9.00006 16.9999C9.00006 15.3431 7.65691 13.9999 6.00006 13.9999C4.34321 13.9999 3.00006 15.3431 3.00006 16.9999C3.00006 18.6568 4.34321 19.9999 6.00006 19.9999Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0001 10C19.6569 10 21.0001 8.65685 21.0001 7C21.0001 5.34315 19.6569 4 18.0001 4C16.3432 4 15.0001 5.34315 15.0001 7C15.0001 8.65685 16.3432 10 18.0001 10Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00006 10C7.65691 10 9.00006 8.65685 9.00006 7C9.00006 5.34315 7.65691 4 6.00006 4C4.34321 4 3.00006 5.34315 3.00006 7C3.00006 8.65685 4.34321 10 6.00006 10Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14V10"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7H13C14.1046 7 15 7.89543 15 9V18"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18L18 15"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18L12 15"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="spacer"></div>
      <div className="icon" title="Settings">
        <div className="icon-wrapper bottom-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0-6.5-1 13.5l103 78-110 190-119-50q-11 8-23 15t-24 12l-16 128H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
