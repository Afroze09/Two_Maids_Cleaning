export default function EventButton({className}) {
  return (
    <div className={` flex justify-center ${className}`}>
        <button className='btn event-btn'>Book Your Cleaning</button>
        <button className='btn event-btn'>Calculate Your Price</button>
    </div>
  )
}
