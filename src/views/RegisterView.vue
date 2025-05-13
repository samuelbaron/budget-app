<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="max-w-md mx-auto mt-10">
        <h2 class="text-2xl font-bold text-center mb-6">Create an account</h2>

        <ion-input label="Email" label-placement="floating" fill="outline" type="email" placeholder="Your email" class="mb-4"></ion-input>

        <ion-input label="Password" label-placement="floating" fill="outline" type="password" placeholder="Your password" class="mb-4"></ion-input>

        <ion-input label="Confirm password" label-placement="floating" fill="outline" type="password" placeholder="Repeat password" class="mb-6"></ion-input>

        <ion-button expand="block" class="mb-4">Register</ion-button>

        <p class="text-center">
          Already have an account?
          <router-link to="/login" class="text-primary font-medium">Log in</router-link>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from "@ionic/vue";
</script>
