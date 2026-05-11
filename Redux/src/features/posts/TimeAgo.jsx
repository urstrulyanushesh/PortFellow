import { formatDistanceToNow, parseISO } from "date-fns";
import React from 'react';

// 1. Fix the prop spelling to 'timestamp' for consistency
const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''; // 2. Use a lowercase variable name 'timeAgo'
    
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        // 3. Assign the string to the local variable 'timeAgo', NOT 'TimeAgo'
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
}

export default TimeAgo;