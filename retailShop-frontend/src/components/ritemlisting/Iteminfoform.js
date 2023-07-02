import "./Iteminfoform.css"

const Iteminfoform=()=>{
    return(
        <div className="iteminfoL">
            <div className="isubformL">
                <form className="itemformL">
                    <label>Name of item:
                        <input type="text" />
                    </label><br/>
                    <label>Price:
                        <input type="number" />
                    </label><br/>
                    <label>Upload Image of an Item : 
                        <button type="submit" className="loginsubmission">
                            Upload
                        </button>
                    </label>
                    
                </form>
            </div>
            <div className="additembutton">
                <button className="ami">
                    <span className="psign">Add more item</span>
                </button>
            </div>
            <div className="removeitembutton">
                {/* <button className="rmi"></button> */}
            </div>
            
        </div>
    );
}

export default Iteminfoform