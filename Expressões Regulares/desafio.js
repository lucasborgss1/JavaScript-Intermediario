function formatDate(date) {
    return date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1");
}

console.log(formatDate("01/11/2003"));
