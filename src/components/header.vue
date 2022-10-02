<template>
    <div class="bg-blue-50  px-1 py-1 ">
       <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
     
  <div><ul class="relative">
    <li class="relative" id="sidenavEx1">
      <button  class=" flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-extrabold whitespace-nowrap rounded
	   hover:text-gray-900 hover:bg-blue-50 0 ease-in-out cursor-pointer
	   "  v-on:click="dropdown()"  v-on:click-away="away()" > 
       
        <img src="../img/profile.png" class="h-8 w-8" alt="">  </button>
	<icon></icon>
      
      <ul class=" absolute bg-white right-0  accordion-collapse collapse" id="profile1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-l font-semibold text-gray-900   whitespace-nowrap rounded hover:text-gray-900 hover:bg-green-200 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Man</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-l font-semibold text-gray-900   whitespace-nowrap rounded hover:text-gray-900 hover:bg-green-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Women</a>
        </li>
      </ul>
    </li>
	
    
  </ul>

</div>
 
</div> 
     
   
    
  

    </div>
</template>
<script>
import VueClickAway from "vue3-click-away";
 
    export default {
     
		
  name: "dropdown",
  data() {

    return { 
      dropdownPopoverShow: false
    }
  },
  mounted() {

    document.querySelector("#profile1").classList.toggle("hidden");
        document.querySelector("#profile1").classList.toggle("rotate-0"); // I'm text inside the component.

},
  methods: {
     dropdown() {
        document.querySelector("#profile1").classList.toggle("hidden");
        document.querySelector("#profile1").classList.toggle("rotate-0");
      },
      away() { 
        document.querySelector("#profile1").classList.toggle("hidden");
        document.querySelector("#profile1").classList.toggle("rotate-0");
      },
      openSidebar() {
        document.querySelector(".sidebar").classList.toggle("hidden");
      }
      
  }
}
</script>