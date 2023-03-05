<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <article class="blog-card">
          <div class="blog-card__background">
            <div class="card__background--wrapper">
              <div class="card__background--main">
                <img src="~/public/image/blog/teo-cover.png" alt="">
                <div class="card__background--layer"></div>
              </div>
            </div>
          </div>
          <div class="blog-card__head">
            <span class="date__box">
              <span class="date__day">11</span>
              <span class="date__month">JAN</span>
            </span>
          </div>
          <div class="blog-card__info">
            <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
            <p class="info-blog">
              <a href="#" class="icon-link"
                ><div class="icon"><font-awesome-icon icon="fa-regular fa-pen-to-square" /></div>
                Tony Jahson</a
              >
              <a href="#" class="icon-link"
                ><div class="icon"><font-awesome-icon icon="fa-solid fa-comments" /></div>
                150</a
              >
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias
              dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!
            </p>
            <div class="btn-with-icon">
              <div class="icon"><font-awesome-icon icon="fa-solid fa-arrow-right" /></div>
              <span>READ MORE</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  <section class="detail-page">
    <div class="container mt-5"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.date__box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  border: 4px solid;
  font-weight: bold;
  padding: 5px 10px;
  .date__day {
    font-size: 22px;
  }
}
.blog-card {
  padding: 30px;
  position: relative;
  .date__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
  }
  .blog-card__background,
  .card__background--layer {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .blog-card__background {
    padding: 15px;
    background: white;
  }
  .card__background--wrapper {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
  }
  .card__background--main {
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(#333, 0.9);
    transition: 300ms ease-in-out;
  }
  .blog-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-card__info {
    z-index: 10;
    background: white;
    padding: 20px 15px;
    h5 {
      transition: 300ms ease-in-out;
    }
    .info-blog {
      display: flex;
    }
  }
  &:hover {
    .date__box {
      opacity: 1;
      transform: scale(1);
    }
    .card__background--main {
      transform: scale(1.2) rotate(5deg);
    }
    .card__background--layer {
      opacity: 1;
    }
    .blog-card__info {
      h5 {
        color: $primary;
      }
    }
  }
}

a.icon-link {
  display: flex;
  margin-right: 55px;
  color: $text-color;
  transition: 200ms ease-in-out;
  .icon {
    color: $primary;
    margin-right: 5px;
  }
  &:hover {
    color: $primary;
    text-decoration: none;
  }
}
.btn-with-icon {
  display: flex;
  width: fit-content;
  padding-right: 15px;
  border: 1px solid $dark-color;
  cursor: pointer;
  .icon {
    padding: 0px 30px 0px 15px;
    margin-right: 10px;
    height: 50px;
    line-height: 50px;
    vertical-align: bottom;
    color: white;
    background: $primary;
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
  }
  &:hover {
    background: $primary;
    color: #fff;
  }
  span {
    display: flex;
    align-items: center;
  }
}
</style>
