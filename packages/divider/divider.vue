<template>
  <div
    class="mw-divider"
    :class="[hasSlot && `mw-divider--${position}`, direction && `mw-divider--${direction}`, dashed && 'mw-divider--dashed', dotted && 'mw-divider--dotted']"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-divider",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    position: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: false
    },
    dotted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return this.$slots.default;
    }
  },
  data() {
    return {};
  }
};
</script>
