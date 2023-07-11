import Image from 'next/image'

const searches = [
  {
    id: 1,
    term: 'Monitors over $500',
    url: '/search/monitors?sort_by=r&min_price=500',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    term: 'Phones over $500',
    url: '/search/monitors?sort_by=r&min_price=500',
    color: 'bg-orange-500'
  },
  {
    id: 3,
    term: 'Iphone over $500',
    url: '/search/monitors?sort_by=r&min_price=500',
    color: 'bg-blue-500'
  },
  {
    id: 4,
    term: 'VR headsets over $500',
    url: '/search/monitors?sort_by=r&min_price=500',
    color: 'bg-green-500'
  },
  {
    id: 5,
    term: 'Cars over $500',
    url: '/search/monitors?sort_by=r&min_price=500',
    color: 'bg-yellow-500'
  },
]
export default function Home() {
  return (
    <main className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-2xl font-light">Welcome to Google Shopping</h1>

      <h2 className="mb-5">
        Get started by clicking on one of the example search items or typing in an item yourself above!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {searches.map((search, i) => (
          <a prefetch={false} key={search.id} className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`} href={search.url}>
            {search.term}
          </a>
        ))}
      </div>
    </main>
  )
}
