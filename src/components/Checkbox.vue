<template>
  <div class="form-group">
    <input 
      class="inp-cbx"
      type="checkbox" 
      :id="id"  
      :checked="value" 
      @change="$emit('input', $event.target.checked)"
      required>
    <label class="cbx" :for="id">
      <span>
        <svg width="11px" height="9px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: null
    }
  },
  props: ['label', 'value'],
  mounted(){
    this.id = this._uid
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  input {
    display: none;
  }
}
.cbx {
    cursor: pointer;
    user-select: none;
}

.cbx span {
    display: inline-block;
    vertical-align: middle;
}

.cbx span:first-child {
    position: relative;
    width: 17px;
    height: 17px;
    border-radius: 3px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease;
}

.cbx span:first-child svg {
    position: absolute;
    top: 2px;
    left: 1px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
}

.cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #4892b2;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
}

.cbx span:last-child {
    padding-left: 8px;
}

.inp-cbx:checked+.cbx span:first-child {
    background: #4892b2;
    border-color: #4892b2;
}

.inp-cbx:checked+.cbx span:first-child svg {
    stroke-dashoffset: 0;
}

.inp-cbx:checked+.cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
}
</style>
