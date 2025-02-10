<template>
  <div class="flex w-full h-full">
    <!--TODO Stack Canvas over the VideoPlayer-->
    <!--<VideoEditor class="basis-9/12 z-0 relative" />-->
    <CanvasArea class="basis-9/12 z-10 absolute top-0 left-0" />
    <Sidebar class="basis-3/12" />
  </div>
</template>
<script setup lang="ts">
import CanvasArea from '../components/editor/CanvasArea.vue';
import VideoEditor from '../components/VideoEditor.vue';
import Sidebar from '../components/editor/Sidebar.vue';
</script>
