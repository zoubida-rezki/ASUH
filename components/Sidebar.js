import Image from 'next/image';
import Link from 'next/link';
export {Sidebar};

function Sidebar() {
  return (
    <>
      <div>
        <h1>Connect with ASUH</h1>
        <h3>Email: (email: astronomysocietyuh@gmail.com)</h3>
        <br />
        <ul>
          <li>
            <a href="https://www.facebook.com/AstroSocietyUH/" target="_blank" style={{ marginRight: '5px' }}>
              <Image src="/public/icons8-facebook-32.svg" alt="Facebook" width={32} height={32} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AstroSocietyUH/" target="_blank" style={{ marginRight: '5px' }}>
              <Image src="/public/twitter-circled.svg" alt="Twitter"  width={32} height={32}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/astrosocietyuh/?hl=en" target="_blank" style={{ marginRight: '1px' }}>
              <Image src="/public/circle_instagram_icon.svg" alt="Instagram"  width={32} height={32}/>
            </a>
          </li>
        </ul>

        <br />
        <a className="popup-yes" href="http://sps.phys.uh.edu/">
          CollegiateLink - Society of Physics Students University of Houston Chapter
        </a>
        <br />
        <h3>Mailing Address</h3>
        <p>
          The Astronomy Society at University of Houston
          <br />
          University of Houston
          <br />
          4465 University Drive
          <br />
          Commons Desk Mailbox # 578
          <br />
          Houston, TX 77204
        </p>

        <a className="popup-yes" href="http://asuh.phys.uh.edu/news-and-events/">
          NEWS & EVENTS
        </a>
      </div>
    </>
  );
}


