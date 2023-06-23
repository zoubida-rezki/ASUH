import Image from 'next/image'
import Link from 'next/link'

export default function Apollo () {

    return(
        <>
            <h1 className='pd-16 pl-16 text-xl '>Officers</h1>
            <h2>2019-2020 Officers</h2>

            <h1 className='text-4xl'>The Apollo Division</h1>

            <ul className='grid grid-rows-5  grid-col-1 gap-4  list-none pd-16 pl-16 '>
                <li>
                    <div>
                        <Image  alt='Nick Treviño'/>
                        <h3>Nick Treviño</h3> <h4>President</h4>
                        <p>Hello, I am currently a senior studying Electrical Engineering with a concentration in Computers & Embedded Systems. I have always enjoyed astrophysics and astronomy and I&apos;m excited to be this year&apos;s ASUH President. I also enjoy hiking, camping, and programming.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image  alt='Salma Moncayo-Reyes'/>
                        <h3>Salma Moncayo-Reyes</h3> <h4>Vice President</h4>
                        <p>Hello! This is my senior year studying to become a Biomedical Engineer at the University of Houston. I plan to focus on Bio Nanoscience and hope to attain a Masters degree in my field. After graduating, I will work with Engineers Without Borders before finding a job in a research laboratory. I have been a part of the Astronomy Society for a year now and I am very honored to be an officer this year! I hope we can all learn about astronomy together and I look forward to seeing you at our meetings! </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Megan Schultz'/>
                        <h3>Megan Schultz</h3> <h4>Treasurer</h4>
                        <p>Hi! I&apos;m Megan Schultz. I am currently a Junior majoring in Hospitality and minoring in Spanish and Energy and Sustainability. I plan to continue on and receive my Masters. A few of the things I love are gardening, playing the piano, and backpacking. I also love learning about Astronomy, and learning about different telescopes. </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Abzal Kassymov'/>
                        <h3>Abzal Kassymov</h3> <h4>Secretary</h4>
                        <p>Hello! My name is Abzal and I am a Junior majored in Mechanical Engineering. I have always enjoyed astronomy and aeronautics. In the future, I would like to work in an aerospace-related company. Other than that I love doing computer-aided design and I am a member of the UH gymnastics. I can also speak Russian, Turkish, and my native Kazakh. You are welcome to practice any of these languages with me. I look forward to this year&apos;s ASUH events! </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Sarah Ahmed'/>
                        <h3>Sarah Ahmed</h3> <h4>Treasurer&apos;s Aide</h4>
                        <p>Hi, I&apos;m Sarah Ahmed! I&apos;m currently a junior pursuing a B.S. in Biology and considering minoring in Physics. After undergrad, I plan on attending medical school to get an M.D. I chose this field because science has always fascinated me and I love learning about how the world works and all its little intricacies. I am honored to be an officer this semester and I look forward to seeing you at the next meeting!</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Pablo Samperio'/>
                        <h3>Pablo Samperio</h3> <h4>Marketing Agent</h4>
                        <p>Hello! I am Pablo Samperio. I am currently a Junior pursuing a B.S. in Geology at the University of Houston. I love exploring and learning about the complex way things work. I also enjoy listening to music, sketching, animals of any kind, and staring up at night sky. I&apos;m honored to be a part of the organization and look forward to the amazing sights of the semesters to come.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Susan Street'/>
                        <h3>Susan Street</h3> <h4>Curator & 2019-2020 Historian</h4>
                        <p>My name is Susan Street and I am the former curator(2003-2009) and current curator of the University of Houston Physics Department Observatory(2016-present). I initiated the most recent renovation of the observatory in May of 2016, led the restoration effort, and now, run the operations of the observatory.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Rafael Balderas'/>
                        <h3>Rafael Balderas</h3> <h4>Workshop Facilitator</h4>
                        <p>My name is Rafael. I am a senior studying Nutrition and Kinesiology. I want to go to dentistry school. In my free time, I like to rock climbing and be outdoors. Currently, I work at the UH Rec Center on the rock wall. </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Jayahansa Napagoda'/>
                        <h3>Jayahansa Napagoda</h3> <h4>Outreach Coordinator</h4>
                        <p>Hi, I am a graduate student in Physics engaging in research on ion beam modification of materials for the applications related to semiconductor devices and cleantech energy (Especially, solar cells and water splitting). To mention an additional personal fact, I prefer traveling, playing Cricket, and swimming in my leisure time. Astronomy being among one of the few knowledge streams that descend all the way from ancient times of human civilization, I am certainly excited to expose myself to it. Moreover, as the outreach coordinator, I hope to contribute to the cultivation of professional interest as well as the uplift of education on astronomy and astrophysics in the society. </p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image alt='Karen Flores'/>
                        <h3>Karen Flores</h3> <h4> Social Media Manager</h4>
                        <p>I&apos;m Karen Flores, I&apos;m a junior currently pursuing an degree in Environmental Science. After graduating I&apos;m hoping to find a career in water quality testing. Outside of school, I enjoy reading, music and art galleries. I&apos;m also a sucker for artwork involving space made by local artists. I&apos;ve been a part of ASUH for a year now so I&apos;m glad to be able to give back and help out this year. </p>
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