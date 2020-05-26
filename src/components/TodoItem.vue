<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             v-on:change="todo.completed = !todo.completed"
             v-model="checked"
             > 
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    
    <!-- Параметры в родительский элемент передаются с помощью создания события $emit
    Первым параметро передаётся название события, втором параметр, который нужно будет обработать в помощью v-on:названиесобытия-->
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {

  data() {
    return {
      checked: this.todo.completed
    }
  },

  // В пропсах создаём элементы, котоыре принимаем из родительского компонента
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },

  // Фильтры нужны для манипуляций  с элементами. Вызываются после вертекальной черты | в шаблоне
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>


<style scoped>
  /* scoped позволяет стилям быть видными только внутри этого компонента */
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  input {
    margin-right: 1rem;
  }

  .rm {
    border: none;
    outline: none;
    background: red;
    color: #fff;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }

</style>