import React, { Component } from 'react';
import Book from './Book';
import BookForm from './BookForm';
import BookStore from './BookStore';
class BookList extends Component{

   bookStore = new BookStore();
    constructor(){
        super();
        this.state = {books : []};
        this.bookStore.onChange(() => {this.setState({books : this.bookStore.books})});
        this.bookStore.list();
        this.delete = this.bookStore.delete.bind(this.bookStore);
    }

    update(){

    }

    render(){
        let {books} = this.state;
        return (
          <div>
            <BookForm store={this.bookStore}/>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Summary</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date of publication</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                  {
                      books.map(book => {
                      return <Book book={book} key={book.id} onDelete={this.delete}/>
                    })
                  }
              </tbody>
            </table>
          </div>
        )
    }
}

export default BookList;