// Part 1 Solution:

let number = 10;
let favNumber = 10;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

// My attempt:

axios
  .get(`${baseURL}/${number}?json`)
  .then((p1) => {
    console.log(`${p1.data.text}`);
    return axios.get(`${baseURL}/${number}/?json`);
  })
  .then((p2) => {
    console.log(`${p2.data.text}`);
    return axios.get(`${baseURL}/${number}/?json`);
  })
  .then((p3) => {
    console.log(`${p3.data.text}`);
    return axios.get(`${baseURL}/${number}/?json`);
  })
  .then((p4) => {
    console.log(`${p4.data.text}`)
    return axios.get(`${baseURL}/${number}/?json`);

  })
  .catch((err) => {
    console.log(`Error :( ${err}`);
  });

