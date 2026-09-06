import React, { useRef, useState } from 'react'
import Services from './Services'
import Project from './Project'
import Experience from './Experience'
import Description from './Description'
import Footer from './Footer'
import About from './About'

const Navbar = () => {
  const home = useRef(null)
  const services = useRef(null)
  const projects = useRef(null)
  const about = useRef(null)
  const experience = useRef(null)

  const [showMenu, setShowMenu] = useState(false)


  const scrollToContent = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      })
       setShowMenu(false);
    }
  }

  // Map ref and labels for easy option rendering and lookup
  const menuItems = [
    { label: 'Home', ref: home },
    { label: 'Service', ref: services },
    { label: 'Experience', ref: experience },
    { label: 'About', ref: about },
    { label: 'Projects', ref: projects },
  ]

  return (
    <>
      <div className="mx-auto p-5 flex justify-end items-center font-semibold relative sticky top-0 bg-zinc-900 bg-opacity-5 z-50 h-20">
        {/* Desktop/Large-screen menu */}
        <ul className="hidden sm:flex justify-end text-white gap-[4vw] p-5">
          {menuItems.map(({ label, ref }) => (
            <li key={label}>
              <button
                className="hover:text-gray-400"
                onClick={() => scrollToContent(ref)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger + dropdown */}
        <div className="sm:hidden flex items-center gap-2 w-full justify-end">
          <button
            className="text-white text-2xl p-2 rounded bg-zinc-700"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Open Menu"
          >
            &#9776;
          </button>
          {showMenu && (
            <div className="absolute top-[60px] right-5 bg-zinc-800 shadow-lg rounded-lg flex flex-col z-50 min-w-[140px]">
              {menuItems.map(({ label, ref }) => (
                <button
                  key={label}
                  className="px-4 py-3 text-white hover:bg-gray-700 text-left"
                  onClick={() => scrollToContent(ref)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Description home={home} />
      <Services services={services} />
      <Experience experience={experience} />
      <Project projects={projects} />
      <About about={about} />
      <Footer />
    </>
  )
}

export default Navbar
