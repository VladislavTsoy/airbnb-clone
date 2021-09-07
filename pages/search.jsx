import React from 'react';

// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import InfoCard from '../components/InfoCard/InfoCard';

// utils
import { searchFilterButtons } from '../utils/constants';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const {
    location,
    startDate,
    endDate,
    numOfGuests
  } = router.query;

  const formatDate = (date) => {
    return format(new Date(date), "dd MMMM yy")
  }

  const range = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  console.log(searchResults)

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="flex lg:inline-flex space-x-2 mb-5 text-gray-800 whitespace-nowrap">
            {searchFilterButtons.map(filter => (
              <p 
                key={filter.title}
                className='search-filter-button'>
                {filter.title}
              </p>
            ))}
          </div>

          <div className="flex flex-col">
            {searchResults?.map(item => (
              <InfoCard 
                key={item.img}
                {...item}/>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

  return {
    props: {
      searchResults
    }
  }
}