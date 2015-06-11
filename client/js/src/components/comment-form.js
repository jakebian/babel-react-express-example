'use strict';
import React from 'react';

export class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        let [author, text] = ['author', 'text'].map(
            (refName) => React.findDOMNode(this.refs[refName]).value.trim()
        );

        this.props.onCommentSubmit({author: author, text: text});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    }

    render() {

        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post" />
            </form>
        );

    }

}
