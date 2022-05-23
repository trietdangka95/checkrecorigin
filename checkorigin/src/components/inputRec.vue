<template>
  <div class="wrapper">
    <div class="cover">
      <img src="../assets/images/logo.png" class="logo" alt="" />
      <div class="cover-search">
        <input
          type="text"
          v-model="recId"
          class="input-rec"
          placeholder="Please input your REC serial number to check its origin"
        />
        <div @click="handleCheckRec" class="btn-search" id="btn-search"></div>
        <div class="invalid-rec" v-if="isInvalid">Invalid REC ID</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { url } from "../../constant/config";
const router = useRouter();
const recId = ref("");
const isInvalid = ref(false);
const finalData = ref("");
const error = ref("");
const validateRec = async (recId) => {
  if (
    recId.length < 8 ||
    parseInt(recId[4]) < 0 ||
    parseInt(recId[4]) > 12 ||
    parseInt(recId[5] < 1980) ||
    parseInt(recId[5]) > new Date().getFullYear()
  ) {
    isInvalid.value = true;
  } else {
    await getData(url, recId[1]);
    if (!finalData.value.success) {
      isInvalid.value = true;
    } else {
      isInvalid.value = false;
    }
  }
};
const handleCheckRec = async () => {
  const recIdArr = recId.value.split("-");
  validateRec(recIdArr);
  console.log(isInvalid.value);
  if (!isInvalid.value)
    router.push({
      name: "detail",
      query: { id: recId.value },
    });

  //TIGR-1177-MY-04-10-2020-3048-145
};
async function getData(url, assetId) {
  await fetch(url + assetId, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then(async (response) => {
      finalData.value = await response.json();
      if (!response.ok) {
        isInvalid.value = true;
      }
    })
    .catch((error) => console.log(error));
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/sun-rising-mountain.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.input-rec {
  width: 600px;
  height: 50px;
  left: 0px;
  top: 0px;
  border-radius: 50px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.7;
  border: 1px solid #e8e8e8;
  border-radius: 50px;
  padding-left: 30px;
  font-size: 20px;
}
.input-rec-mobile {
  height: 50px;
  width: 320px;
  left: 0px;
  top: 0px;
  border-radius: 50px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.7;
  border: 1px solid #e8e8e8;
  border-radius: 50px;
  padding-left: 30px;
  font-size: 13px;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 10px;
}

.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover-search {
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.btn-search {
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url("../assets/images/Path.png");
  background-repeat: no-repeat;
  border: 0px;
  background-position: center;
  margin-right: 10px;
}

.btn-search:hover {
  background-size: 40px;
  cursor: pointer;
}

.invalid-rec {
  left: 20px;
  color: red;
  position: absolute;
  bottom: -24px;
  font-style: italic;
}
</style>
