class BookStore{

    constructor(){
        this.books = [];
        this.changeCallbacks =[];
        this.savedCriteria = null;
    }

    
    inform(){
      this.changeCallbacks.forEach(callback => callback());
    }

    onChange(callback){
        this.changeCallbacks.push(callback);
    }

    list(criteria){
      if(criteria){
        this.savedCriteria = criteria;
      }
      fetch('/book-storage/book/list',{
        method : 'POST',
        body :  JSON.stringify(this.formatCriteria(this.savedCriteria)),
        headers : { 
          'Content-Type': 'application/json'
         }
      })
      .then(response => response.json())          
      .then(response => {
        this.books = response;
        this.inform();
      });
    }

    formatCriteria(criteria){
      let criteriaToSend = {};
      if(criteria){
        criteriaToSend = {
          title : this.getValueIfNotEmpty(criteria.title),
          author : this.getValueIfNotEmpty(criteria.author),
          summary : this.getValueIfNotEmpty(criteria.summary),
          price : this.getValueIfNotEmpty(criteria.price),
          startDatePublication : this.getValueIfNotEmpty(criteria.startDatePublication),
          endDatePublication : this.getValueIfNotEmpty(criteria.endDatePublication),
          sortBy : this.getValueIfNotEmpty(criteria.sortBy),
          sortByAsc : this.getValueIfNotEmpty(criteria.sortByAsc),
        };
      }
      return criteriaToSend;
    }

    getValueIfNotEmpty(value){
      return value ? value :null;
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
          });
    }

    delete(book){
      fetch('/book-storage/book/'+book.id,{
        method : 'DELETE'
      })
      .then(() => {
          this.list();
      });
    }

    update(book){
      fetch('/book-storage/book',{
        method : 'PUT',
        body : JSON.stringify({
            id : book.id,
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
      });
    }
}

export default BookStore;