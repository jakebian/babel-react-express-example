'use strict';
import React from 'react';
import {Comment} from './comment.js';

export class CommentList extends React.Component{

    render() {

        var commentNodes = this.props.data.map(
            entry => (
                <Comment author={entry.author}>
                    {entry.text}
                </Comment>
            )
        );

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );

    }

}
