<template>
  <div class="wrapper">
  <div class="cover">
    <img src="../assets/images/logo.png" class="logo" alt="">
    <div class="cover-search">
      <input type="text" v-model="recId" class="input-rec" placeholder="Please input your REC serial number to check its origin" >
      <div @click="handleCheckRec" class="btn-search" id="btn-search"></div>
      <div class="invalid-rec" v-if="isInvalid">Invalid REC ID</div>
    </div>
  </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
const recId = ref('')
const isInvalid = ref(false)
const validateRec = ((recId)=>{
  if (
      recId == '' ||
      recId.split("-").length < 8 ||
      // (recId.split("-")[0] !== "TIGR" && recId.split("-")[0] !== "IREC") 
      // // ||
      parseInt(recId.split("-")[4]) < 0 ||
      parseInt(recId.split("-")[4]) > 12 ||
      parseInt(recId.split("-")[5] < 1980) ||
      parseInt(recId.split("-")[5]) > new Date().getFullYear()
    ) {
      console.log('vo day');
      return true;
    }
    return false;
})
const handleCheckRec = ()=>{
  const recIdArr = recId.value.split("-")
  const assetId = recIdArr[1]
  console.log(recIdArr);
  isInvalid.value = validateRec(recIdArr)
  if(!isInvalid.value){
    getData('https://devtrade.trecs.ai/tigrs/', assetId)
    .then(data => {
      console.log('Success:', data);
    }).catch(error => {
        console.error('Error:', error);
    });
  }


  //TIGR-1177-MY-04-10-2020-3048-145
}
async function getData(url = '', assetId) {
  const response = await fetch(url+assetId, {
    method: 'GET',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
  });
  return response.json();
}
</script>

<style scoped></style>
