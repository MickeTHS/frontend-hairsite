<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
$primaryColor: #5ec0ea;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

p,
li,
label,
a {
  font-size: 15px;
  color: #777;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

input {
  outline: none;
}

input::placeholder {
  color: #fff;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  border: none;
  background-color: rgba(0, 0, 0, 0.08);
  color: #fff;
  font-size: 14px;
  padding: 14px 28px;
  border-radius: 25px;
}

input:-internal-autofill-selected {
  background-color: rgba(0, 0, 0, 0.08) !important;
  color: #fff !important;
}

.btn {
  border: none;
  border-radius: 30px;
  background-color: $primaryColor;
  color: #fff;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
}

.container {
  padding: 0 80px;
}
</style>
