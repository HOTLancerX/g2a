// components/Title.tsx
import React from 'react';

interface TitleProps {
  title: string;
  sub: string;
}

const Textarea: React.FC<TitleProps> = ({ title, sub }) => {
  return (
    <div className="mb-4 flex items-center flex-col md:flex-row">
      {title &&
        <h1 className="text-xs font-semibold mb-2 w-full md:w-1/5">
            {title}
        </h1>
      }
      <input
        type='text'
        className="w-full md:w-4/5 p-2 max-w-md text-xs border outline-none rounded-md"
        placeholder={sub}
      />
    </div>
  );
};

export default Textarea;