<template>
  <div class="card-box">
    <div class="card-container">
      <div
        class="ccn-top"
        :style="{
          backgroundColor: getTopBgColor,
        }"
      >
        {{ inputVal.title ?? $t("gcs-title") }}
      </div>
      <div class="ccn-mid">
        <img :src="getCardBg" alt="bg" id="card-bg" />
        <img src="/genshin/sign.png" alt="fg" id="card-sign" />
        <div id="item-type">
          {{ inputVal.type ?? $t("gcs-type") }}
        </div>
        <div id="item-star">
          <img alt="star" v-for="n in getStarNum" :key="n" src="/genshin/star.png" />
        </div>
      </div>
      <div class="ccn-bottom">
        {{ inputVal.desc ?? $t("gcs-desc") }}
      </div>
    </div>
    <div class="card-select">
      <div class="card-select-line">
        <div class="csl-title">{{ $t("gcs-select") }}</div>
        <q-radio
          v-for="select in GenshinConfig"
          :key="select.label"
          v-model="cardVal"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          :val="select.value"
          :label="select.label"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import GenshinConfig from "src/plugins/Genshin/config";

const cardVal = ref<string>("NONE");

const getTopBgColor = computed(() => {
  return GenshinConfig.find((item) => item.value === cardVal.value)?.color || "#6A727D";
});

const getStarNum = computed(() => {
  return GenshinConfig.find((item) => item.value === cardVal.value)?.star || 0;
});

const getCardBg = computed(() => {
  return `../src/assets/genshin/BGC_${cardVal.value}.png`;
});

const inputVal = ref({
  title: undefined,
  type: undefined,
  desc: undefined,
});
</script>

<style lang="css" scoped src="../assets/fonts/index.css"></style>
<style lang="css" scoped>
.card-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-container {
  width: 450px;
  position: relative;
}

.ccn-top {
  width: 100%;
  position: relative;
  aspect-ratio: 12 / 1;
  font-size: 1.5em;
  font-family: Genshin, "JetBrians mono Bold", monospace;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #e8e4d8;
  padding-left: 5%;
}

.ccn-mid {
  position: relative;
  width: 100%;
  aspect-ratio: 12 / 5;
}

#card-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

#card-sign {
  aspect-ratio: 1 / 1;
  height: 80%;
  top: 10%;
  right: 10%;
  position: absolute;
  z-index: 2;
}

#item-type {
  position: absolute;
  left: 5%;
  top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8e4d8;
  font-size: 1.2em;
  font-family: Genshin, "JetBrains mono Bold", monospace;
  z-index: 3;
}

#item-star {
  position: absolute;
  left: 5%;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
}

#item-star img {
  width: 30px;
  height: 30px;
}

.ccn-bottom {
  width: 100%;
  aspect-ratio: 6 / 5;
  position: relative;
  background-color: #e8e4d8;
  padding: 5%;
}

.card-select {
  display: flex;
  flex-direction: column;
}

.card-select-line {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.csl-title {
  margin-right: 10px;
}
</style>
