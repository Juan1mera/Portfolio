
import FadeContent from '../../components/FadeContent'
import SplitText from '../../components/SplitText'
import TextPressure from '../../components/TextPressure'
import '../../styles/global.css'
import './Home.css'


function Home() {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <div className='container'>
      <TextPressure text='Hello World!' />
      <div >
        <div style={{ marginTop: '4rem', maxWidth: '60ch' }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam voluptatum recusandae minima perspiciatis? Illum vero laborum aspernatur veniam quis, quisquam corporis totam doloremque minima sed. Culpa perspiciatis quasi non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsam enim eius corporis alias quis corrupti! Cum minus tempora aut commodi minima impedit? Repellendus tempore, cupiditate ratione dolores laudantium molestiae.
          </p>
          <SplitText  text='Holaaa' />
        </div>
      </div>
    </div>
    </FadeContent>

  )
}

export default Home