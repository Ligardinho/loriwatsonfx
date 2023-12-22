import Script from 'next/script';
import React from 'react';

const YourComponent = () => {
  return (
    <>
      <Script src="https://cdn.voiceflow.com/widget/bundle.mjs" strategy="beforeInteractive" id='chatbots'/>
      <Script strategy="afterInteractive" id='chatbot'>
        {`
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '656de1045061e600072a2e3c' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}
      </Script>
      {/* Your component content */}
    </>
  );
};

export default YourComponent;
