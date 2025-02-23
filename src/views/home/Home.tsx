
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
            <br />
            <RotatingText 
              texts={['Software Engineer Student', 'Full Stack Developer', ':3']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#534984] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
          </div>
          <div>
            <p>
            Soy estudiante de Ingeniería de Software y desarrollador Full Stack en Colombia. Con 17 años, me especializo en crear aplicaciones funcionales sin comprometer la experiencia del usuario. Aunque aún no cuento con experiencia laboral cuento con experiencia y varios proyectos personales, tengo un gran deseo de aprender y mejorar constantemente.
            </p>
          </div> 
        </div>
      </div>
    </div>
    </FadeContent>

  )
}

export default Home