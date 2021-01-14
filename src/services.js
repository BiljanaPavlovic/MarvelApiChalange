
//const API = 'https://gateway.marvel.com/'
//const PUBLICKEY = '485f93e50e06dc2ca9a511f4658d925c'
//const PRIVATEKEY = 'bbdf799db540538df7081c8df69352c1a5a403fc'
//const CARACTERS = '/v1/public/characters'
//const HASH = '5adf938555664e1f9c48a993eacbbecc'

//1bbdf799db540538df7081c8df69352c1a5a403fc485f93e50e06dc2ca9a511f4658d925c
const URL =
    //  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9afc68bdf996de4ff15b4a3e8d52b215&hash=c8faf2c4d0fe4d7f477c4e7f2901fd1d"
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=485f93e50e06dc2ca9a511f4658d925c&hash=5adf938555664e1f9c48a993eacbbecc";

export default function get() {
    return fetch(`${URL}`)
        .then((res) => res.json())

}


/* drugi nalog
const PublicKey = '9afc68bdf996de4ff15b4a3e8d52b215'
const PrivateKEy = 'd20431efd6621fa590347bd0fde6fe009821b433'
const hash = c6aa9108ae183f41dc33590476533f24
Url = http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9afc68bdf996de4ff15b4a3e8d52b215&hash=c8faf2c4d0fe4d7f477c4e7f2901fd1d

*/