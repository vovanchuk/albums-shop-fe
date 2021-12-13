<template>
  <b-navbar toggleable="sm">
    <b-navbar-brand to="/">LOGO</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown
          text="Szablony">
            <b-dropdown-item to="/templates/wedding">Ślubne</b-dropdown-item>
            <b-dropdown-item to="/templates/occasion">Okazjonalne</b-dropdown-item>
            <b-dropdown-item to="/templates/trip">Podróżnicze</b-dropdown-item>
            <b-dropdown-item to="/templates/kids">Dziecięce</b-dropdown-item>
            <b-dropdown-item to="/templates/birthday">Urodzinowe</b-dropdown-item>
            <b-dropdown-item to="/templates/person">Dla specjalnej osoby</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="#">Kontakt</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="$auth.loggedIn" class="ml-auto">
        <b-nav-item-dropdown :text="'Witaj '+ $auth.user.email +' !'" right>
            <b-dropdown-item>Ustawienia konta</b-dropdown-item>
            <b-dropdown-item @click="$auth.logout()">Wyloguj</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item to="/login">Zaloguj się</b-nav-item>
        <b-nav-item to="/register">Zarejestruj się</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
