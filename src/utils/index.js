export default {
    formatDate(unix) {
        function fixZero(num) {
            return num >= 10 ? ("" + num) : ("0" + num);
        }
        let date = new Date(unix);
        let year = fixZero(date.getFullYear());
        let month = fixZero(date.getMonth() + 1);
        let day = fixZero(date.getDate());
        let hour = fixZero(date.getHours());
        let min = fixZero(date.getMinutes());
        let seconds = fixZero(date.getSeconds());
        let timestr = `${year}-${month}-${day} ${hour}:${min}:${seconds}`;
        return timestr;
    }
};
