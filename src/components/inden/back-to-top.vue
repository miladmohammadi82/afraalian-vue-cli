<template>
  <div>
    <transition name="back-to-top-fade">
      <div class="vue-back-to-top" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
        <slot>
          <div class="default">
            <span>
              {{ text }}
            </span>
          </div>
        </slot>
      </div> 
    </transition>
  </div>
</template>

<script>
export default {
    
  template: '#backToTop',
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'top'
    },
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },

  methods: {
    catchScroll () {
      this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
    },
    
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled');
    }
  }
}
</script>

<style>
  .back-to-top-fade-entet-active
</style>