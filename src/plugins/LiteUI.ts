import type { App } from 'vue'

// export individual components
import LiteButton from '@/components/forms/LiteButton.vue'
import Accordion from '@/components/elements/Accordion.vue'

const LiteUIPlugin = {
  install: (app: App) => {
    app.component("LiteButton", LiteButton),
    app.component('Accordion', Accordion)
  }
}

export default LiteUIPlugin

