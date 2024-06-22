console.log("oke");

const endpoint = "https://reqres.in/api/users";
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "blablabla@bla bla bal.com",
    firstName: "hahhaha",
  }),
})
  .then((data) => data.json())
  .then((result) => console.log(result));

// async function hitAPI() {
//   const api = await fetch(endpoint);
//   const { data } = await api.json();
//   console.log(data);
// }
hitAPI();
