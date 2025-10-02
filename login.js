function login(event) {
  event.preventDefault();
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  // Lấy danh sách user từ localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Thêm tài khoản admin mặc định
  users.push({ username: "admin", password: "admin" });

  // Kiểm tra đăng nhập
  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("currentUser", user); // Lưu user đang đăng nhập
    alert("Đăng nhập thành công! Xin chào " + user);
    window.location.href = "index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
  return false;
}
