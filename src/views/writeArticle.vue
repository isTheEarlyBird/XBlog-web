<template>
    <div class="write_article">
      <form>
        <mavon-editor v-model="value"/>
      </form>
    </div>
</template>
<script>
export default {
  name: 'WriteArticle',
  components: {
    
  },
  data() {
    return {
      value: ""
    }
  },
}
</script>