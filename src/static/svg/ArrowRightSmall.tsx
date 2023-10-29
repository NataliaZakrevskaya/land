import React from 'react';

interface IProps{
  color: string
}
export const ArrowRightSmall = ({color}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
    >
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="m5.192 13.025 7.949-.02.02-7.564a.53.53 0 0 0-.14-.441.609.609 0 0 0-.881.006.546.546 0 0 0-.133.443l-.025 5.668-7.89-7.51a.599.599 0 0 0-.413-.162.599.599 0 0 0-.413.163.542.542 0 0 0-.17.392c0 .147.06.289.17.393l7.89 7.51-5.955.023a.6.6 0 0 0-.412.164.542.542 0 0 0-.17.394c0 .147.063.288.173.392a.6.6 0 0 0 .413.161l-.013-.012Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M16 0v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
};