<template>
    <nav class="navbar">
        <ul class="navbar-list container mx-auto">
            <li class="navbar-item">
            <router-link class="navbar-link" to="/">Home</router-link>
            </li>
            <li class="navbar-item">
            <router-link class="navbar-link" to="/about">Sobre</router-link>
            </li>
            <li class="navbar-item">
            <router-link class="navbar-link" to="/material">Materiais</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar-list {
  list-style-type: none;
  display: flex;
}

.navbar-item {
  margin: 0;
}

.navbar-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.navbar-item a:hover {
  background-color: #555;
}

</style>