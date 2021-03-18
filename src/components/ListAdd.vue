<template>
 <!-- サブミットイベント時にaddListメソッドをハンドルしている。 -->
 <!-- .preventはVueのイベント修飾詞であり、サブミット時にリロードされるのを防ぐ。 -->
 <form class="addlist" @submit.prevent="addList">
    <!-- v-modelはv-onとv-bindの2つの機能を持ち合わせている -->
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
  }  
}
</script>