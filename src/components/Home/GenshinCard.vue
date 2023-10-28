<template>
  <div class="card-box">
    <div class="card-container">
      <img :src="getCardBg" alt="bg" class="card-bg" />
      <img :src="getCardFg" alt="fg" class="card-fg" />
    </div>
    <div class="card-select">
      <div class="card-select-line">
        <div class="csl-title">背景色选择</div>
        <q-radio
          v-for="key in bgSelectList"
          :key="key"
          v-model="cardBg"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          :val="CardBG[key]"
          :label="key"
        />
      </div>
      <div class="card-select-line">
        <div class="csl-title">前景色选择</div>
        <q-radio
          v-for="key in fgSelectList"
          :key="key"
          v-model="cardFg"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          :val="CardFG[key]"
          :label="key"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

enum CardBG {
  Star0 = "NONE",
  Star1 = "WHITE",
  Star2 = "GREEN",
  Star3 = "BLUE",
  Star4 = "PURPLE",
  Star5 = "ORANGE",
  Star105 = "RED",
}

enum CardFG {
  Item = "ITEM",
}

type CardBGKey = keyof typeof CardBG;
type CardFGKey = keyof typeof CardFG;

const bgSelectList: CardBGKey[] = ["Star1", "Star2", "Star3", "Star4", "Star5", "Star105"];
const fgSelectList: CardFGKey[] = ["Item"];

const cardBg = ref<CardBG>(CardBG.Star0);
const cardFg = ref<CardFG>(CardFG.Item);

const getCardBg = computed(() => {
  return `../src/assets/genshin/BGC_${cardBg.value}.png`;
});
const getCardFg = computed(() => {
  return `../src/assets/genshin/SIGN_${cardFg.value}.png`;
});

onMounted(() => {
  cardBg.value = CardBG.Star0;
  cardFg.value = CardFG.Item;
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
