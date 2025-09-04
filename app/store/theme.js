// /stores/theme.js
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false
  }),
  actions: {
    toggleDark() {
      this.dark = !this.dark
      document.documentElement.classList.toggle('dark', this.dark)
    }
  }
})
