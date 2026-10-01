import Card from "./components/Card";


export default function App() {
  return <main className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4 items-start">
    <Card
      imgSrc="./public/simplePlan.jpg"
      title="Perfect"
      author="Simple Plan"
      desc="Perfect is a song by Canadian rock band Simple Plan. It was serviced to US radio on August 25, 2003, and officially released as the fourth and final single from their debut studio album, No Pads, No Helmets...Just Balls (2002). The single's B-side, Happy Together, is a cover of the 1967 Turtles song and was previously being featured in the soundtrack of the 2003 film Freaky Friday. Perfect became a top-40 hit in the band's native Canada as well as in Australia, New Zealand, and the United States."
    />

    <Card
      imgSrc="./public/HarryStyles.jpg"
      title="Sign of the times"
      author="Harry Styles"
      desc="Sign of the Times is the debut solo single by British singer-songwriter Harry Styles from his first solo album, Harry Styles. Released on 7 April 2017 by Columbia Records, the song was initially written by Jeff Bhasker, Mitch Rowland, Ryan Nasci, Alex Salibian, with Styles earning songwriter credit by contributing. It was produced by Bhasker and co-produced by Salibian and Johnson.[2] Musically, it was described by critics as a pop rock and soft rock ballad. Its accompanying music video was released on 8 May 2017."
    />

    <Card
      imgSrc="./public/MacDemarco.jpg"
      title="Chamber of Reflection"
      author="Mac Demarco"
      desc="Mac DeMarco's song Chamber of Reflection is about the healing power of solitude and taking time away from the noise of the world to grow."
    />

    <Card
      imgSrc="./public/slowDive.jpg"
      title="When the sun hits"
      author="slowdive"
      desc="According to Slowdive fans, “When The Sun Hits” is one of their finest songs. Surprisingly, it was almost left off Souvlaki. Apparently Christian and Nick “fought like hell” to get the song in the album, according to John Kupchik."
    />

    <Card
      imgSrc="./public/radiohead.jpg"
      title="Let Down"
      author="Radiohead"
      desc="Featured on Radiohead’s 1997 alternative-rock classic OK Computer, “Let Down” was recorded at 3 AM in a ballroom at the historic St Catherine’s Court. The song structure features multi-layered arpeggiated guitars and electric piano, with unconventional time signatures and a Spector-esque “Wall of Sound”."
    />
  </main>;
}