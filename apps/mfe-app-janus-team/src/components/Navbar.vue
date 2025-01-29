<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
            <a class="navbar-link" href="protected/janus/">Home</a>
            </li>
            <li class="navbar-item">
            <a class="navbar-link" href="protected/janus/about">Sobre</a>
            </li>
            <li class="navbar-item">
            <a class="navbar-link" href="protected/janus/material">Materiais</a>
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
    gap: 1rem;
    margin: 0;
    padding: 0;
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
</style>