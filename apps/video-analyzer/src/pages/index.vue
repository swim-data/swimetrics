<template>
  <div class="flex w-full h-full">
    <VideoEditor class="basis-9/12" />
    <Sidebar class="basis-3/12" />
  </div>
</template>
<script setup lang="ts">
import VideoEditor from '../components/VideoEditor.vue';
import Sidebar from '../components/editor/Sidebar.vue';
</script>
