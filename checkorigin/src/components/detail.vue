<template>
  <div class="container-fuild cover-detail">
    <div class="headerDetail row">
      <div class="logoDetail col">
        <img src="../assets/images/logo.png" class="logo-detail" alt="" />
      </div>
      <div class="inputDetail col">
        <div class="search-detail">
          <span class="btn-search-detail"></span>
          <input
            type="text"
            class="input-rec-detail"
            placeholder="Check another serial number"
          />
        </div>
      </div>
    </div>
    <div class="mainDetail row">
      <div class="header-detail row">
        <div class="col-3">
          <p>Project Name</p>
          <b>{{ finalData.name }}</b>
        </div>
        <div class="line"></div>
        <div class="col-2">
          <p>Asset ID</p>
          <b>{{ finalData.id }}</b>
        </div>
        <div class="line"></div>
        <div class="col-3">
          <p>Asset Type</p>
          <b>{{ finalData.technology }}</b>
        </div>
        <div class="line"></div>
        <div class="col-3">
          <p>
            {{ `Loacation (${finalData.latitude}, ${finalData.longitude})` }}
          </p>
          <b>{{ `${finalData.region} , ${finalData.country}` }}</b>
        </div>
      </div>

      <div class="body-detail row">
        <div class="col-5 left-detail">
          <img
            :src="`../src/assets/images/${
              finalData.technology.split(' ')[0]
            }-big.png`"
            class="row img1"
            alt=""
          />
          <img src="../assets/images/Biomass-Big.png" class="row img2" alt="" />
        </div>
        <div class="col-3 detail-rec">
          <div class="row">
            <p>REC Serial Number</p>
            <b>TIGR-1177-MY-04-10-2020-3048-145</b>
          </div>
          <div class="row">
            <p>Project Online Date</p>
            <b>{{ finalData.onlineDate }}</b>
          </div>
          <div class="row">
            <p>Date of REC Generation</p>
            <b>Oct-2020</b>
          </div>
          <div class="row">
            <p>Nameplate Capacity</p>
            <b>{{ finalData.nameplateCapacity }} MW</b>
          </div>
          <div class="row">
            <p>Estimated Annual Generation</p>
            <b>{{ finalData.estimatedAnnualMwhs }} MWh</b>
          </div>
        </div>
        <div class="col-4">
          <div class="description row">
            <b style="margin-top: 10px">Asset Description:</b>
            <p>
              {{ finalData.description }}
            </p>
          </div>
          <div class="certification row">
            <img
              src="../assets/images/tigrs.png"
              class="img-certification"
              alt=""
            />
            <p>RECs Certification</p>
            <p>
              The trusted RECs are registered at The Tradable Instrument for
              Global Renewables (TIGR), a global renewable energy registry
              developed and managed by APX.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { url } from "../../constant/config";

const route = useRoute();
const finalData = ref("");
const recIdArr = route.query.id.split("-");

const assetId = recIdArr[1];
async function getData() {
  const response = await fetch(url + assetId, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
  // data = data.concat(response.json());
}
const data = getData();
const dataAll = data.then((result) => {
  finalData.value = result.data;
  console.log(finalData.value);
});

// onMounted(() => {
//   getData();
// });
</script>

<style scoped>
p {
  margin-top: 5px;
  margin-bottom: 0;
}
.cover-detail {
  overflow: hidden;
  font-size: 12px;
}
.headerDetail {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
}

.logo-detail {
  height: 8vh;
  width: auto;
  border-radius: 0px;
  margin-left: 30px;
}
.inputDetail {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
}
.search-detail {
}
.input-rec-detail {
  height: 5vh;
  width: 50vh;
  border-radius: 50px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.7;
  border: 1px solid #e8e8e8;
  border-radius: 50px;
  font-size: 2vh;
  padding-left: 15px;
}
.mainDetail {
  background-color: #f9f9f9;
  height: 100%;
  padding-left: 15vh;
  padding-right: 15vh;
}

.header-detail {
  width: 150vh;
  height: 12vh;
  margin-top: 10px;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  overflow: auto;
}
.header-detail p {
  margin-bottom: 5px;
}
.line {
  border-left: 4px solid #e8e8e8;
  height: 7vh;
  margin-top: 10px;
  width: 1px;
  padding: 0;
}
.left-detail {
  padding: 0;
}

.detail-rec > div {
  display: block;
  width: 55vh;
  height: 10vh;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-bottom: 10px;
  margin: 0 10 0 10;
}

.img1 {
  width: 80vh;
  height: 40vh;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-bottom: 10px;
  object-fit: fill;
}

.img2 {
  width: 80vh;
  height: 30vh;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-bottom: 3vh;
}

.description {
  width: 55vh;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-left: 50px;
}
.certification {
  width: 55vh;
  height: 35vh;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-left: 50px;
}

.img-certification {
  width: 80%;
  height: 40%;
  object-fit: contain;
}
</style>
