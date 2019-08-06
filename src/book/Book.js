import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class Book extends Component{
    constructor(){
        super();
        this.state = {
            editMode:false,
            book :this.props};
        this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.book !== state.book) {
          return {
            book: props.book
          };
        }
        return null;
      }

    handleChange = (event)=> {
        const target = event.target;
        const name = target.name;
        let book = this.state.book;
        book[name] =target.value;
        this.setState({
            book :{book}
        });
    }

    handleChangeDate = (value)=> {
        var dateParsed = Date.parse(value);
        let book = this.state.book;
        book.dateOfPublication =dateParsed;
        this.setState({
            book :{book}
        });
    }

    render(){
        return (<tr key={this.state.book.id}>
            <td>
                {
                    this.state.editMode?
                    <input type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={this.handleChange}
                    value= {this.state.book.title}/>: this.state.book.title
                }
            </td>
            <td>
                 {
                    this.state.editMode?
                    <input type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    onChange={this.handleChange}
                    value= {this.state.book.author}/>:
                    this.state.book.author
                 }
            </td>
            <td>
                {
                    this.state.editMode?
                    <input type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    onChange={this.handleChange}
                    value= {this.state.book.summary}/>:
                    this.state.book.summary
                 }
            </td>
            <td>
                {
                    this.state.editMode?
                    <input type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={this.handleChange}
                    value= {this.state.book.price}/>:
                    new Intl.NumberFormat('fr-FR', 
                    { style: 'currency', currency: 'EUR' }).format(this.state.book.price)
                 }
            </td>
            <td>
                {
                    this.state.editMode?
                    <DatePicker
                        selected={this.state.book.dateOfPublication}
                        onChange={this.handleChangeDate}
                        dateFormat='yyyy-MM-dd'
                    />:
                    new Intl.DateTimeFormat('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: '2-digit' 
                        }).format(this.state.book.dateOfPublication)
                 }
            </td>
            <td>
                {
                    this.state.editMode? <button type="button" className="btn btn-success" onClick={this.update}>Update</button>
                    : <button type="button" className="btn btn-primary" onClick={this.changeToEditMode}>Edit</button>
                }
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button>
            </td>
          </tr>)
    }

    changeToEditMode = () =>{
        this.setState({editMode:true})
    }

    update = ()=>{
        console.log(this.state.book);
        this.props.onUpdate(this.props.book);
        this.setState({editMode:false})
    }
    delete = () =>{
        this.props.onDelete(this.props.book);
    }
}

export default Book;