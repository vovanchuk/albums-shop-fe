<template>
    <div class="login d-flex justify-content-center align-items-center py-5">
        <b-card>
            <h1 class="mb-3">LOGOWANIE</h1>
            <b-form>
                <b-form-group>
                    <b-form-input type="email" placeholder="Email"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input type="password" placeholder="Hasło"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-checkbox>Zapamiętaj mnie</b-form-checkbox>
                </b-form-group>
                <b-button block type="submit" variant="outline-primary">Zaloguj</b-button>
            </b-form>
        </b-card>
    </div>
</template>