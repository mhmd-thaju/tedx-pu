
import cover_img from '../assets/Covero.jpg'
function Home() {
  return (
     <div className='Cover' style={{
          backgroundImage: `url(${cover_img})`,
          backgroundSize: 'cover',
          height: '100vh'
        }} />
    
  )
}

export default Home