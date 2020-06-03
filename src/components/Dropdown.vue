<template>
  <div class="dropdown">
    <router-link
      :to="dropdownMenu.goTo"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ dropdownMenu.name }}
    </router-link>
    <div
      class="dropdown-menu dropdown-component"
      aria-labelledby="dropdownMenuButton"
    >
      <router-link
        :to="item.goTo"
        v-for="(item, index) in dropdownMenu.dropdownItems"
        :key="item"
        class="dropdown-item link-item"
      >
        {{ item.name }}
        <div
          v-if="index != dropdownMenu.dropdownItems.length - 1"
          class="dropdown-divider"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    dropdownMenu: Object,
  },
};
</script>

<style>
.dropdown-menu.dropdown-component {
  background: var(--var-navy) !important;
}

a:hover.link-item {
  background: var(--var-navy) !important;
}
</style>
