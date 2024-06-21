const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}${daySuffix}, ${year}`;

    return formattedDate;
};

const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

export default formatDate;