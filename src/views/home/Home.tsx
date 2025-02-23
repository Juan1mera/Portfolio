
import FadeContent from '../../components/FadeContent'
import RotatingText from '../../components/RotatingText/RotatingText'
import TextPressure from '../../components/TextPressure'
import '../../styles/global.css'
import './Home.css'


function Home() {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <div className='container'>
      <TextPressure text='Hello World!' />
      <div>
        <div className='gridContainer'>
          <div>
            <h1>¡Hola! Soy Juan!</h1>
            <RotatingText 
              texts={['Software Engineer Student', 'Full Stack Developer', ':3']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div>
            <p>
            Estudiante de ingeniería de software y desarrollador Full Stack en Colombia. Tengo 17 y especializo en crear aplicaciones funcionales sin comprometer la experiencia del usuario. Sin experiencia laboral pero con un fuerte deseo de seguir aprendiendo.
            </p>
          </div> 
        </div>
      </div>
    </div>
    </FadeContent>

  )
}

export default Home