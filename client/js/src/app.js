'use strict';

import {CommentBox} from './components/comment-box.js';


var data = [
    {
        author: 'M. F. Atiyah',
        text: 'The geometry of gauge fields'
    },
    {
        author: 'A. Hatcher',
        text: 'Algebraic geometry'
    }
];


React.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
