<script setup lang="ts">
</script>

<template>
	<div class="separator">
		<span>или</span>
	</div>
</template>

<style scoped lang="scss">
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
  margin: 0 8px;
}

.separator span {
  font-weight: 500;
  white-space: nowrap;
}
</style>
