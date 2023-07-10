import "./Product.css"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const Product=(props)=>{
    const {content, index,setMainData,mainData}=props;
    const [count,setCount]=useState(0);
    const handleIncrementCount = () => {
        setCount((prevCount) => prevCount + 1);
      };

    useEffect(
        ()=>{
            // console.log(content.id);
            setMainData({...mainData,[content.id]:count})
        },[count]
    )
   
    
    return(
        <div className="allaboutproduct">
            <div className="productimage">
                <img className="imgproduct" src={content.image} alt="bhujia" />
            </div>
            <div className="productinfo">
                <div className="productname">
                    {content.name}
                </div>
                <div className="smalelinepc">
                    <div className="productprice">
                        <span className="rupeesign">
                            <svg width="15" height="17" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7407 2.75C14.7232 3.86593 15.3975 5.34509 15.6017 7H22.0833C22.5896 7 23 7.4757 23 8.0625C23 8.6493 22.5896 9.125 22.0833 9.125H15.6017C15.1569 12.7293 12.4826 15.5 9.25 15.5H4.1297L15.3982 28.5612C15.7562 28.9761 15.7562 29.6489 15.3982 30.0638C15.0402 30.4787 14.4598 30.4787 14.1018 30.0638L1.26849 15.1888C0.691024 14.5195 1.10001 13.375 1.91667 13.375H9.25C11.4674 13.375 13.317 11.5499 13.7417 9.125H1.91667C1.41041 9.125 1.00001 8.6493 1.00001 8.0625C1.00001 7.4757 1.41041 7 1.91667 7H13.7417C13.317 4.57512 11.4674 2.75 9.25 2.75H1.91667C1.41041 2.75 1.00001 2.2743 1.00001 1.6875C1.00001 1.1007 1.41041 0.625 1.91667 0.625H9.25H22.0833C22.5896 0.625 23 1.1007 23 1.6875C23 2.2743 22.5896 2.75 22.0833 2.75H13.7407Z" fill="black"/>
                            </svg>
                        </span>
                        <span className="rate">{content.price}</span>
                    </div>
                    <div className="cartcontainer">
                        <div className="cartsvg" onClick={handleIncrementCount}>
                            <div className="noOfproducts" style={{display:count?"":"none"}}>{count}</div>
                            <span className="carts">
                                <svg width="25" height="28" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.7124 25.081H17.0473C16.2365 25.081 15.521 24.6066 15.2839 23.9118L8.27172 3.37499H2.10781C1.08936 3.37499 0.263748 2.63538 0.263748 1.72302C0.263748 0.810656 1.08936 0.0710449 2.10781 0.0710449H9.63633C10.4472 0.0710449 11.1627 0.545397 11.3998 1.2397L18.412 21.777H37.4869L43.0639 9.88706H39.8916C38.8731 9.88706 38.0475 9.14745 38.0475 8.23509C38.0475 7.32273 38.8731 6.58312 39.8916 6.58312H45.8384C46.4559 6.58312 47.0329 6.86018 47.3743 7.32084C47.7157 7.78151 47.7779 8.36489 47.5387 8.87511L40.4121 24.069C40.1245 24.6821 39.4548 25.081 38.7124 25.081Z" fill="black"/>
                                <path d="M15.4799 35.2268C17.2724 35.2268 18.7254 33.9251 18.7254 32.3193C18.7254 30.7136 17.2724 29.4119 15.4799 29.4119C13.6874 29.4119 12.2343 30.7136 12.2343 32.3193C12.2343 33.9251 13.6874 35.2268 15.4799 35.2268Z" fill="black"/>
                                <path d="M39.5633 35.2268C41.3558 35.2268 42.8089 33.9251 42.8089 32.3193C42.8089 30.7136 41.3558 29.4119 39.5633 29.4119C37.7709 29.4119 36.3178 30.7136 36.3178 32.3193C36.3178 33.9251 37.7709 35.2268 39.5633 35.2268Z" fill="black"/>
                                <path d="M33.0765 6.46182H27.7861V1.72302C27.7861 0.810656 26.9605 0.0710449 25.9421 0.0710449C24.9236 0.0710449 24.098 0.810656 24.098 1.72302V6.46182H18.8082C17.7897 6.46182 16.9641 7.20143 16.9641 8.11379C16.9641 9.02615 17.7897 9.76576 18.8082 9.76576H24.098V14.5046C24.098 15.4169 24.9236 16.1565 25.9421 16.1565C26.9605 16.1565 27.7861 15.4169 27.7861 14.5046V9.76576H33.0765C34.0949 9.76576 34.9205 9.02615 34.9205 8.11379C34.9205 7.20143 34.0949 6.46182 33.0765 6.46182Z" fill="black"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                   
                </div>
            </div>


        </div>
    );
}
export default Product