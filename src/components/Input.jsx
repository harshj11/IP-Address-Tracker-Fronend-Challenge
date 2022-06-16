import '../css/input.css';
import arrowIcon from '../assets/images/icon-arrow.svg';

const Input = () => {
    return (
        <div>
            <div className="input__container flex flex-ai-c">
                <input type="text" />

                <button className="flex flex-ai-c flex-jc-c" aria-label="button for fetching ip address details">
                    <img src={arrowIcon} alt="arrow-icon" />
                </button>
            </div>
        </div>
    )
}

export default Input;