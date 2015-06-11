'use strict';
import React from 'react';
import $ from 'jquery';

import {CommentForm} from './comment-form.js';
import {CommentList} from './comment-list.js';

export class CommentBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        $.ajax({

            url: this.props.url,

            dataType: 'json',

            cache: false,

            success: (data) => {
                this.setState({
                    data: data
                });
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    onCommentSubmit(comment) {
        let newComments = this.state.data.concat([comment]);
        this.setState({
            data: newComments
        });
        console.log(`sending comment ${comment} to server!`);
    }

    render() {

        return (

            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.onCommentSubmit.bind(this)}/>
            </div>

        );
    }
}
