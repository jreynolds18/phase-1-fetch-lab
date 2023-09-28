//Get all books fetched
//fetch("https://anapioficeandfire.com/api/books").then((resp) => resp.json()).then((json) => console.log(json))

//Get the 5th book in the series
//fetch("https://anapioficeandfire.com/api/books/5").then((resp) => resp.json()).then((json) => console.log(json))

//Get the 1031st character
//fetch("https://anapioficeandfire.com/api/characters/1031").then((resp) => resp.json()).then((json) => console.log(json))

//Get the page number total of all books
//fetch("https://anapioficeandfire.com/api/books")
// .then((resp) => resp.json())
// .then((json) => {
//   let totalPageCount = 0;
//   json.forEach((book, index) => {
//     totalPageCount += book.numberOfPages;
//   });
//   console.log(`Total Page Count across all books: ${totalPageCount}`);
// });

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
