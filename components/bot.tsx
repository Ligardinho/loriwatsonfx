import Script from 'next/script';

const BotpressWebchat = () => {
  return (
    <>
      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" strategy="beforeInteractive" defer/>
      <Script strategy="afterInteractive">
        {`
          window.botpressWebChat.init({
            "composerPlaceholder": "Say \\"hi\\" to Violet",
            "botConversationDescription": "Watson FX Assistant",
            "botId": "d89bd043-3b41-4f9f-a624-90eac25216c4",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "d89bd043-3b41-4f9f-a624-90eac25216c4",
            "webhookId": "184fec3e-6c3a-4ffb-9f0e-5c8c0efb93ef",
            "lazySocket": true,
            "themeName": "prism",
            "botName": "Violet",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/cea87597-031b-4890-b421-dfc4b40beea1/v3019/style.css",
            "frontendVersion": "v1",
            "useSessionStorage": true,
            "theme": "prism",
            "themeColor": "#2563eb",
          });
        `}
      </Script>
    </>
  );
};

export default BotpressWebchat;
