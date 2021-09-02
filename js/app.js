const searchBook = () =>{
    const bookName = document.getElementById("bookInput").value;
    const bookNameSearch = bookName.toLowerCase();
    const url = `https://openlibrary.org/search.json?q=${bookNameSearch}`
    fetch(url)
    .then(res => res.json())
    .then(data => bookCart(data.docs))
    // ------ Clear Input -----
    bookInput.value = '';
};
const bookCart = (books) => {
    document.getElementById("bookQuantity").innerText = books.length;
    const booksContainer = document.getElementById("booksCart");
    const bookSlice = books.slice(0,15);
    document.getElementById("searchResult").innerText = bookSlice.length;
    // ------ Clear Previous data -----
    booksContainer.textContent = '';
    bookSlice.forEach((book) =>{
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-title">Name : ${book.title}</h4>
                  <h6 class="card-text">Author Name : ${book.author_name[0]}</h6>
                  <p>Publisher : ${book.publisher[0]}</p>
                  <p>Published In : ${book.first_publish_year}</p>
                </div>
              </div>
        `
        booksContainer.appendChild(div);
    });
};