<template>
   <div>
        <slot>
            <p>如果父组件没有</p>
        </slot>
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