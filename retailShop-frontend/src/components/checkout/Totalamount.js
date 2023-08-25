import "./Totalamount.css"
import { useSelector } from "react-redux";

function getTotalAmount(products) {
    let total = 0;
    products.forEach(element => {
        total += parseInt(element.price)
    });
    return total;
}
const Totalamount=()=>{
    const productCart=useSelector(state=>state.cart);

    return (
        <div className="totalamount">
            <div className="taInfo">
                Total Amount
                <span className="svgrupee">
                    <svg width="15" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7415 1.64286C13.7239 2.50559 14.3981 3.64915 14.6023 4.92857H21.0834C21.5896 4.92857 22 5.29634 22 5.75C22 6.20366 21.5896 6.57143 21.0834 6.57143H14.6023C14.1575 9.35795 11.4835 11.5 8.25115 11.5H3.13127L14.3988 21.5977C14.7568 21.9185 14.7568 22.4386 14.3988 22.7594C14.0409 23.0802 13.4605 23.0802 13.1026 22.7594L0.270301 11.2594C-0.307119 10.7419 0.101833 9.85714 0.918427 9.85714H8.25115C10.4683 9.85714 12.3178 8.44613 12.7424 6.57143H0.918427C0.412209 6.57143 0.00183741 6.20366 0.00183741 5.75C0.00183741 5.29634 0.412209 4.92857 0.918427 4.92857H12.7424C12.3178 3.05387 10.4683 1.64286 8.25115 1.64286H0.918427C0.412209 1.64286 0.00183741 1.27509 0.00183741 0.821428C0.00183741 0.367766 0.412209 0 0.918427 0H8.25115H21.0834C21.5896 0 22 0.367766 22 0.821428C22 1.27509 21.5896 1.64286 21.0834 1.64286H12.7415Z" fill="black"/>
                    </svg>
                </span>
                <span className="priceA">{getTotalAmount(productCart)}</span>
            </div>
            <div className="proceedtobuy">
                <p>Proceed to Buy</p>
            </div>
        </div>

    );
}

export default Totalamount