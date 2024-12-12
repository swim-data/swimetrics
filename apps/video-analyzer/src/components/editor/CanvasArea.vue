<template>
  <div ref="canvasContainerRef" class="flex-grow bg-gray-100 w-full relative">
    <canvas id="editor-canvas" class="absolute top-0 left-0 w-full h-full" />
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useCanvas from '../../composable/useCanvas';
import { useMouse } from '../../composable/useMouse';

const canvasContainerRef = ref(null);
const { initCanvas } = useCanvas();
const { x, y } = useMouse()


onMounted(() => {
  initCanvas();
});

</script>