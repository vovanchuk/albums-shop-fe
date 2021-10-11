<template>
  <b-navbar toggleable="sm">
    <b-navbar-brand href="/">LOGO</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/templates">Szablony</b-nav-item>
        <b-nav-item href="#">Kontakt</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/login">Zaloguj się</b-nav-item>
        <b-nav-item href="/register">Zarejestruj się</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>