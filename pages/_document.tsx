import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Doc extends Document {
  render() {
    return (
      <Html lang="no">
        <Head />
        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  var _paq = _paq || [];
                  _paq.push(["disableCookies"]);
                  _paq.push(["trackPageView"]);
                  _paq.push(["enableLinkTracking"]);
                  (function() {
                    var u = "https://variant.innocraft.cloud/";
                    _paq.push(["setTrackerUrl", u + "piwik.php"]);
                    _paq.push(["setSiteId", "1"]);
                    var d = document,
                      g = d.createElement("script"),
                      s = d.getElementsByTagName("script")[0];
                    g.type = "text/javascript";
                    g.async = true;
                    g.defer = true;
                    g.src = u + "piwik.js";
                    s.parentNode.insertBefore(g, s);
                  })();`,
            }}
          />
        </body>
      </Html>
    );
  }
}
