import React, { useEffect } from 'react';

const Adsense: React.FC<any> = (props) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({
        'enable_page_level_ads': true,
      });
    } catch (error) {
      console.info('谷歌广告被屏蔽了');
    }
  }, []);

  return (
    <>
      <div style={{ width: "100%", margin: "16px 0"}}>
        <center>
          <ins {...props} />
        </center>
      </div>
    </>
  );
}

export default Adsense
