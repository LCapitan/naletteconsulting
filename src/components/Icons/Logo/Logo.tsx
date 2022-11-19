import React from "react";
interface LogoProps {
  gradient?: boolean;
}

const Logo = ({ gradient }: LogoProps) => {
  return (
    <>
      {gradient ? (
        <svg
          width="588"
          height="692"
          viewBox="0 0 588 692"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H255.932V87.2924H87.1111L87.1112 423.559L175.311 500.414V175.458H263.536L325.578 263.241L325.578 5.3279e-05H588L588 463.332L347.573 679.432V561.96L500.889 423.559L500.889 87.2924H412.689L412.689 391.07L347.138 448.683L262.422 323.364V692L0.000159505 463.332L0 0Z"
            fill="url(#paint0_linear_8_40)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8_40"
              x1="-913.084"
              y1="280.952"
              x2="15.399"
              y2="1234.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#000F16" />
              <stop offset="0.520833" stop-color="#385FE7" />
              <stop offset="0.713542" stop-color="#45ABFF" />
              <stop offset="1" stop-color="#3FC2FF" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="588"
          height="692"
          viewBox="0 0 588 692"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H255.932V87.2924H87.1111L87.1112 423.559L175.311 500.414V175.458H263.536L325.578 263.241L325.578 5.3279e-05H588L588 463.332L347.573 679.432V561.96L500.889 423.559L500.889 87.2924H412.689L412.689 391.07L347.138 448.683L262.422 323.364V692L0.000159505 463.332L0 0Z"
            fill="#99EDFF"
          />
        </svg>
      )}
    </>
  );
};

export default Logo;
