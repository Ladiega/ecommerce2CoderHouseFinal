import cart from './assets/cart.svg'

export default function CartWidget() {
  const cartStyles = {
    border:'1px solid white',
    background: 'white',
    borderRadius: '2px',
    width: 30,
    padding: 1, 
    cursor:'pointer',
  }
  return (    
    <div>
      <img src={cart} alt="cart" style={cartStyles}  />
      <h1></h1>
    </div>
  )
    
}