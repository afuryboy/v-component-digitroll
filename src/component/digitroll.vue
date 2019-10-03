<template>
    <div class="digitroll">
      <!-- <div class="num" v-for="item in numberString.length">
        <div v-for="item2 in len" :style="styObj">
          {{item2-1}}
        </div>
      </div> -->
      1234
    </div>
</template>
<script>
export default {
  name: 'digitroll',
  props: {
    option: {
      type: Object,
      required: true,
      default:() => {
        return {
          number: 0,
          format: function(number) {
            return number.toString()
          }
        }
      }
    }
  },
  data() {
    return {
      numberString: '',
      len: 10,
      styObj: {
        transitionDuration: '1s',
        transform: 'translateY(-30px)'
      }
    }
  },
  computed: {
    
  },
  mounted() {
    // this.init()
    // if (this.option.format) {
    //   this.numberString = this.option.format(this.option.number)
    // } else {
    //   this.numberString = this.option.number.toString()
    // }
    //this.roll()
  },
  methods: {
    init() {
      
    },
    roll(val,oldVal) {
      var max = Math.max(val,oldVal)
      var min = Math.min(val,oldVal)
      var diff = max - min
      for(let i=0;i<=diff;i++) {
        
      }
      this.styObj.transitionDuration = '0s'
      this.styObj.transform = 'translateY(0px)'
      setTimeout(() => {
        this.styObj.transitionDuration = '1s'
        this.styObj.transform = `translateY(-${30}px)`
      },0);
    }
  },
  watch: {
    'option.number': function(val,oldVal) {
      this.roll(val,oldVal)
    }
  }
}
</script>
<style lang="scss">
.digitroll {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: auto;
  display: flex;
}
.num {
  width: 20px;
  height: 30px;
  overflow: hidden;
  div {
    text-align: center;
    width: 20px;
    height: 30px;
    line-height: 30px;
    color: blue;
    /* transition: all 1s ease-out, */
  }
}
</style>