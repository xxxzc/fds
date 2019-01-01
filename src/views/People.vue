<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title center-title">
          People
        </h1>
      </div>
    </div>
  </section>
  <div class="container">
  <h1 class="center-title title" style="margin-top: 20px; font-size: 24px;">
  Instructor
  </h1>
  <div class="columns is-mobile is-multiline is-centered">
  <div class="column is-three-quarters-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
          <img class="is-rounded" :src="instructor.head" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{instructor.name}}</p>
          <p class="subtitle is-6">{{instructor.email}}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <h1 class="center-title title" style="margin-top: 20px; font-size: 24px;">
  TAs
  </h1>
  <div class="columns is-mobile is-multiline is-centered">
  <div class="column is-three-quarters-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="ta in tas" :key="ta.name">
  <div class="card">
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img class="is-rounded" :src="ta.head" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{ta.name}}</p>
            <p class="subtitle is-6">{{ta.email}}</p>
        </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'people',
  data: () => ({
    instructor: {
      name: "Zhenyu Chen",
      email: "zychen@nju.edu.cn",
      head: "http://www.iselab.cn/static/imgs/photos/faculty/ZhenyuChen_disp.jpg"
    },
    tas: [
      {
        name: "Zicong Xie", email: "xiuscong@gmail.com",
        head: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
      },
      {
        name: "?", email: "?@nju.edu.cn",
        head: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
      },
    ]
  })
}
</script>

<style scoped>
.center-title {
  text-align: center
}

.card {
  margin-top: 10px
}
</style>

