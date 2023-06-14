// Donors need a page link

// forget the slugs we are making this site static to make it easier to host 
import Link from 'next/link'

export default function Officers () {

    return(
        <>
            <h1 className='pd-16 pl-16 text-xl '>Donors</h1>

            <ul className='grid grid-rows-5  grid-col-1 gap-4  list-none pd-16 pl-16 '>
                <li><Link href="/Donors/Endeavour">2018-2019 The Endeavour Division Donors</Link></li>
                <li><Link href="/Donors/Challenger">2017-2018 The Challenger Division Donors</Link></li>
                <li><Link href="/Donors/DEC">2016-2017 The Discovery Enterprise-Cassini Division Donors</Link></li>
            </ul>
        
        </>
    )
}