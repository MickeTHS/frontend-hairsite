<template>
  <nav>
    <div class="container">
      <div class="brand">
        <a href="./">HairPlace</a>
      </div>
      <ul class="top-menu">
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>About</a>
        </li>
        <li>
          <a href>Services</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
      </ul>
      <form action>
        <button class="btn">Sign In</button>
      </form>
      <div class="collapse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
$primaryColor: #5ec0ea;
nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 54px;
  }

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: $primaryColor;
    cursor: pointer;
    a {
      font-size: inherit;
      color: inherit;
    }
  }

  .top-menu {
    li {
      display: inline-block;
      margin: 18px 10px;

      a {
        color: #999;
        font-weight: 400;
      }
    }
  }

  form {
    .btn {
      background-color: #fff;
      border: 1px solid #42afde;
      color: #42afde;
    }
  }

  .collapse {
    display: none;
    position: relative;
    width: 20px;
    height: 14px;
    cursor: pointer;

    span {
      height: 2px;
      width: 20px;
      position: absolute;
      left: 0;
      background-color: $primaryColor;

      &:first-child {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 6px;
      }

      &:last-child {
        top: 12px;
      }
    }
  }
}

@media (max-width: 768px) {
  nav {
    .top-menu,
    form {
      display: none;
    }

    .collapse {
      display: block;
    }
  }
}
</style>
