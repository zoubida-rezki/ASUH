import Image from "next/image"

export default function Join() {
    return (<>
    <h1>Become a Member</h1>
    <p>
            You can join our society in person at the UH Observatory on most Friday’s from 11 AM – 4 PM . Contact our Treasurer at asuh@nsm.uh.edu to arrange a specific time to meet or online via PayPal or Venmo. The fee for the 2020/2021 academic year is $20. This will cover membership through August 23rd, 2021 (which includes all of our summer activities). You may also join for a semester for $15. 

            Members of ASUH receive some extraordinary benefits including, but not limited to:
    </p>
    <ul>

        <li>Access to all levels of our Astronomy Workshops. </li>
        <li>Learn to use professional astronomer equipment including software, high power telescopes and binoculars, cameras and other tools of the trade.</li>
        <li>Private invitation to viewing events in the Observatory and at other dark sites. </li>
        <li>Learning from experienced amateur and professional astronomers.</li>
    </ul>
    <h1>Join ASUH</h1>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="CY6R5XQ35WXZ2"/>
                <table>
                    <tr>
                        <td>
                            <input type="hidden" name="on0" value="ASUH Membership Dues 2020-2021"/>ASUH Membership Dues Fall 2020-2021
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select name="os0">
                                <option value="Year">Year $21 USD</option>
                                <option value="Semester">Semester $15.76 USD</option>
                            </select> 
                        </td>
                    </tr>
                </table>
                <input type="hidden" name="currency_code" value="USD"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <Image alt="Donate" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></Image>
        </form>

            <p>Our Venmo is @AstronomySociety</p>
            

           
        </>)
}