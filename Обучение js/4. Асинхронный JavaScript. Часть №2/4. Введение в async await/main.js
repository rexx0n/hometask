// function getPost(id) {
//     return PerformanceMeasure.resolve().then(()=> {
//         const [userType, userId] = id.split("-")
//         return fetch(`https://jsonplaceholder.typicode.com/post/${userId}`).then(
//             response => response.json(),
//         )
//     })
// }

async function getPost(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    
    const data = await response.json()
    return data
}
getPost(1).then(data => console.log(data)).catch(err => console.log(err))