import cover_img from '../assets/Covero.jpg'
import DateCard from '../components/DateCard';
import Tabs from "../components/Tabs";
import "./Home.css";
function Home() {
  return (
     <div className='main-con'style={{paddingTop : '90px'}}>
      <div className="date-sec">
        <div className="date-text">
        <span className='text'>TEDx Pondicherry University <b >Season 1</b></span>
        </div>
        <div className="datec-main" style={{ display: 'flex', gap: '20px' }}>
        <DateCard date="September 23,2025 " />
        </div>
      </div>
      <div><Tabs /></div>
     </div>
    
  )
}

export default Home