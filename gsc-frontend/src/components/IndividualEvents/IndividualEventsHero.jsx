import { useParams } from "react-router-dom";
const IndividualEventsHero = () => {
    const {event} = useParams();
  return (
     <>  
         <div className="bg-[url('/assets/HeroImage.svg')]  bg-no-repeat bg-cover bg-center">
         <div className='flex justify-center text-4xl xxs:text-5xl ss:text-6xl sm:text-7xl smd:text-8xl md:text-9xl font-bold' >
            <p className='text-white  font-lexend  pt-28 pb-32 xs:pt-32 xs:pb-36 ss:pt-40 ss:pb-44 sm:pt-46 sm:pb-48 smd:pt-52 smd:pb-56 md:pt-60 md:pb-64' style={{letterSpacing:'-0.5rem'}}>{event}</p>
          </div>
          </div>

     </>
  )
}

export default IndividualEventsHero