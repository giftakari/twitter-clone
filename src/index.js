import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar() {
  return (
    <img src="https://media.licdn.com/dms/image/C5603AQEKdkQ-sDquSQ/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=taKD3bWTM8s-b_rMRw9tsgCNb3ggcXfmFCKJ3eEhw4g"
      className="avatar" alt="avatar" />
  );
}

function Message() {
  return (
    <div className='message'>
      This is less than 140 Xters
    </div>
  )
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Godsgift</span>
      <span className="handle">@giftakari</span>
    </span>
  )
}

const Time =() => (
  <span className='time'>3hr Ago</span>
)

const ReplyButton =() => (
  <i className='fa fa-reply reply-button' />
)

const RetweentButton = () => (
  <i className='fa fa-retweet retweet-button' />
)

const LikeButton = () => (
  <i className ="fa fa-heart like-button" />
);

const MoreOptionsButton = () =>(
  <i className= "fa fa-ellipsis-h more-options-button "/>
)

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className="content">
        <NameWithHandle /><Time/>
        <Message />
        <div className="buttons">
          <ReplyButton/>
          <RetweentButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>

        </div>
        
    </div>

        )
      }
      
ReactDOM.render(<Tweet />, document.getElementById('root'));
        
