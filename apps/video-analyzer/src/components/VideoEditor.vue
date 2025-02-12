<template>
  <div class="video-editor p-4 flex flex-col items-center space-y-4">
    <!-- Load Video -->
    <div>
      <button
        class="btn btn-primary"
        @click="loadVideo"
      >
        Load Video
      </button>
      <input
        ref="fileInput"
        type="file"
        accept="video/*"
        class=""
        @change="handleVideoUpload"
      >
    </div>
    <!-- Video Player -->
    <div class="video-container">
      <CanvasArea class="video-player w-full max-w-4xl" />
      <video
        ref="videoPlayer"
        class="video-player w-full max-w-4xl border border-gray-300"
      />
    </div>

    <!-- Playback Controls -->
    <div class="controls flex space-x-4">
      <button class="btn" @click="playPause">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button class="btn" @click="stopVideo">Stop</button>
      <button class="btn" @click="stepBackward">Step Backward</button>
      <button class="btn" @click="stepForward">Step Forward</button>
      <label class="flex items-center space-x-2">
        <span>Playback Speed</span>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          v-model="playbackRate"
          @input="updatePlaybackRate"
        >
        <span>{{ playbackRate.toFixed(1) }}x</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CanvasArea from '../components/editor/CanvasArea.vue'

// Refs for video player and file input
const videoPlayer = ref<HTMLVideoElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

// State
const isPlaying = ref(false);
const playbackRate = ref(1);

// Load video logic
const loadVideo = () => {
  fileInput.value?.click();
};

const handleVideoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const videoUrl = URL.createObjectURL(file);
    if (videoPlayer.value) {
      videoPlayer.value.src = videoUrl;
    }
  }
};

// Playback logic
const playPause = () => {
  if (!videoPlayer.value) return;
  if (isPlaying.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const stopVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
    videoPlayer.value.currentTime = 0;
    isPlaying.value = false;
  }
};

const stepBackward = () => {
  if (videoPlayer.value) {
    videoPlayer.value.currentTime = Math.max(videoPlayer.value.currentTime - (1 / 30), 0);
  }
};

const stepForward = () => {
  if (videoPlayer.value) {
    videoPlayer.value.currentTime = Math.min(
      videoPlayer.value.currentTime + (1 / 30),
      videoPlayer.value.duration
    );
  }
};

const updatePlaybackRate = () => {
  if (videoPlayer.value) {
    videoPlayer.value.playbackRate = playbackRate.value;
  }
};
</script>

<style scoped>
.video-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
