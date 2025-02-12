<template>
  <div class="flex-grow bg-gray-100 w-full relative">
    <div class="absolute top-0 left-0 w-full h-full">
      <v-stage :config="configStage">
        <v-layer>
          <v-rect :config="configRect" />
        </v-layer>
      </v-stage>
    </div>
    <div>
      {{ x }}, {{ y }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useCanvas from '../../composable/useCanvas';
import { useMouse } from '../../composable/useMouse';

const { initCanvas } = useCanvas();
const { x, y } = useMouse()


onMounted(() => {
  initCanvas();
});


</script>
<script>
  export default {
  data() {
    return {
      configStage: {
        width: 800,
        height: 600
      },
      configRect: {
        x: 22,
        y: 22,
        width: 150,
        height: 100,
        fill: 'red',
        draggable: false
      }
    };
  }
};
</script>