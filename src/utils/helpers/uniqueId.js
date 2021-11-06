const uniqueId = (
    counter =>
    (str = '') =>
        `${str}${++counter}`
)(0);

export default uniqueId;
