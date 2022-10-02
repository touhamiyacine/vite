
<template>
<div class=" relative  min-h-screen flex" >
<!--sidebar-->
<div class= " border-slate-200  text-slate-700  w-64 justify-items-center py-2 px-2 ">
 <a href=""  class=" bg-white flex items-center space-x-4 py-3 px-4">
	<img src="../img/icon.png" class="h-8 w-10"/>
 
 <span  class="text-xl font-extrabold text-blue-900 ">Gym Fast</span>
 </a>
<nav class="divide-y divide-gray-200">



	<router-link to="/Laravel"> <a class = "flex items-center py-3 px-4 space-x-8 hover:text-gray-900 hover:bg-blue-50 0 ease-in-out cursor-pointer ">
		<img src="../img/dash.png" class="h-6 w-6"/>
		<span class = "text-sm font-semibold text-gray-900 ">Dashboard</span></a> </router-link>
	<a class = "submenu-class space-x-8"><img src="../img/activities.png" class="h-6 w-6"/>
		 <span class = "text-sm font-semibold text-gray-900 ">Activities</span></a>
	<a class = "submenu-class space-x-8"> <img src="../img/coach.png" class="h-6 w-6"/>
		<span class = "text-sm font-semibold text-gray-900 ">Coachs</span></a>
    <a class = "submenu-class space-x-8"><img src="../img/members.png" class="h-6 w-6"/>
		 <span class = "text-sm font-semibold text-gray-900 ">Members</span></a>




<ul class="relative">
    <li class="relative" id="sidenavEx1">
      <a  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-extrabold whitespace-nowrap rounded
	   hover:text-gray-900 hover:bg-green-200 0 ease-in-out cursor-pointer
	   "  v-on:click="dropdown()">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
        <span class = "text-l font-semibold text-gray-900 ">Activities</span>
	<icon></icon>
      </a>
      <ul class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-l font-semibold text-gray-900   whitespace-nowrap rounded hover:text-gray-900 hover:bg-green-200 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Man</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-l font-semibold text-gray-900   whitespace-nowrap rounded hover:text-gray-900 hover:bg-green-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Women</a>
        </li>
      </ul>
    </li>
	
    
  </ul>
</nav>



  
</div>
<!--main content-->

</div>
</template>
<script>
import icon from './IconMenu.vue'
    
    export default {
		components : {
			icon
		},
  name: "dropdown",
  data() {
    return { 
      dropdownPopoverShow: false
    }
  },
  mounted() {

    document.querySelector("#collapseSidenavEx1").classList.toggle("hidden");
        document.querySelector("#collapseSidenavEx1").classList.toggle("rotate-0"); // I'm text inside the component.

},
  methods: {
     dropdown() { 
        document.querySelector("#collapseSidenavEx1").classList.toggle("hidden");
        document.querySelector("#collapseSidenavEx1").classList.toggle("rotate-0");
      },
    
      openSidebar() {
        document.querySelector(".sidebar").classList.toggle("hidden");
      }
  }
}

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .submenu-class {
    @apply flex items-center py-3 px-4  hover:text-gray-900 hover:bg-blue-50 ease-in-out cursor-pointer;
  }
}
.color-blue {
	background: #084868;
}
</style>