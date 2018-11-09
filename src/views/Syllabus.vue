<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Syllabus
        </h1>
      </div>
    </div>
  </section>

  <div class="card">
    <vue-simple-markdown :source="syl"></vue-simple-markdown>
  </div>
</div>
</template>

<script>

export default {
  name: 'syllabus',
  data: () => ({
    syl: "#Hello"
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
