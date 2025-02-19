
import AnimatedContent from '../../components/AnimatedContent'
import DecryptedText from '../../components/DecryptedText'
import TextPressure from '../../components/TextPressure'
import '../../styles/global.css'
import './Home.css'


function Home() {
  return (
    <AnimatedContent>
    <div className='container'>
      <TextPressure text='Hello World!' />
      <div >
        <div style={{ marginTop: '4rem', maxWidth: '60ch' }}>
        <DecryptedText
          text="This text animates when in view , and when out of view lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          animateOn="view"
          revealDirection="end"
          speed={50}
          maxIterations={10}
        />
        </div>
      </div>
    </div>|
    </AnimatedContent>

  )
}

export default Home