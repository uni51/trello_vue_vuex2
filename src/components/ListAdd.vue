<template>
 <!-- サブミットイベント時にaddListメソッドをハンドルしている。 -->
 <!-- .preventはVueのイベント修飾詞であり、サブミット時にリロードされるのを防ぐ。 -->
 <form :class="classList" @submit.prevent="addList">
    <!-- v-modelはv-onとv-bindの2つの機能を持ち合わせている -->
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
           @focusin="startEditing"
           @focusout="finishEditing"
    >
    <button type="submit"
      class="add-button"
      v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ["addlist"];
      if (this.isEditing) {
        classList.push("active");
      }
      if (this.titleExists) {
        classList.push('addable')
      }      
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },    
  },  
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },    
  }  
}
</script>