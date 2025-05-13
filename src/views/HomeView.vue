<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Budget App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-6">Manage your budget</h1>
        <p class="text-lg text-center mb-8">Simple and intuitive app for tracking your expenses and managing your budget</p>

        <div class="flex justify-center space-x-4">
          <ion-button router-link="/login" expand="block" class="w-32">Log in</ion-button>
          <ion-button router-link="/register" expand="block" color="secondary" class="w-32">Register</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue";
</script>
