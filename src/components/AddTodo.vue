<template>
    <!-- .prevent у @submit.prevent сразу отменяет действие по умолчанию -->
    <form @submit.prevent="onSubmit">
      <div class="form-container">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
      </div>
    </form>
</template>

<script>
export default {
  // Модели. Добавляется в HTML с помощью v-model, затем можно прочитать и манипулировать элементами
  // Читается потом с помощью this.название-элемента
  data() {
    return {
      title: ''
    }
  },

  methods: {
    onSubmit() {
      
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('addTodo', newTodo);
        this.title = '';
      }

    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    margin-bottom: .5rem;
  }

  .form-container {
    margin: 0 auto;
  }

  input { 
    width: 400px;
    margin-right: .5rem;
  }
</style>