import React from 'react';
import Book from './Book';
import BookForm from './BookForm';
import BookFilter from './BookFilter';
import BookStore from './BookStore';
class BookList extends React.Component{

   bookStore = new BookStore();
    constructor(){
        super();
        this.state = {books : []};
        this.bookStore.onChange(() => {this.setState({books : this.bookStore.books})});
        this.bookStore.list();
        this.delete = this.bookStore.delete.bind(this.bookStore);
        this.update = this.bookStore.update.bind(this.bookStore);

    }

    render(){
        let {books} = this.state;
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <BookForm store={this.bookStore}/>
              </div>
              <div className="col-sm-6">
                <BookFilter store={this.bookStore}/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Summary</th>
                      <th scope="col">Price</th>
                      <th scope="col">Date of publication</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          books.map(book => {
                          return <Book book={book} key={book.id} onDelete={this.delete} onUpdate={this.update}/>
                        })
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default BookList;