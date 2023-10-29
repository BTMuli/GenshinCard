<template>
  <div class="card-box">
    <div class="card-container">
      <img :src="getCardBg" alt="bg" class="card-bg" />
      <img :src="getCardFg" alt="fg" class="card-fg" />
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
  width: 256px;
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.card-fg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
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
