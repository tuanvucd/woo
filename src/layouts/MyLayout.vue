<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          v-if="$auth.user.token"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{$t('app_name')}}
        </q-toolbar-title>

        <div v-if="$auth.user.token">
          <q-btn-dropdown
            class="glossy"
            color="deep-orange"
            :label="$t('account')"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column">
              <div class="text-h6 q-mb-md">{{$t('setting')}}</div>
              <q-toggle v-model="sound" :label="$t('sound')" />
              <q-toggle v-model="vibrate" :label="$t('vibrate')" />
              <q-toggle v-model="music" :label="$t('music')" />
            </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{$auth.user.username}}</div>

                <q-btn
                  color="primary"
                  :label="$t('logout')"
                  push
                  size="sm"
                  @click="logout"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://www.facebook.com/anh.khong.9">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
            <q-item-label caption>Developers</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  components: {
  },
  data () {
    return {
      // Check open left menu bar when is desktop browser
      // leftDrawerOpen: this.$q.platform.is.desktop
      leftDrawerOpen: false,
      sound: true,
      vibrate: true,
      music: false
    }
  },
  created () {
    if (!this.$auth.user.token && this.$route.name !== 'Login') {
      let loginRoute = {
        name: 'Login'
      }
      if (!this.$route.fullPath.includes('login')) {
        loginRoute.query = {
          previous: this.$route.fullPath
        }
      }
      this.$router.push(loginRoute)
    }
    // only for dev
    window.vat = this
  },
  methods: {
    openURL,
    logout () {
      this.$auth.logout(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>

<style lang="stylus">
.q-header.q-layout__section--marginal
  background #774446
</style>
