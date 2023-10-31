<template>
  <div class="card-box">
    <div class="card-container">
      <div class="ccn-top">这里放顶部花纹</div>
      <div class="ccn-mid">
        <img :src="getCardBg" alt="bg" class="card-bg" />
        <img :src="getCardFg" alt="fg" class="card-fg" />
        <div class="ccm-lb-star">
          <img alt="star" v-for="n in starNum" :key="n" src="/genshin/star.png" />
        </div>
      </div>
      <div class="ccn-bottom">这里放底部说明</div>
    </div>
    <div class="card-select">
      <div class="card-select-line" v-for="item in GenshinConfig" :key="item.type">
        <div class="csl-title">{{ $t(item.title) }}</div>
        <q-radio
          v-for="select in item.list"
          :key="select.label"
          v-model="cardVal[item.type]"
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
import { SelectType } from "src/plugins/Genshin/interface";

const starNum = ref(5);

const cardVal = ref<SelectType>({
  bgColor: "NONE",
  fgColor: "ITEM",
});

const getCardBg = computed(() => {
  return `../src/assets/genshin/BGC_${cardVal.value.bgColor}.png`;
});
const getCardFg = computed(() => {
  return `../src/assets/genshin/SIGN_${cardVal.value.fgColor}.png`;
});
</script>

<style lang="css" scoped>
.card-container {
  width: 450px;
  position: relative;
}

.ccn-top {
  width: 100%;
  position: relative;
  aspect-ratio: 12 / 1;
  background-color: rgba(175, 107, 60, 0.76);
}

.ccn-mid {
  position: relative;
  width: 100%;
  aspect-ratio: 12 / 5;
}

.ccm-lb-star {
  position: absolute;
  left: 5%;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
}

.ccm-lb-star img {
  width: 30px;
  height: 30px;
}

.card-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.card-fg {
  aspect-ratio: 1 / 1;
  height: 80%;
  top: 10%;
  right: 10%;
  position: absolute;
  z-index: 2;
}

.ccn-bottom {
  width: 100%;
  aspect-ratio: 6 / 5;
  position: relative;
  background-color: #e8e4d8;
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
