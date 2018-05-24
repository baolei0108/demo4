<template>
<div class="daily">

    <my-component></my-component>
    <my-component></my-component>
    
    <input type="text" v-model="parentMessage"></input>
    <component is="first-component" :waring-text="parentMessage"></component>

    <table>
       <tbody is="first-component" waring-text="提示信息"></tbody>
    </table>

    总数：{{total}}
    <second-component
      @increase="handleGetTotal"
      @reduce="handleGetTotal"></second-component>

    <third-component>
        <p>父组件--分发更多的内容</p>
    </third-component>


    <!-- 数字输入框组件 -->
    <input-number v-model="value" :max="10" :min="0"></input-number>

    
</div>


</template>




<script>
   import $ from './libs/util';
   import myComponent from './components/my-component.vue';
   import firstComponent from './components/first-component.vue';
   import secondComponent from './components/second-component.vue';
   import thirdComponent from './components/third-component.vue';
   import inputNumber from './components/input-number.vue';

   export default{
       components:{myComponent,firstComponent,secondComponent,thirdComponent,inputNumber},
       data(){
           return {
               parentMessage: '',
               total: '0',
               value: 5
           }

       },

       methods: {
           handleGetTotal: function(total){
               this.total=total;

           }
        


       },

       
}

</script>