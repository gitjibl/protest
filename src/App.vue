<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/await">await</router-link>|
      <router-link to="/export">export</router-link>|
      <router-link to="/tree">tree</router-link>|
      <router-link to="/antd">antd</router-link>|
      <router-link to="/table">table</router-link>|
      <router-link to="/loading">loading</router-link>|
      <router-link to="/dialog">dialog</router-link>|
      <router-link to="/dialog2">dialog2</router-link>|
      <router-link to="/layer">layer</router-link>|
      <router-link to="/test">test</router-link>|
      <router-link to="/computed">computed</router-link>|
      <router-link to="/promise">promise</router-link>|
      <router-link to="/menu">menu</router-link>|
      <router-link to="/vwvh">vwvh</router-link>|
      <router-link to="/slot">slot</router-link>|
      <router-link to="/upload">upload</router-link>|
      <router-link to="/axiosJson">axiosJson</router-link>|
      <router-link to="/openlayer">openlayer</router-link>|
      <router-link to="/openlayer2">openlayer2</router-link>|
      <router-link to="/openlayer3">openlayer3</router-link>|
      <router-link to="/esriLoader">esriLoader</router-link>|
      <router-link to="/echatMapHK">echatMapHK</router-link>|
      <router-link to="/echatMapJL">echatMapJL</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/main.css";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>