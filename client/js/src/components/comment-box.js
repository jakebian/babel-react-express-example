'use strict';

import {CommentForm} from './comment-form.js';
import {CommentList} from './comment-list.js';

export class CommentBox extends React.Component{

    render() {

        return (

            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>

        );
    }
}
