import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className="border-b py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">

    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-6xl">
        Få beste verdi for pengene
        
        </h2>

      <p className="mx-auto max-w-screen-md text-left text-gray-100 md:text-3xl">
        
        {/* Vi often tell our customer to start with Expert and then move to independently with  */}
        {/* the help of our premium support. */}
        Vi anbefaler ofte kundene våre å starte med Expert og deretter gå videre til selvstendig med hjelp av vår premiumstøtte.
        Du kan deretter bytte til grunnleggende når du føler deg trygg     
        </p>
    </div>


    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">

      <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">DN Basic</h3>
          <p className="text-gray-300">AI</p>
        </div>

        <div className="mb-4 space-x-2">
          <span className="text-4xl font-bold text-gray-100">NOK 299</span>
          <span className="text-2xl text-gray-300 line-through">NOK 499</span>
        </div>

        <ul className="mb-6 space-y-2 text-gray-300">
 
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>AI</span>
          </li>

          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>1 Template

            </span>
          </li>



        </ul>

        <a href="#" className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-gray-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">Get the Basic Bundle</a>
      </div>

      <div className="w-full rounded-lg bg-gradient-to-tr from-[#ECD288] to-black  p-6 shadow-xl sm:w-1/2 sm:p-8">
        <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">DN Pro</h3>
            <p className="text-indigo-100">AI + Expert</p>
          </div>

          <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">Beste verdi

          </span>
        </div>

        <div className="mb-4 space-x-2">
          <span className="text-4xl font-bold text-white">NOK 49</span>
          <span className="text-2xl text-indigo-100 line-through">NOK 89</span>
        </div>

        <ul className="mb-6 space-y-2 text-indigo-100">

          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>AI</span>
          </li>


          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Expert</span>
          </li>

          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Request Feature</span>
          </li>

          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>3 Templates</span>
          </li>

          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Premium support</span>
          </li>

        </ul>

        <a href="#" className="block rounded-lg bg-[#ECD288] border border-black
        
        bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-900 focus-visible:ring active:bg-gray-400 md:text-base">
            
            Få Pro-pakken
            
            </a>
      </div>

    </div>
  </div>
</div>
    
    </>
  )
}

export default Pricing