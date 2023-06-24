import react from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export {Navbar};

function Navbar() { 


    return( 
        <>
        <nav className=''>

            <div className="">
                <div className="flex flex-row items-center pl-16 ...">
                    <Link href="/"><Image src="/asuh.webp" width={100} height={100} alt='asuh logo'/></Link>
                    <Link href='/' ><h1 className=' text-4xl pr-60'>Astronomy Society at UH  (ASUH)</h1></Link>
                    <div className='flex flex-row items-center text-xs pl-80 ...'>
                        <Link href="http://nsm.uh.edu/" >NSM HOME</Link> <p >⦁</p> <Link href="http://www.uh.edu/" >UH HOME</Link>
                    </div>
                </div>
                <div className=" text-amber-500 ">
                    <ul className="grid grid-rows-2  grid-flow-col gap-4  list-none bg-stone-950 pd-16 pl-16 ">
                        <li className="active"><Link href="/" >Home</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/News">News &amp; Events</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Officers">Officers</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/PastEvents">Past Events</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Resources">Resources</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Donors">Donors</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Donate">Donate</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Socials">ASUH Social Media</Link></li>
                        <li className='hover:bg-amber-500'><Link href="/Join">Become a Member</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


        </>
    )
}