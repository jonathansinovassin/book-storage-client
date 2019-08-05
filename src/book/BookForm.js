import React, {Component} from 'react';

class BookForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.initState();
  
      this.handleChange = this.handleChange.bind(this);
      this.add = this.add.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }
  
    add() {
      this.props.store.add({
            title : this.state.title,
            author : this.state.author,
            summary : this.state.summary,
            price : this.state.price,
            dateOfPublication : this.state.dateOfPublication,
        });
        this.setState(this.initState());
    }

    render() {
      return (
        <div>
            <h1>New book</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            id="author"
                            name="author"
                            onChange={this.handleChange}
                            value={this.state.author}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="summary" className="col-sm-2 col-form-label">Summary</label>
                    <div className="col-sm-10">
                        <input type="textarea"
                            className="form-control"
                            id="summary"
                            name="summary"
                            onChange={this.handleChange}
                            value={this.state.summary}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.price}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateOfPublication" className="col-sm-2 col-form-label">Date of publication</label>
                    <div className="col-sm-10">
                        <input type="textarea"
                            className="form-control"
                            id="dateOfPublication"
                            name="dateOfPublication"
                            onChange={this.handleChange}
                            value={this.state.dateOfPublication}
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.add}>Add</button> 
            </form>
        </div>
      );
    }

    initState(){
        return {
            title: '',
            author: '',
            summary: '',
            price: '',
            dateOfPublication: ''};
    }
  }

  
export default BookForm;