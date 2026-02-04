<template>
  <div class="c-billing">
    <div class="c-billing__notice">
      <h3>Billing</h3>
      <p>Billing is not available in self-hosted mode.</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.c-billing {
  &__notice {
    padding: 2rem;
    color: var(--color-font-light);
    h3 { margin-bottom: 0.5rem; }
  }
}
</style>
