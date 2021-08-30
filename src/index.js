
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let sort = [];
    if(typeof matrix != "undefined" && matrix != null && matrix.length > 0) {
        matrix.map((data, i) => {
            if ((i + 1) % 2 !== 0) {
                sort = sort.concat(data)
            } else {
                let rev = data.reverse()
                sort = sort.concat(rev)
            }
        })
        return sort;
    }
    else {return sort}
}
