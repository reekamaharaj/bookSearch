import React from "react";

function Form(props) {
    return (
        <form>
            <div className="form-group text-center">
                <label className="searchlabel"> <h3>Enter a search parameter</h3></label>
                <div class="input-group">
                    <div class="custom-file">
                        <input className="form-control" value={props.search} type="text" name="search" placeholder="Enter a book name" onChange={props.handleInputChange} />
                    </div>
                    <div class="input-group-append">
                        <button className="submitBtn btn btn-info" type="Submit" onClick={props.handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
