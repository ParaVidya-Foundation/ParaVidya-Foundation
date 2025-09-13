import Image from 'next/image';

const HowToContribute = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/card.png')" }}>
      <div className="text-center p-4">
        <h1 className="text-4xl font-serif text-brown-800">How can you contribute?</h1>
        <div className="flex justify-center space-x-6 mt-8">
          <div className="text-center">
            <h2 className="text-xl font-serif text-brown-700">Donate</h2>
            <p className="text-base font-serif text-brown-600">Discover the three levels of donations depending on your level of commitment.</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-serif text-brown-700">Spread the word</h2>
            <p className="text-base font-serif text-brown-600">Buy the super useful, inexpensive and stunning booklet on Sadhana for personal use and gifting.</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-serif text-brown-700">Corporate Sponsorship</h2>
            <p className="text-base font-serif text-brown-600">Explore the very unique opportunity of sponsoring our noble cause and see how it can benefit your organization.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToContribute;