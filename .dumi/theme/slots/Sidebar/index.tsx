import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme-default/slots/Toc';
import Adsense from '../Adsense'
import React, { type FC } from 'react';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link}>
              <NavLink to={child.link} title={child.title} end>
                {child.title}
              </NavLink>
              {child.link === pathname && meta.frontmatter.toc === 'menu' && (
                <Toc />
              )}
            </dd>
          ))}
        </dl>
      ))}
      <Adsense
        className="adsbygoogle"
        style={{display: "block" }}
        // data-ad-client="ca-pub-5641491107630454"
        // data-ad-slot="1206633556"
        // data-page-url="https://www.nablepart.com"
        data-ad-client="ca-pub-4963807055498900"
        data-ad-slot="1249314825"
        data-page-url="http://pantip.com"
        data-override-format="true"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default Sidebar;
