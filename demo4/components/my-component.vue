<template>
   <div>
        <div>这里是my-component内容</div>
        <button @click="counter++">{{counter}}</button>
   </div>
</template>

<script>
export default{
    data: function(){
        return {
          counter: 0,
        }
    }

}

</script>