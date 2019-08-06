import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class BookFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.initState();
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
      this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
      this.list = this.list.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }
  
    handleChangeStartDate(value) {
        this.setState({
            startDatePublication: value
        });
    }

    handleChangeEndDate(value) {
        this.setState({
            endDatePublication: value
        });
    }

    list() {
      this.props.store.list({
            title : this.state.title,
            author : this.state.author,
            summary : this.state.summary,
            price : this.state.price,
            startDatePublication : this.state.startDatePublication,
            endDatePublication : this.state.endDatePublication,
            sortBy : this.state.sortBy,
            sortByAsc : this.state.sortByAsc
        });
    }

    render() {
      return (
        <div>
            <h1>Filters</h1>
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
                    <label htmlFor="startDatePublication" className="col-sm-2 col-form-label">Start date</label>
                    <div className="col-sm-10">
                        <DatePicker
                            selected={this.state.startDatePublication}
                            onChange={this.handleChangeStartDate}
                            dateFormat='yyyy-MM-dd'
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="endDatePublication" className="col-sm-2 col-form-label">End date</label>
                    <div className="col-sm-10">
                        <DatePicker
                            selected={this.state.endDatePublication}
                            onChange={this.handleChangeEndDate}
                            dateFormat='yyyy-MM-dd'
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.list}>filter</button> 
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
            startDatePublication: '',
            endDatePublication: '',
            sortBy : '',
            sortByAsc : ''};
    }
  }

  
export default BookFilter;