import "./Productiord.css";
import { useDispatch } from "react-redux";
import { addData, removeData } from "../store/slices/userSlices";
const Productiord=(props)=>{
    const dispatch = useDispatch()

    function removeItem(product) {
        dispatch(removeData(product))
    }
    function addItem(product) {
        dispatch(addData(product));
    }
    const {product, count} = props;
    return(
        <div className="threecombination">
            <div className="subsvg" onClick={() => {removeItem(product)}}>
                <svg width="20" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.52588e-05 2.08333C1.52588e-05 0.932708 0.932765 0 2.08335 0H22.9167C24.0673 0 25 0.932708 25 2.08333C25 3.23396 24.0673 4.16667 22.9167 4.16667H2.08335C0.932765 4.16667 1.52588e-05 3.23396 1.52588e-05 2.08333Z" fill="black"/>
                </svg>
            </div>
            <div className="numbers">{count}</div>
            <div className="plussvg" onClick={() => {addItem(product)}}>
                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.06256 14.5625H11.4376V23.9375C11.4376 24.3519 11.6022 24.7493 11.8952 25.0424C12.1882 25.3354 12.5857 25.5 13.0001 25.5C13.4145 25.5 13.8119 25.3354 14.1049 25.0424C14.3979 24.7493 14.5626 24.3519 14.5626 23.9375V14.5625H23.9376C24.352 14.5625 24.7494 14.3979 25.0424 14.1049C25.3354 13.8118 25.5001 13.4144 25.5001 13C25.5001 12.5856 25.3354 12.1882 25.0424 11.8951C24.7494 11.6021 24.352 11.4375 23.9376 11.4375H14.5626V2.0625C14.5626 1.6481 14.3979 1.25067 14.1049 0.957646C13.8119 0.66462 13.4145 0.5 13.0001 0.5C12.5857 0.5 12.1882 0.66462 11.8952 0.957646C11.6022 1.25067 11.4376 1.6481 11.4376 2.0625V11.4375H2.06256C1.64816 11.4375 1.25073 11.6021 0.957707 11.8951C0.664681 12.1882 0.500061 12.5856 0.500061 13C0.500061 13.4144 0.664681 13.8118 0.957707 14.1049C1.25073 14.3979 1.64816 14.5625 2.06256 14.5625Z" fill="black"/>
                </svg>
            </div>
        </div>
    );
}

export default Productiord