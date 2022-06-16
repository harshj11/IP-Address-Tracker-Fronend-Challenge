import Input from './Input';
import '../css/header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <h1 className="title">IP Address Tracker</h1>
                <Input />                
            </div>
        </div>
    )
}

export default Header;