<template>
  <div>
    <transition name="back-to-top-fade">
      <div class="vue-back-to-top" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
        <slot>
          <div class="default">
            <button class="backTop">
              <i :style="`font-size: ${this.fontSize};`" class="fa fa-chevron-up"></i>
            </button>
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
    fontSize: {
      type: String,
      default: '20px'
    }
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
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 10)))
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
  .back-to-top-fade-enter, .back-to-top-fade-leave-active{
    opacity: 0;
  }

  .vue-back-to-top{
    position: fixed;
    z-index: 1000;
    cursor: pointer;
  }

  .vue-back-to-top .default{
    width: 60px;
    text-align: center;
    line-height: 60px;
    background: #eba100;
    border-radius: 10px;
  }

  

  .backTop{
    width: 60px;
    text-align: center;
    line-height: 60px;
    background: #eba100;
    border-radius: 10px;
    border: none;
    offset: none;
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
  }
  .backTop .fa-chevron-up{
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
  }

  
  .backTop:hover .fa-chevron-up{
    top: -5px;
    position: relative;
    
  }


  .fa-chevron-up{
    
  }
</style>