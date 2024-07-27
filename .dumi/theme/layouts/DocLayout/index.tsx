// @ts-nocheck
import { ReactComponent as IconSidebar } from '@ant-design/icons-svg/inline-svg/outlined/align-left.svg';
import animateScrollTo from 'animated-scroll-to';
import {
  Helmet,
  useIntl,
  useLocation,
  useOutlet,
  useRouteMeta,
  useSidebarData,
  useSiteData,
} from 'dumi';
import Content from 'dumi/theme-default/slots/Content';
import ContentFooter from 'dumi/theme-default/slots/ContentFooter';
import Features from 'dumi/theme-default/slots/Features';
import Footer from 'dumi/theme-default/slots/Footer';
import Header from 'dumi/theme-default/slots/Header';
import Hero from 'dumi/theme-default/slots/Hero';
import Sidebar from '../../slots/Sidebar';
import Adsense from '../../slots/Adsense';
import Toc from 'dumi/theme-default/slots/Toc';
import React, { useEffect, useState, type FC } from 'react';
import './index.less';

const DocLayout: FC = () => {
  const intl = useIntl();
  const outlet = useOutlet();
  const sidebar = useSidebarData();
  const { hash, pathname } = useLocation();
  const { loading, hostname } = useSiteData();
  const [activateSidebar, updateActivateSidebar] = useState(false);
  const { frontmatter: fm } = useRouteMeta();

  const showSidebar = fm.sidebar !== false && sidebar?.length > 0;

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300,
          });
        }
      }, 1);
    }
  }, [loading, hash]);

  return (
    <div
      className="dumi-default-doc-layout"
      data-mobile-sidebar-active={activateSidebar || undefined}
      onClick={() => updateActivateSidebar(false)}
    >
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {fm.title && <title>{fm.title} - React Flow</title>}
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && (
          <meta property="og:description" content={fm.description} />
        )}
        {fm.keywords &&
          fm.keywords.map((keyword) => (
            <meta key={keyword} property="article:tag" content={keyword}></meta>
          ))}
        {hostname && <link rel="canonical" href={hostname + pathname} />}
      </Helmet>
      <Header />
      <Hero />
      <Features />
      {showSidebar && (
        <div className="dumi-default-doc-layout-mobile-bar">
          <button
            type="button"
            className="dumi-default-sidebar-btn"
            onClick={(ev) => {
              ev.stopPropagation();
              updateActivateSidebar((v) => !v);
            }}
          >
            <IconSidebar />
            {intl.formatMessage({ id: 'layout.sidebar.btn' })}
          </button>
        </div>
      )}
      <main>
        {showSidebar && <Sidebar />}
        <div style={{flex: 1}}>
          <Content>
            <article>
              {outlet}
            </article>
            <ContentFooter />
            <Footer />
          </Content>
          <Adsense
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5641491107630454"
            data-ad-slot="5596588097"
            data-page-url="https://nablepart.com"
            data-override-format="true"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
        {fm.toc === 'content' && (
          <div className="dumi-default-doc-layout-toc-wrapper">
            <script async type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=kvgeYP8qIu8lbwRcPtpsgFsJddybCkmKoAYKFHF6JY8"></script>
            <h4>TABLE OF CONTENTS</h4>
            <Toc />
          </div>
        )}
      </main>
    </div>
  );
};

export default DocLayout;
