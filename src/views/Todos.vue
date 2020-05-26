<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Back home</router-link>
    <hr>
    <AddTodo
      @addTodo="addTodo"
    ></AddTodo>
    
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>

    <hr>
    <Loader v-if="loading"></Loader>
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    ></TodoList>
    <p v-else>No todos!</p>
  </div>
</template>


<script>
// @ всегда указывает на папку src
// Для использования компонентов их нужно ипортировать и зарегистрировать в components
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  // Тут регистрируем компоненты
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  
  // lifecycle hooks. 
  // Mounted - когда весь компонент подотовел html-шаблон и поменстил в DOM
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => {
        return response.json();
      })
      .then(json => {

        // Timeout для тестирования лоадера
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      })
  },
  // Используется для отслеживания изменения элементов.
  // Название функций должно быть идентично названию переменной v-model
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   }
  // },

  // Вычисляемые свойства
  // В компьютед функциях мы описиываем логику, которая зависит от моделей или переменных компоненте.
  // На самом деле функции, указанные в компьютед, можно использовать как переменные
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }

      if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed);
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(todo => !todo.completed);
      }
    }
  },
  // Используемые методы
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    
    addTodo(newTodo) {
      this.todos.push(newTodo);
      // console.log(newTodo);
    }
  }
}
</script>