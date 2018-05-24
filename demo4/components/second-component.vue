<template>
   <div>
        <button @click="handleIncrease">+1</button>
        <button @click="handleReduce">-1</button>
   </div>
</template>

<script>
export default{
    data: function(){
        return {
          counter: 0,
        }
    },

    methods: {
        handleIncrease: function(){
            this.counter++;
            this.$emit('increase',this.counter);
        },

        handleReduce: function(){
            this.counter--;
            this.$emit('reduce',this.counter);
        }
    }

}

</script>