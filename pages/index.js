import Head from 'next/head';

// components
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import SmallCard from '../components/SmallCard/SmallCard';
import MediumCard from '../components/MediumCard/MediumCard';
import LargeCard from '../components/LargeCard/LargeCard';

export default function Home(props) {
  let {
    exploreData,
    cardsData
  } = props;

  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-7">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard key={item.img} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -m-3">
            {cardsData?.map(item => (
              <MediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>

        <section className="py-16">
          <LargeCard 
            img="https://links.papareact.com/4cj" 
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"/>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(res => res.json());
  const cardsData = await fetch("https://links.papareact.com/zp1").then(res => res.json());
  
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}