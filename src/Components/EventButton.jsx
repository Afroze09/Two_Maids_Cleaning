import { Link } from "react-router-dom";

export default function EventButton({className}) {
  return (
    <div className={` flex justify-center ${className}`}>
        <Link to="/book"><button  className='btn event-btn'>Book Your Cleaning </button></Link>
        <Link to="/book"><button className='btn event-btn'>Calculate Your Price</button></Link>
    </div>
  )
}
