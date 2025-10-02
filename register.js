function register(event) {
  event.preventDefault();
  let user = document.getElementById("newUsername").value.trim();
  let pass = document.getElementById("newPassword").value.trim();
  let confirm = document.getElementById("confirmPassword").value.trim();

  if (pass !== confirm) {
    alert("Mật khẩu xác nhận không khớp!");
    return false;
  }

  // Lấy danh sách user từ localStorage (nếu có)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra username đã tồn tại chưa
  if (users.find(u => u.username === user)) {
    alert("Tên đăng nhập đã tồn tại!");
    return false;
  }

  // Thêm user mới
  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Bạn có thể đăng nhập.");
  window.location.href = "login.html";
  return false;
}
