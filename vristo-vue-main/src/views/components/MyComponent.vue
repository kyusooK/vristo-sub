<template> 
    <label> 
        12321
      <input type="text" v-model="value.name"> 
    </label>
  </template>
  
  <script> 
  export default { 
    props: { 
      'modelValue': Object, 
    },
    data: ()=>({
      'value': Object
    }),
  
    created(){
      //console.log(this.modelValue)
      this.value = this.modelValue
      console.log("test:"+this.value)
  
    } 
  
  }
  </script>
   