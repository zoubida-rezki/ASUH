import React from 'react';
import Script from 'next/Script'
import Image from 'next/image'

export default function Socials() {
  return (
    <>
      <h1>Keep up with the Astronomy Society by following us on Social Media!</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-push-4 col-md-push-3 main">
            <main>
              <section>
                <div id="fb-root"></div>
              </section>
            </main>
          </div>
          <div className="col-sm-4 col-md-3 col-sm-pull-8 col-md-pull-9 sidebar">
            <small>
              <a
                className="twitter-timeline"
                href="https://twitter.com/AstroSocietyUH"
                data-width="350"
                data-height="600"
              >
                Tweets by Astronomy Society at UH
              </a>
              <Script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></Script>

              <a href="https://www.instagram.com/astrosocietyuh/">
                <Image src="/content/8-asuh-social-media/insta-title.png" alt="" width={500} height={500} />
              </a>

              {/* LightWidget WIDGET */}
              <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script>
              <iframe
                src="//lightwidget.com/widgets/435b423ec49757cd8b22c4de59ed9c3d.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget"
                style={{ width: '100%', border: 0, overflow: 'hidden' }}
              ></iframe>

              <a href="asuh-social-media/snapchat">
                <Image
                  src="/public/snapcode.png"
                  alt="Snapcode"
                  className="right"
                  width={500}
                  height={500}
                />
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
