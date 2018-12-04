<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          People
        </h1>
      </div>
    </div>
  </section>
  <div class="container card">
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img class="is-rounded" src="../assets/avatar/ZhenyuChen_disp.jpg" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">Zhenyu Chen</p>
            <p class="subtitle is-6">zychen@nju.edu.cn</p>
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
  })
}
</script>

<style scoped>
.hero {
  text-align: center
}

.card {
  margin-top: 20px
}
</style>

