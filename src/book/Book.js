import React, { Component } from 'react';

class Book extends Component{
    constructor(){
        super();
        this.state = {books : []};
    }

    render(){
        let {book} = this.props;
        return (<tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.summary}</td>
            <td>
                {new Intl.NumberFormat('fr-FR', 
                { style: 'currency', currency: 'EUR' }).format(book.price)}
            </td>
            <td>
                {new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                    }).format(book.dateOfPublication)}
            </td>
            <td>
            <button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button> 
            </td>
          </tr>)
    }

    delete = () =>{
        this.props.onDelete(this.props.book);
    }
}

export default Book;