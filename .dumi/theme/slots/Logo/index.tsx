import { Link, useLocale, useSiteData } from 'dumi';
import React, { type FC } from 'react';
import './index.less';

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  return (
    <Link
      className="dumi-default-logo"
      to={'base' in locale ? locale.base : '/'}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = e.currentTarget.href;
      }}
    >
      {themeConfig.logo !== false && (
        <img
          src={themeConfig.logo}
          alt={themeConfig.name}
        />
      )}
      {themeConfig.name}
    </Link>
  );
};

export default Logo;
