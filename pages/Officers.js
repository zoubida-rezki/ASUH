// forget the slugs we are making this site static to make it easier to host 
import Link from 'next/link'

export default function Officers () {

    return(
        <>
            <h1 className='pd-16 pl-16 text-xl '>Officers</h1>

            <ul className='grid grid-rows-5  grid-col-1 gap-4  list-none pd-16 pl-16 '>
                <li><Link href="/Officers/Gemini">2022-2023 The Gemini Division</Link></li>
                <li><Link href="/Officers/Apollo">2019-2020 The Apollo Division</Link></li>
                <li><Link href="/Officers/Endeavour">2018-2019 The Endeavour Division</Link></li>
                <li><Link href="/Officers/Challenger">2017-2018 The Challenger Division</Link></li>
                <li><Link href="/Officers/DEC">2016-2017 The Discovery Enterprise-Cassini Division</Link></li>
            </ul>
        
        
        </>
    )
}