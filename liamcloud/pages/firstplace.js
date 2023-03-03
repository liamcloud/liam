import Link from "next/link"
import Image from "next/image"

const firstPlace = () => {
    return (
        <div>
            <div className="header">
                <Link href="/"><h2>Liam Cloud</h2></Link>
            </div>
            <div className="article">
                <div>
                <h3 className="title">First Place 🏛</h3>
                </div>
                <div className="pwrap">
                <p className="note">Note: most of this is inspired by Balaji’s book <Link target="_blank" className="link" href="https://www.amazon.com/Network-State-How-Start-Country-ebook/dp/B09VPKZR3G/ref=sr_1_1?crid=2JEZMD9SPQN94&keywords=network+state&qid=1677861364&sprefix=netork+stat%2Caps%2C229&sr=8-1">“The Network State”</Link> and the ideas behind <Link className="link" target="_blank" href="https://www.praxissociety.com/">Praxis Society</Link></p>
                <p>First Place is a highly aligned internet community maybe aiming for diplomatic recognition.</p>
                <p>We all have our Leviathan, some of us do by faith, some of us by constraint.</p>
                <p>Leviathan is a sea serpent noted in theology and mythology. It is nowadays mostly used to describe a powerful force, something of enormous size.</p>
                <p>The oldest Leviathan of humanity is god. “God is dead” said Nietzsche in the late 19th century.</p>
                <p>In reality god has just been replaced by gov, the state.</p>
                <p>But gov is dead, the new Leviathan is the network. The increasingly censorship-resistant nature of our networks for the first time in history gives us the chance to take control and win battles against establishment and the state.</p>
                <p>Examples are Trump deplatforming in 2021, Bitcoin network resilience since 2009, Constitution DAO, among others.</p>
                <p>To build a startup, you need a technological innovation, to build a network state, you need a moral innovation.</p>
                <p>75% of kids below age 16 want to become influencers, would Nietzsche say “Ambition is dead”? I do.</p>
                <p>The biggest realization of my life, when I was 15, was that you could and probably should always aim for something bigger. I want everyone to have this realization. First place is a highly aligned internet community of people aiming for something bigger (not diplomatic recognition).</p>
                <p>What is the place ?</p>
                <p>Cloud first and then a network of physical locations, <Link href="https://www.youtube.com/watch?v=pb_yvBNLjNk" className="link" target="_blank">the portals</Link></p>
                <div className="images">
                <Image
                  alt="original photo"
                  src='/2.jpg'
                  className="rounded-2xl"
                  width={375}
                  height={375}
                />
                  <Image
                  alt="original photo"
                  src='/3.jpg'
                  className="rounded-2xl"
                  width={375}
                  height={375}
                />
                
                </div>
                <p>This is the first draft for the First Place, <Link className="link" href="https://www.twitter.com/imliamcloud" target="_blank">dm me</Link> if you wanna join.</p>
                </div>
            </div>
        </div>
    )
}

export default firstPlace