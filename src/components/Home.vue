<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p>
      Wellcome to Holocore, the site for
    </p>
  </div>
</template>

<script>
export default {
  name: 'Holocore',
  props: {
    msg: String
  }
}
</script>
