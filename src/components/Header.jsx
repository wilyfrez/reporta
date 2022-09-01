import React from 'react';

const Header = ({ category, title, subTitle = '' }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
    {subTitle && <p> {subTitle}</p>}
  </div>
);

export default Header;
