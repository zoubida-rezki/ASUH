import Image from 'next/image'
import Link from 'next/link'

export default function Gemini () {

    return(
        <>
            <h1 className='pd-16 pl-16 text-xl '>Officers</h1>
            <h2>2022-2023 Officers</h2>

            <h1 className='text-4xl'>The Gemini Division</h1>

            <ul className='grid grid-rows-5  grid-col-1 gap-4  list-none pd-16 pl-16 '>
                <li>
                    <div>
                        <Image  alt='Jeseleth'/>
                        <h3>Jeseleth Benavides</h3> <h4>President</h4>
                        <p>Jeseleth aspires to become an astrophysicist one day, contributing to science in the best way she can. She graduates this December and is hoping to work at a small coffee shop before heading to grad school.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Caleb'/>
                        <h3>Caleb Phillips</h3> <h4>Vice President</h4>
                        <p>Caleb is the current Vice President for ASUH. He is a physics major in the teachHouston program who has a passion for teaching and sharing in the wonders of the universe. Currently student teaching calculus and geometry at Spring Woods as the final part of a physics degree, he also does astrophotography. He brings a lot of enthusiasm and excitement to the table when at events, and loves showing people their first views through a telescope.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Aditya'/>
                        <h3>Aditya Suri</h3> <h4>Treasurer</h4>
                        <p>The Treasurer of Astronomy Society is Aditya! He is a freshman majoring in Mathematics. He wants to research M-Theory, Topology, and Differential Geometry and become a mathematical physicist. Aditya loves to read books about history. </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Cindy'/>
                        <h3>Cindy Luu</h3> <h4>Marketing Agent</h4>
                        <p>Cindy is the ASUH Marketing Agent and aspiring astrophysicist! She loves everything about astronomy, from exoplanets to star nebulae, down to everything that makes this planet lovely. Cindy is really glad to serve ASUH for the 2022-2023 term and share my excitement with fellow stargazers!</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Jarod'/>
                        <h3>Jarod Melo</h3> <h4>Historian</h4>
                        <p>He is physics enthusiast who loves trying to figure out the mysteries of the universe. He’s passionate about learning as much as he can and exploring new ideas. Jarod always looking for ways to improve his understanding of the world around him, and he believes that science is one of the most important.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Alina'/>
                        <h3>Alina Nartova</h3> <h4>Outreach Coordinator</h4>
                        <p>She is a physics major sophomore and always wanted to study astrophysics. Aspired to cosmology and Geralt of Rivia.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Donna'/>
                        <h3>Dr.Donna Stokes</h3> <h4>Faculty Advisor</h4>
                        <p>Dr. Donna Stokes is an Associate Professor and Undergraduate Academic Advisor in the Department of Physics at the University of Houston. She is currently a Fellow of the Physics Teacher Education Coalition. She is involved in educational research on preparation of science and math teachers for secondary education and on physics education research for improving student success in physics courses. She is also involved in scientific research on the structural and optical properties of semiconductor materials for detectors and lasers applications. </p>
                        <p>Email: <Link href="dwstokes@central.uh.edu">dwstokes@central.uh.edu</Link></p>
                    </div>
                </li>
            </ul>
        
        </>
    )
}