import Link from 'next/link';
import Image from 'next/image';
export {Sidebar};

function Sidebar() {
  return (
    <>
      {/* <div className='w-1/5 pl-16'> */}
      <div className='w-1/5 pl-16'>
        <h1>Connect with ASUH</h1>
        <h3>Email:<Link href="astronomysocietyuh@gmail.com" > astronomysocietyuh@gmail.com</Link></h3>
        <br />
        <ul className='grid grid-rows-1  grid-flow-col start'>
          <li>
            <Link href="https://www.facebook.com/AstroSocietyUH/" target="_blank" style={{ marginRight: '5px' }}>
              <Image src="/facebook.svg" alt="Facebook" width={32} height={32} loading="lazy"/>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/AstroSocietyUH/" target="_blank" style={{ marginRight: '5px' }}>
              <Image src="/twitter-circled.svg" alt="Twitter"  width={32} height={32}/>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/astrosocietyuh/?hl=en" target="_blank" style={{ marginRight: '1px' }}>
              <Image src="/circle_instagram_icon.svg" alt="Instagram" width={32} height={32} />
            </Link>
          </li>
        </ul>

        <br />
        <Link className="underline" href="/News">
          CollegiateLink - Society of Physics Students University of Houston Chapter
        </Link>
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

        <Link className="popup-yes" href="http://asuh.phys.uh.edu/news-and-events/">
          NEWS & EVENTS
        </Link>
      </div>
    </>
  );
}


