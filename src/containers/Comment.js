import React,{ Component } from 'react';
import Form from '../components/Form'

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      newComment:this.props.children
    }
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  edit(){
    this.setState({editing: true});
  }
  remove(){
    console.log('Removing Comment');
    this.props.deleteFromBoard(this.props.index);
  }
  save(){
    this.props.updateCommentText(this.state.newComment,this.props.index);
    this.setState({editing: false});
  }
  handleChange(event) {
    this.setState({newComment:event.target.value});
  }
  listing(){
    return (
      <div className="commentContainer">
        <div className="commentTest">{this.props.children}</div>
        <button onClick={this.edit} className="button-primary">Edit</button>
        <button onClick={this.remove} className="button-danger">Remove</button>
      </div>
    );
  }

  renderForm(){
    return (
      <div className="commentContainer" ref="newText">
        <Form name={this.props.index.toString()} comment={this.state.newComment} onSave={this.save} onHandle={this.handleChange}></Form>
      </div>
    );
  }

  render() {
    if(this.state.editing){
      return this.renderForm();
    }else{
      return this.listing();
    }
  }
}

export default Comment;
