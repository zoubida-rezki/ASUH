import Image from 'next/image'

export default function sidebar() {

    return(
        <>
            <div>
                <h1>Connect with ASUH</h1>
                <h3>Email: (email: astronomysocietyuh@gmail.com)</h1>
                <br>
                <ul>
                    <li><a href="https://www.facebook.com/AstroSocietyUH/" target="_blank" style="margin-right: 5px"><Image src="/content/sidebar/icon-facebook.svg" alt="Facebook" ></a></li>
                    <li><a href="https://twitter.com/AstroSocietyUH/" target="_blank" style="margin-right: 5px"><Image src="/content/sidebar/icon-twitter.svg" alt="Twitter" ></a></li>
                    <li><a href="https://www.instagram.com/astrosocietyuh/?hl=en" target="_blank" style="margin-right: 1px"><Image src="/content/sidebar/instagram-widget.jpg" alt="Instagram"></a></li>
                </ul>

                <br>
                <a className="popup-yes" href="http://sps.phys.uh.edu/">CollegiateLink - Society of Physics Students University of Houston Chapter</a>
                <br>
                <h3>Mailing Address</h3> 
                <p>The Astronomy Society at University of Houston
                University of Houston
                4465 University Drive
                Commons Desk Mailbox # 578
                Houston, TX 77204</p>
                
                <a className="popup-yes" href="http://asuh.phys.uh.edu/news-and-events/">NEWS & EVENTS </a>
            
            </div>
        </>
    )
}
