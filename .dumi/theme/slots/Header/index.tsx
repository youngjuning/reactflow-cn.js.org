import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { useRouteMeta, useSiteData } from 'dumi';
import ColorSwitch from 'dumi/theme-default/slots/ColorSwitch';
import HeaderExtra from 'dumi/theme-default/slots/HeaderExtra';
import LangSwitch from 'dumi/theme-default/slots/LangSwitch';
import Logo from '../Logo';
import Navbar from '../NavBar';
import RtlSwitch from 'dumi/theme-default/slots/RtlSwitch';
import SearchBar from 'dumi/theme-default/slots/SearchBar';
import SocialIcon from 'dumi/theme-default/slots/SocialIcon';
import React, { useMemo, useState, type FC } from 'react';
import './index.less';

export type SocialTypes =
  | 'github'
  | 'weibo'
  | 'twitter'
  | 'x'
  | 'gitlab'
  | 'facebook'
  | 'zhihu'
  | 'yuque'
  | 'linkedin';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  const socialIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({
              icon: key as SocialTypes,
              link: themeConfig.socialLinks[key as SocialTypes],
            }))
        : [],
    [themeConfig.socialLinks],
  );

  return (
    <div
      className="dumi-default-header"
      data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <div className="dumi-default-header-content">
        <section className="dumi-default-header-left">
          <Logo />
        </section>
        <section className="dumi-default-header-right">
          <Navbar />
          <div className="dumi-default-header-right-aside">
            <SearchBar />
            <LangSwitch />
            <RtlSwitch />
            {themeConfig.prefersColor.switch && <ColorSwitch />}
            {socialIcons.map((item) => (
              <SocialIcon icon={item.icon} link={item.link} key={item.link} />
            ))}
            <HeaderExtra />
          </div>
        </section>
        <button
          type="button"
          className="dumi-default-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
