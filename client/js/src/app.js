'use strict';
import React from 'react';

import {CommentBox} from './components/comment-box.js';

React.render(
    <CommentBox url='/data/data.json'/>,
    document.getElementById('content')
);
