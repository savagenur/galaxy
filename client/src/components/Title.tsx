import React from "react";
interface TitleProps {
  title: string;
  subtitle: string;
}
const Title = ({title,subtitle}:TitleProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-600">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
