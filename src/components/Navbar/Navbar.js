import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {
    console.log(props)

    const handleOnClick = () => {
        alert('hice click')
    }
    
    const handleOnClick2 = () => {
        alert('hice otro click')
    }


    return (
        <nav className='navbar'>
            <h1 style={{ color: props.colorTitle}}>MyApp</h1>
            <Button colorText='red' func={handleOnClick}>Home</Button>
            <Button colorText='blue' func={handleOnClick2}>About</Button>
            <Button>
                Contact
            </Button>
            <Button>
                Login
            </Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar

