const searchBook = () =>{
    const bookName = document.getElementById("bookInput").value;
    const BookNameSearch = bookName.toLowerCase();
    const url = `https://openlibrary.org/search.json?q=${BookNameSearch}`
    fetch(url)
    .then(res => res.json())
    .then(data => bookCart(data.docs))
    // ------ Clear Input -----
    bookInput.value = '';
};
const bookCart = (books) => {
    document.getElementById("bookQuantity").innerText = books.length;
    const booksContainer = document.getElementById("booksCart");
    const bookSlice = books.slice(0,24);
    
    bookSlice.forEach((book) =>{
        // const bookSlice = book.slice(0, 25);
        // const bookLength = bookSlice.length;
        // const result = book.length;
        console.log(book.length);
    });
}; 