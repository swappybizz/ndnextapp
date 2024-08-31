import React from 'react'

const Intro = () => {
  return (
    <>
        
        <img
        className="w-[100%] h-3/4 md:mt-48 md:px-48"
        src = "./intro.svg"
        >
        </img>
        <h1 className="md:text-[4.5rem] text-6xl font-bold leading-none tracking-tighter text-left md:mx-8 mx-4 md:ml-0 z-10 md:w-3/4 ">
          AI drevet design, den nye standarden for webdesign
        </h1>
        <h3 className="md:text-[2.5rem] md:text-6xl text-3xl font-bold leading-none tracking-tighter text-left md:mx-8 mx-4 md:ml-0 z-10 md:w-3/4 my-12 ">
          Vi lege til rette for at du kan gjøre endringer på nettstedet ditt ved hjelp av AI. Kunde kan bruke var AI mobilapp for å gjøre endringer på nettstedet sitt.
        </h3>
      </>

    
  )
}

export default Intro