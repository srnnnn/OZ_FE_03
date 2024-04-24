//상수도 exports 가능
// module.exports.A = 1

//export 방법 1
function encrypt(data){
    return "encrypted data"
}

// //export 방법 2
// //module은 생략가능
// module.exports.encrypt = function encrypt(data){
//     return "encrypted data"
// }

// //export 방법3 (defualt로)
// module.exports = function encrypt(data){
// }


function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`${encryptedData} is being sent to ${url}`)
}
// module.exports = {
//     send
// }
export {
    send
}