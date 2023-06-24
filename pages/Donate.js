import Image from 'next/image';


export default function Donate() {
    return (<>
            <h1>Donate</h1>
            <p>ASUH is grateful for the support it has received from individuals and corporations like you. Your donation will help us raise the money needed to purchase the equipment and tools the Astronomy Society needs to provide meaningful outreach experiences for both the Cougar and the Houston community. Some of the amazing benefits that you would receive with a donation are: 2 or 4 tickets to our End of Year Event,  access to private observatory tours, logos on our website for 6 months, and many more! All our benefits are cumulative. Please see the graphic below for more benefits.
            </p>
                        
            <h3>Donate Now</h3>



            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="BJXD9MH8YQWES"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <Image alt="Donate" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>

            {/* fix this for the future */}
            <Image alt = "Donate "src="http://asuh.phys.uh.edu/content/8-donate/donor-benefits.jpg-2.png" style={{width: '895px', height: "355px", }}/>
                    
        </>)
}