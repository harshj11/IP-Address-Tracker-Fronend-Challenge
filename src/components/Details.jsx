import '../css/details.css'

const Details = () => {
    return (
        <section className="details-section">
            <ul className="details__container flex">
                <li className="detail__block">
                    <div>
                        <span className="detail__block__title">IP ADDRESS</span>
                        <span className="detail__block__value">192.212.174.101</span>
                    </div>
                </li>
                <li className="detail__block">
                    <div>
                        <span className="detail__block__title">LOCATION</span>
                        <span className="detail__block__value">Brooklyn, NY 10001</span>
                    </div>
                </li>
                <li className="detail__block">
                    <div>
                        <span className="detail__block__title">TIMEZONE</span>
                        <span className="detail__block__value">UTC -05:00</span>
                    </div>
                </li>
                <li className="detail__block">
                    <div>
                        <span className="detail__block__title">ISP</span>
                        <span className="detail__block__value">SpaceX Starlink</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Details;