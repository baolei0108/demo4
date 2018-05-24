<template>
  <div class="input-number">
      <input type="text" :value="currentValue" @change="handleChange"></input>
      <button @click="add">+1</button>
      <button @click="reduce">-1</button>

  </div>


    
</template>


<script>
   export default{
       props: {
           max: {
               type: Number,
               default: Infinity
           },
           min: {
               type: Number,
               default: -Infinity
           },
           value: {
               type: Number,
               default:0
           }
       },

       data: function(){
           return {
               currentValue: this.value
           }
       },

       watch: {
           currentValue: function(val){
               this.$emit('input',val);
               console.log(val);
               //this.$emit('on-change',val);
           },
           value: function(val){
               this.updateValue(val);
           }
       },

       methods: {
           updateValue: function(val){
               if(val > this.max) val=this.max;
               if(val < this.min) val=this.min;
               this.currentValue=val;
           },

           add: function(){
               if(this.currentValue >= this.max){
                   return;
               }
               this.currentValue += 1;
           },

           reduce: function(){
               if(this.currentValue <= this.min){
                   return;
               }
               this.currentValue -= 1;
           },

           handleChange: function(event){
               var val = event.target.value.trim();
               var max=this.max;
               var min=this.min;

               val = Number(val);
               this.currentValue = val;

               event.target.value = this.currentValue;

               
           }
       },

       mounted: function(){
            this.updateValue(this.value);
       }
   }

</script>
