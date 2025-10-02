let books = JSON.parse(localStorage.getItem("books")) || [];
let bookForm = document.getElementById("bookForm");
let bookTable = document.getElementById("bookTable");

// Hiển thị danh sách
function renderBooks() {
  bookTable.innerHTML = "";
  books.forEach((book, index) => {
    bookTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
          <button class="edit" onclick="editBook(${index})">Sửa</button>
          <button class="delete" onclick="deleteBook(${index})">Xóa</button>
        </td>
      </tr>
    `;
  });
}

// Thêm hoặc cập nhật sách
bookForm.onsubmit = function(e) {
  e.preventDefault();
  let id = document.getElementById("bookId").value;
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;

  if (id === "") {
    books.push({ title, author, year });
  } else {
    books[id] = { title, author, year };
  }

  localStorage.setItem("books", JSON.stringify(books));
  bookForm.reset();
  document.getElementById("bookId").value = "";
  renderBooks();
};

// Sửa sách
function editBook(index) {
  document.getElementById("bookId").value = index;
  document.getElementById("title").value = books[index].title;
  document.getElementById("author").value = books[index].author;
  document.getElementById("year").value = books[index].year;
}

// Xóa sách
function deleteBook(index) {
  if (confirm("Bạn có chắc muốn xóa sách này?")) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
  }
}

// Gọi khi load
renderBooks();
