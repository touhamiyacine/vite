<script setup>
import headerVue from './components/header.vue';  
import sidebarVue from './components/sidebar.vue';
import ContentVue from './components/content.vue';


import './style.css';

</script>

<template>
   <div class="  relative  min-h-screen flex" >
  <sidebarVue></sidebarVue>
  <div class="flex-1">
   
    <headerVue></headerVue>
	<ContentVue></ContentVue>
	
</div>



</div>
 



</template>




