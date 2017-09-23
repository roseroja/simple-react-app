import React,{ Component } from 'react';
import Comment from './Comment';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
    this.add = this.add.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  add(text){
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments:arr});
  }
  removeComment(i){
    console.log('Removing comment '+ i);
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({comments:arr});
  }
  updateComment(newText, i){
    console.log('Updating comment '+ i);
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments:arr});
  }

  render() {
    return (
      <div className="MainBoard">
        <button className="button-info create" onClick={this.add.bind(null, 'This simple test.')}>Add</button>
        <div className="Board">
          {
            this.state.comments.map((text, i) => {
                return (
                <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                  {text}
                </Comment>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Board;
