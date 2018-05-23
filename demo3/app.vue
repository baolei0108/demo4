<template>
<div class="daily">

    <my-component></my-component>
    <my-component></my-component>
    
    <input type="text" v-model="parentMessage"></input>
    <component is="first-component" :waring-text="parentMessage"></component>

    <table>
       <tbody is="first-component" waring-text="提示信息"></tbody>
    </table>

    
</div>


</template>




<script>
   import $ from './libs/util';
   import myComponent from './components/my-component.vue';
   import firstComponent from './components/first-component.vue';

   export default{
       components:{myComponent,firstComponent},
       data(){
           return {
               parentMessage: '',
           }

       },

       methods: {
           
        


       },

       
}

</script>