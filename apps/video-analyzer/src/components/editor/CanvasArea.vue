<template>
  <div class="flex-grow relative">
    <div class="absolute top-0 left-0 w-full h-full">
      <v-stage 
        :config="stageConfig"
        @mousedown="startNewLine"
        @mousemove="updateCurrentLine"
        @mouseup="finishLine"
      >
        <v-layer>
          <!-- Render all completed lines -->
          <v-line 
            v-for="(line, index) in lines"
            :key="index"
            :config="line"
          />
          <!-- Render the temporary line while drawing -->
          <v-line 
            v-if="currentLine"
            :config="currentLine"
          />
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {});

</script>
<script>
  export default {
  data() {
    return {
      stageConfig: { width: 200, height: 200 },
      lines: [],
      currentLine: null,
    };
  },
  methods: {
    startNewLine(event){
      const pos = this.getPointerPosition(event);
      this.currentLine = {
        points: [pos.x, pos.y, pos.x, pos.y],
        stroke: 'red',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round',
      };
    },
    updateCurrentLine(event) {
      if (!this.currentLine) return;

      // Get the current mouse position
      const pos = this.getPointerPosition(event);

      // Ensure reactivity by creating a new object reference
      this.currentLine = {
        ...this.currentLine, // Copy existing properties
        points: [this.currentLine.points[0], this.currentLine.points[1], pos.x, pos.y], // Update end point
      };
    },
    finishLine() {
      if (!this.currentLine) return;

      // Add the finished line to the list
      this.lines.push(this.currentLine);

      // Clear the temporary line
      this.currentLine = null;
    },
    getPointerPosition(event) {
      return event.target.getStage().getPointerPosition();
    },
  }
};
</script>