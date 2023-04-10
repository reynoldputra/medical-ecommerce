<template>
  <div>
    <NavbarView />
    <HomePageview />
    <div class="text-5xl">Hello World</div>
    <button @click="startRecording">Start</button>
    <button @click="stopRecording">Stop</button>
    <p>{{transcript}}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavbarView from '@/components/navbarView.vue'
import HomePageview from '@/components/homepageView.vue'

export default {
  name: 'IndexPage',
  components: {
    NavbarView,
    HomePageview,
  },
  setup() {
    const isRecording = ref(false)
    const recognition = ref(null)
    const transcript = ref('')

    function startRecording() {
      if (process.client) {
        console.log("test")
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition
        recognition.value = new SpeechRecognition()
        recognition.value.start()
        recognition.value.onresult = (event) => {
          console.log(event)
          transcript.value = event.results[0][0].transcript
        }
        // Use the recognition object here
      }
    }

    function stopRecording() {
      isRecording.value = false
      recognition.value.abort()
    }

    return {
      isRecording,
      recognition,
      transcript,
      startRecording,
      stopRecording
    }
  }
}


</script>
