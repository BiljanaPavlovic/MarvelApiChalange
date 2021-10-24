const URL =
    //"http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9afc68bdf996de4ff15b4a3e8d52b215&hash=c8faf2c4d0fe4d7f477c4e7f2901fd1d"
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=485f93e50e06dc2ca9a511f4658d925c&hash=5adf938555664e1f9c48a993eacbbecc";

export default function get() {
    return fetch(`${URL}`)
        .then((res) => res.json())

}


