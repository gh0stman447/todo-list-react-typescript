import React, { FC } from 'react';

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return <div className='text-[100px] font-thin text-[#e9d9d8]'>{title}</div>;
};

export default Heading;
