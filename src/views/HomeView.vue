<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Budget App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <authenticator>
        <template v-slot="{ user, signOut }">
          <div class="text-center">
            <p class="text-xl font-semibold mb-4">Hello, {{ user.username }}!</p>
            <ion-button expand="block" @click="signOut">Sign out</ion-button>
          </div>
        </template>
      </authenticator>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue";
</script>
