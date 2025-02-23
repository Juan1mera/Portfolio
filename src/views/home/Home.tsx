
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
            <h1>¡Hola! Soy Juan</h1>
            <RotatingText 
              texts={['xxxx', 'dssss', 'sdddd']}
              transition={{ duration: 0.8 }}
              staggerDuration={0.09}
              color='rgb(255, 255, 255)'
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