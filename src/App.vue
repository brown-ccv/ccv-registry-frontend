<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'workshops' }">Workshops</router-link>|
      <router-link :to="{ name: 'software' }">Software</router-link>|
      <router-link :to="{ name: 'talks' }">Talks</router-link>
    </div>
    <router-view />
  </div>
</template>
