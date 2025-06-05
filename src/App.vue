<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="">
      <nav>
        <RouterLink class="text-xl" to="/">Home</RouterLink>
        <div class=" inline-flex m-auto text-xl font-bold p-4">
          LLZP
        </div>
      </nav>
    </div>
    <div class="border-t-4 border-[#C1121F] w-full">
      <div class=" float-end font-semibold text-xl">Latvijas Labākais Ziņu portāls</div>
    </div>
  </header>

  <main class=" my-8">
   <RouterView />
  </main>

</template>

<style scoped>
header{
  width: 100%;
  max-height: 5rem;
 
}

nav{
  columns: auto auto;
  padding: auto;
}

nav a{
  display: inline-block;
  padding: 0.5rem 1.8rem;
  color: black;
  font-weight: 700;
}

nav a:hover{
  color: #780000;
  text-decoration: underline;
}
</style>
