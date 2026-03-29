document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Por favor completa todos los campos");
    return;
  }

  // Aquí iría la lógica para conectarse con tu backend
  console.log("Usuario:", username, "Contraseña:", password);

  // Simulación de login exitoso
  alert("¡Bienvenido " + username + "!");
});

