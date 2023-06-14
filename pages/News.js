

export default function News() {
    return(
        <>
            <h1 className="text-center mb-8 mt-8 font-bold text-6xl text-custom-color-3">News & Events</h1>  
            <div className= " mt-6 text-center font-mono text-slate-400 text-xl font-bold"> At this time, we are planning virtual events for the Fall 2020 semester. Keep updated on our upcoming events through our mailing list. https://forms.gle/uqC7mEhZwo9aCuXR9
            </div>
            <iframe className="w-4/5 mx-auto  mt-12 h-96 " src="https://calendar.google.com/calendar/embed?src=cp9m2n30roolg5ugat0rr4vun4%40group.calendar.google.com&ctz=America%2FChicago" style={{border: '0', width: '800', height: '600', frameborder: '0', scrolling: 'no'}}></iframe>
        </>
    )
}