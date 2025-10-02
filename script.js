// Hàm đăng nhập
function login(event) {
  event.preventDefault();
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    alert("✅ Đăng nhập thành công! Xin chào " + found.username);
    window.location.href = "index.html";
  } else {
    alert("❌ Sai tài khoản hoặc mật khẩu!");
  }
  return false;
}

// Hàm đăng ký
function register(event) {
  event.preventDefault();
  let newUser = document.getElementById("newUser").value.trim();
  let newPass = document.getElementById("newPass").value.trim();
  let confirmPass = document.getElementById("confirmPass").value.trim();

  if (!newUser || !newPass) {
    alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
    return false;
  }
  if (newPass !== confirmPass) {
    alert("⚠️ Mật khẩu nhập lại không khớp!");
    return false;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(u => u.username === newUser)) {
    alert("⚠️ Tên đăng nhập đã tồn tại!");
    return false;
  }

  users.push({ username: newUser, password: newPass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("🎉 Đăng ký thành công! Vui lòng đăng nhập.");
  window.location.href = "login.html";
  return false;
}
