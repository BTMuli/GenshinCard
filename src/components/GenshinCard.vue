<template>
  <div class="card-box">
    <div class="card-container" :ref="shareRef">
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
        <img src="/genshin/sign.png" alt="sign" id="card-sign" />
        <img :src="uploadSrc" v-if="uploadSrc" alt="item" id="card-item" />
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
      <div class="csl-title">{{ $t("gcs-select") }}</div>
      <div class="card-select-line">
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
      <div class="csl-title">{{ $t("gcs-input") }}{{ $t("gcs-title") }}</div>
      <q-input v-model="inputVal.title" />
      <div class="csl-title">{{ $t("gcs-input") }}{{ $t("gcs-type") }}</div>
      <q-input v-model="inputVal.type" />
      <div class="csl-title">{{ $t("gcs-input") }}{{ $t("gcs-desc") }}</div>
      <q-input v-model="inputVal.desc" />
      <q-btn :label="$t('gcs-upload')" color="primary" @click="uploadIcon" />
      <q-btn :label="$t('gcs-reset')" color="primary" @click="resetVal" />
      <q-btn :label="$t('gcs-copy')" color="primary" @click="copyImg" />
      <q-btn :label="$t('gcs-download')" color="primary" @click="downloadImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import GenshinConfig from "src/plugins/Genshin/config";
import html2canvas from "html2canvas";

const cardVal = ref<string>("NONE");
const uploadSrc = ref<string>();
const shareRef = ref<HTMLElement>();

const getTopBgColor = computed(() => {
  return GenshinConfig.find((item) => item.value === cardVal.value)?.color || "#6A727D";
});

const getStarNum = computed(() => {
  return GenshinConfig.find((item) => item.value === cardVal.value)?.star || 0;
});

const getCardBg = computed(() => {
  return `/genshin/BGC_${cardVal.value}.png`;
});

const inputVal = ref({
  title: undefined,
  type: undefined,
  desc: undefined,
});

// reset val
function resetVal() {
  cardVal.value = "NONE";
  inputVal.value = {
    title: undefined,
    type: undefined,
    desc: undefined,
  };
}

// upload icon
function uploadIcon() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = (e.target as FileReader).result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 512;
          canvas.height = 512;
          ctx?.drawImage(img, 0, 0, 512, 512);
          uploadSrc.value = canvas.toDataURL("image/png");
        };
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}

// copy img to clipboard
async function copyImg() {
  shareRef.value = document.querySelector(".card-container") as HTMLElement;
  const canvas = await html2canvas(shareRef.value, {
    backgroundColor: null,
    scale: 2,
  });
  const buffer = new Uint8Array(
    atob(canvas.toDataURL("image/png").split(",")[1])
      .split("")
      .map((c) => c.charCodeAt(0)),
  );
  const blob = new Blob([buffer], { type: "image/png" });
  const url = window.URL.createObjectURL(blob);
  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    }),
  ]);
  alert("已复制到剪贴板");
  URL.revokeObjectURL(url);
}

// download img
async function downloadImg() {
  shareRef.value = document.querySelector(".card-container") as HTMLElement;
  const canvas = await html2canvas(shareRef.value, {
    backgroundColor: null,
    scale: 2,
  });
  const buffer = new Uint8Array(
    atob(canvas.toDataURL("image/png").split(",")[1])
      .split("")
      .map((c) => c.charCodeAt(0)),
  );
  const blob = new Blob([buffer], { type: "image/png" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "genshin-card.png";
  link.click();
  URL.revokeObjectURL(url);
}
</script>

<style lang="css" scoped src="../assets/fonts/index.css"></style>
<style lang="css" scoped>
.card-box {
  width: 100%;
  padding: 2% 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  column-gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
}

.card-container {
  width: 450px;
  max-width: 100%;
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
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 2;
}

#card-item {
  aspect-ratio: 1 / 1;
  height: 50%;
  top: 25%;
  right: 10%;
  position: absolute;
  z-index: 3;
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
  margin-bottom: auto;
  max-width: 100%;
  row-gap: 1em;
}

.card-select-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.csl-title {
  margin-right: 10px;
}
</style>
