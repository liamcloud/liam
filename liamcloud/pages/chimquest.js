import Link from "next/link"

const chimpQuest = () => {
    return (
        <div>
            <div className="header">
                <Link href="/"><h2>Liam Cloud</h2></Link>
            </div>
            <div className="article">
                <div>
                <h3 className="title">The Chimp quest 🐒</h3>
                </div>
                <div className="pwrap">
                <p>As time passes by, I’m more aware of my cognitive abilities which are, I think, quite low compared to what I believed for years.</p>
                <p>The reason for this disparity is a massive Dunning-Kruger effect. As I drew my attention to many intellectual topics (Physics, Computer Science, Mathematics, Economics…), I built a surface understanding that sufficed into making me confident of my knowledge on these topics.</p>
                <p>Each small Dunning-Kruger effect (one for each topic) piled up into a bigger one that mistakenly made me believe I had the cognitive abilities and knowledge needed to confidently face the world.</p>
                <p>Having a deeper and clearer awareness of my low abilities and knowledge is not a factor that can lead to a career shift or anything of the sort as I enjoy the hope that the work I do provides me. The hope that someday, I might build something useful, that other people will find worthy of their dollars.</p>
                <p>I can’t give up anyway, that would infirm my worldview on the effectiveness of capitalism. So suddenly, my life turns out to be an experiment on the effectiveness of capitalism. If I (considering I have an average IQ), can bend reality to my will (wealth, happiness and knowledge), then you can too.</p>
                <p>Go capitalism! The Chimp Quest in on!</p>
                </div>
            </div>
        </div>
    )
}

export default chimpQuest