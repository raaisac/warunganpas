import React, { useState, useEffect } from 'react';
import AutoImageSlider from './AutoImageSlider';
import Zeus from '../assets/Zeus.jpg';


const Sejarah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scrollbar-hidden bg-marquezBlack w-full h-full text-white">
      <nav
        className={`fixed w-full top-0 left-0 bg-marquezBlack z-50 duration-300 ${
          isScrolled ? 'shadow-[0px_13px_21px_0px_#faf089]' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold font-jakarta">Warung<b className='text-yellow-400'>Anpas</b></div>
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Home
              </a>
              <a
                href="#About"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                About
              </a>
              <a
                href="/Menu"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Menu
              </a>
              <a
                href="/Sejarah"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Sejarah
              </a>
              <a
                href="/Login"
                className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Login / SignUp
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-marquezBlack ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-3">
            <a
              href="/"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              About
            </a>
            <a
              href="/Menu"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              Menu
            </a>
            <a
                href="/Sejarah"
                className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Sejarah
              </a>

              <a
                href="/Login"
                className="block hover:text-yellow-300 text-yellow-400 hover:scale-105  duration-300 font-jakarta font-semibold"
              >
                Login / SignUp
              </a>
          </div>
        </div>
      </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-[3rem]'>
            <AutoImageSlider/>
            <div>
                <h1 className='text-4xl font-Lora text-yellow-400 font-semibold'>Sejarah</h1>
                <p className='pt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, corrupti numquam saepe blanditiis enim cum, dolor culpa tenetur velit atque, quam voluptatibus. Fugiat suscipit architecto repellat ea quod molestiae at modi error cumque quos dolor, autem asperiores excepturi quaerat velit. Alias fuga eligendi beatae id ratione vel facere, quae magni?</p>
            </div>
        </div>
        <div className='pt-[3rem] flex justify-center'>
            <img src={Zeus} alt="" className='' />
        </div>
        <div className='pt-5'>
            <p className='font-Lora text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione, incidunt eius eligendi aliquid temporibus adipisci vel ullam modi ducimus?</p>
        </div>
    
    </section>
  );
};

export default Sejarah;
