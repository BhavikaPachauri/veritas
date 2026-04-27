import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='w-full shadow-sm bg-white'>
      <div className='flex items-stretch'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img
            src="/img/logo.png"
            alt="Logo"
            className='object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
          />
        </div>

        {/* Right Section */}
        <div className='flex-1 flex flex-col min-w-0'>

          {/* Top Bar — desktop only */}
          <div className='hidden md:flex items-center gap-2 px-6 lg:px-10 py-2 text-[16px] archivo border-b border-[#BF9874] text-[#001025]'>
            <svg width="15" height="15" viewBox="0 0 19 19" fill="none" className='flex-shrink-0'>
              <path d="M9.08315 17.4163C13.6854 17.4163 17.4163 13.6854 17.4163 9.08315C17.4163 4.48088 13.6854 0.75 9.08315 0.75C4.48088 0.75 0.75 4.48088 0.75 9.08315C0.75 13.6854 4.48088 17.4163 9.08315 17.4163Z" stroke="#BF9874" strokeWidth="1.5" />
              <path d="M9.08301 4.08301V9.0829L12.4163 10.7495" stroke="#BF9874" strokeWidth="1.5" />
            </svg>
            <span>MONDAY – FRIDAY &nbsp; 7:30AM – 6:30PM</span>
          </div>

          {/* Main Row */}
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2 flex-1'>

            {/* Desktop Nav Links */}
            <div className='hidden md:flex items-center gap-6 lg:gap-10 font-medium archivo text-[16px] text-[#001025]'>
              <Link to="/" className='hover:text-[#9F6907] transition-colors'>Home</Link>
              <Link to="/about" className='hover:text-[#9F6907] transition-colors'>About</Link>
              <Link to="/career" className='hover:text-[#9F6907] transition-colors'>Service</Link>
              <Link to="/career" className='hover:text-[#9F6907] transition-colors'>Legal Guide</Link>
              <Link to="/career" className='hover:text-[#9F6907] transition-colors'>Why Choose Us</Link>
              <Link to="/contact" className='hover:text-[#9F6907] transition-colors'>Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className='hidden md:block'>
              <Link
                to="/"
                className='flex items-center gap-2 px-4 py-1.5 border border-[#9F6907] archivo text-[14px] text-[#001025] hover:bg-[#9F6907] hover:text-white transition-colors whitespace-nowrap'
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7178 12.7291V15.1377C16.7187 15.3613 16.6729 15.5827 16.5833 15.7875C16.4938 15.9924 16.3624 16.1763 16.1976 16.3275C16.0328 16.4786 15.8383 16.5937 15.6265 16.6654C15.4147 16.737 15.1902 16.7636 14.9675 16.7435C12.4969 16.475 10.1237 15.6308 8.03865 14.2786C6.09875 13.0459 4.45406 11.4012 3.22136 9.46135C1.86448 7.36679 1.02006 4.98206 0.756517 2.50036C0.736453 2.27834 0.762839 2.05457 0.833995 1.8433C0.905151 1.63203 1.01952 1.4379 1.16981 1.27325C1.32011 1.10861 1.50304 0.97706 1.70696 0.886987C1.91088 0.796914 2.13132 0.750288 2.35425 0.750078H4.7629C5.15254 0.746243 5.53028 0.884222 5.82572 1.1383C6.12116 1.39237 6.31413 1.74521 6.36866 2.13103C6.47032 2.90185 6.65886 3.6587 6.93068 4.38713C7.0387 4.6745 7.06208 4.98682 6.99804 5.28707C6.93401 5.58732 6.78525 5.86292 6.56938 6.08121L5.54972 7.10087C6.69267 9.11092 8.35696 10.7752 10.367 11.9182L11.3867 10.8985C11.605 10.6826 11.8806 10.5339 12.1808 10.4698C12.4811 10.4058 12.7934 10.4292 13.0808 10.5372C13.8092 10.809 14.566 10.9976 15.3369 11.0992C15.7269 11.1542 16.083 11.3507 16.3377 11.6512C16.5923 11.9517 16.7276 12.3353 16.7178 12.7291Z" stroke="#BF9874" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                + 383 (21) 23 43984
              </Link>
            </div>

            {/* Mobile: right-side content (empty spacer to balance hamburger) */}
            <div className='md:hidden flex-1' />

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-black transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className='flex flex-col px-6 pb-6 pt-2 space-y-4 archivo bg-white border-t border-gray-100'>
          <Link to="/" onClick={() => setOpen(false)} className='block py-1 text-[15px] text-[#001025] hover:text-[#9F6907] transition-colors'>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className='block py-1 text-[15px] text-[#001025] hover:text-[#9F6907] transition-colors'>
            About
          </Link>
          <Link to="/career" onClick={() => setOpen(false)} className='block py-1 text-[15px] text-[#001025] hover:text-[#9F6907] transition-colors'>
            Career
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className='block py-1 text-[15px] text-[#001025] hover:text-[#9F6907] transition-colors'>
            Contact
          </Link>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className='flex items-center justify-center gap-2 px-4 py-2 border border-[#9F6907] text-[14px] text-[#001025] hover:bg-[#9F6907] hover:text-white transition-colors'
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7178 12.7291V15.1377C16.7187 15.3613 16.6729 15.5827 16.5833 15.7875C16.4938 15.9924 16.3624 16.1763 16.1976 16.3275C16.0328 16.4786 15.8383 16.5937 15.6265 16.6654C15.4147 16.737 15.1902 16.7636 14.9675 16.7435C12.4969 16.475 10.1237 15.6308 8.03865 14.2786C6.09875 13.0459 4.45406 11.4012 3.22136 9.46135C1.86448 7.36679 1.02006 4.98206 0.756517 2.50036C0.736453 2.27834 0.762839 2.05457 0.833995 1.8433C0.905151 1.63203 1.01952 1.4379 1.16981 1.27325C1.32011 1.10861 1.50304 0.97706 1.70696 0.886987C1.91088 0.796914 2.13132 0.750288 2.35425 0.750078H4.7629C5.15254 0.746243 5.53028 0.884222 5.82572 1.1383C6.12116 1.39237 6.31413 1.74521 6.36866 2.13103C6.47032 2.90185 6.65886 3.6587 6.93068 4.38713C7.0387 4.6745 7.06208 4.98682 6.99804 5.28707C6.93401 5.58732 6.78525 5.86292 6.56938 6.08121L5.54972 7.10087C6.69267 9.11092 8.35696 10.7752 10.367 11.9182L11.3867 10.8985C11.605 10.6826 11.8806 10.5339 12.1808 10.4698C12.4811 10.4058 12.7934 10.4292 13.0808 10.5372C13.8092 10.809 14.566 10.9976 15.3369 11.0992C15.7269 11.1542 16.083 11.3507 16.3377 11.6512C16.5923 11.9517 16.7276 12.3353 16.7178 12.7291Z" stroke="#BF9874" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            + 383 (21) 23 43984
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar