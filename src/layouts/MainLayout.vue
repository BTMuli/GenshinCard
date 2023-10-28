<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Genshin Card </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="keyboard_arrow_up" direction="up" color="accent" vertical-actions-align="right">
        <q-fab-action
          :label="$t('changeLang')"
          label-position="left"
          @click="changeLang"
          color="primary"
          icon="language"
        />
      </q-fab>
    </q-page-sticky>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EssentialLink, { EssentialLinkProps } from "components/EssentialLink.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const essentialLinks: EssentialLinkProps[] = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);
const footerFab = ref(true);

function onClick() {
  footerFab.value = true;
}

function changeLang() {
  if (locale.value === "en") {
    locale.value = "zh";
  } else {
    locale.value = "en";
  }
  localStorage.setItem("lang", locale.value);
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
