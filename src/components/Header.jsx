import Input from './Input';
import Details from './Details';

import '../css/header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <h1 className="title">IP Address Tracker</h1>
                <Input />   
                <Details />             
            </div>
        </div>
    )
}

export default Header;