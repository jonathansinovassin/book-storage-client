import React, { Component } from 'react';
class BookStore{

    constructor(){
        this.books = [];
        this.changeCallbacks =[];
    }

    
    inform(){
      this.changeCallbacks.forEach(callback => callback());
    }

    onChange(callback){
        this.changeCallbacks.push(callback);
    }

    list(){
      fetch('/book-storage/book/list',{
        method : 'POST',
        body : JSON.stringify({}),
        headers : { 
          'Content-Type': 'application/json'
         }
      })
      .then(response => response.json())          
      .then(response => {
        this.books = response;
        this.inform();
      })
    }

    add(book){
        fetch('/book-storage/book',{
            method : 'POST',
            body : JSON.stringify({
                title : book.title,
                author : book.author,
                summary : book.summary,
                price : book.price,
                dateOfPublication : book.dateOfPublication,
            }),
            headers : { 
              'Content-Type': 'application/json'
             }
          })
          .then(() => {
            this.list();
          })
    }

    delete(book){
      fetch('/book-storage/book/'+book.id,{
        method : 'DELETE'
      })
      .then(response => {
          this.list();
      })   
    }

    update(){

    }
}

export default BookStore;