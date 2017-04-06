export function loginFunc(data) {
    return fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    })
    .then((res) => res.json());
}

// export function fetchUser() {
//     return fetch('https://httpbin.org/get', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json'
//         },
//         credentials: 'include'
//     })
//     .then((res) => res.json());
// }

export function fetchUser() {
    return fetch('../app/result.json')
    .then((res) => res.json());
}
