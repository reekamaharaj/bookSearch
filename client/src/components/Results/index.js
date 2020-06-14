import React from "react";

const Result = (props) => {
    return (
            <ul className="list-group">
            {props.books.map(book => {
                return (
                    <div>
                        <li className="list-group-item" key={book._id}>
                            <img src={book.image} alt={book.title} />
                            <strong> 
                                {book.title} by {book.authors} 
                            </strong>
                            <button className="btn btn-info" id={book.id} onClick={book.saveBook}>Save</button>
                            <a href={book.link} target="_blank">
                                    <button className="btn btn-info">More Info</button>
                                </a>
                        </li>
                        <li className="list-group-item">
                            {book.description}
                        </li>
                    </div>
                );
            })}
            </ul>
    );
};
export default Result;
