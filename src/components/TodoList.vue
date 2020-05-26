<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:index="index"
        v-bind:key="todo.id"
        v-on:remove-todo="removeTodo"
      >
      </TodoItem>
    </ul>
  </div>
</template>

<script>

import TodoItem from '@/components/TodoItem';

export default {
  // В props (properties) указываем, какие элементы принимает из корневого элемента
  props: ['todos'], // название должно совпадать с тем, что передаётся в v-bind
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      // id передан из TodoItem.vue
      // Теперь нам нужно передать событие удаления в родительские компонент App.vue аналогичным образом
      
      this.$emit('remove-todo', id);
    }
  }
}
</script>

<style scoped>
/* scoped позволяет стилям быть видными только внутри этого компонента */

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>