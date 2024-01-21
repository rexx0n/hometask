const options = {
    name:'test',
    width: '1024',
    height: '1024',
    color: {
        border: 'black',
        background: 'red',
    }
}
delete options.name
console.log(options)
for (let key in options) {

}