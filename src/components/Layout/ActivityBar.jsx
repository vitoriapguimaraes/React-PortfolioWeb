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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.22 2H11.78L10.702 4.144C10.026 4.382 9.388 4.71 8.81 5.124L6.556 4.332L6.166 4.558L4.558 7.34L4.332 7.73L6.036 9.538C5.976 9.896 5.922 10.258 5.894 10.626L3.52 10.966L3.308 11.332L2.532 14.23L2.744 14.596L5.118 14.936C5.176 15.304 5.258 15.666 5.346 16.024L3.642 17.832L3.868 18.222L5.476 21.004L5.866 21.23L8.12 20.438C8.694 20.852 9.332 21.18 10.008 21.418L11.086 23.562H11.53H12.47H12.914L13.992 21.418C14.668 21.18 15.306 20.852 15.88 20.438L18.134 21.23L18.524 21.004L20.132 18.222L20.358 17.832L18.654 16.024C18.742 15.666 18.824 15.304 18.882 14.936L21.256 14.596L21.468 14.23L20.692 11.332L20.48 10.966L18.106 10.626C18.078 10.258 18.024 9.896 17.964 9.538L19.668 7.73L19.442 7.34L17.834 4.558L17.444 4.332L15.19 5.124C14.612 4.71 13.974 4.382 13.298 4.144L12.22 2ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ActivityBar;
