Date.prototype.formatDate = function() {
    let day = this.getDate();
    let month = this.getMonth() + 1;
    let year = this.getFullYear();
    let time = this.toLocaleTimeString('en-GB'); // HH:mm:ss in 24-hour format

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}/${month}/${year} ${time}`;
}
