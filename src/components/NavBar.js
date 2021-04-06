import CartWidget from './CartWidget/CartWidget'
import Button from '@material-ui/core/Button';

function NavBar() {
    return <>
    <nav className="sections">
        <ul className="links-nav">
            <li><Button color="secondary">Ofertas</Button></li>
            <li><Button color="secondary">Productos</Button></li>
            <li><Button color="secondary">Sobre nosotros</Button></li>
            <li><Button color="secondary">Contactanos</Button></li>
        </ul>
        <CartWidget/>
    </nav>
</>
}

export default NavBar;