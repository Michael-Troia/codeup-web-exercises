// 45e16b5f730e14c68dbf19df0f63b6b4495b76e3

function getData(prompt) {
    return fetch(`https://api.github.com/users/${prompt}/events`, {headers: {'Authorization': 'token 45e16b5f730e14c68dbf19df0f63b6b4495b76e3'}})
        .then(response => response.json())
}
getData(prompt('Please enter a username to search')).then(data => { console.log(data[0].created_at)})

function wait(num){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (num*1 !== 1000 && Number(num)){
                resolve(`its ${num/1000} seconds`)
            } else if (num*1 == 1000){
                resolve(`its ${num/1000} second`)
            } else reject(`Try again, bucko.`)
        },num)
    })
}

wait(prompt('gimme a number')).then(message => console.log(message))