<template>
  <div class="bg-[#EBF0FF] text-[#031550] relative w-full min-h-screen">
    <div class="flex h-screen justify-center">
      <div class="w-1/2 flex justify-center flex-col h-full px-32">
        <div class="font-inter font-[400px] text-[48px] leading-[58px]">
          Find your <span class="font-bold">Medical Product</span> here
        </div>
        <div class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </div>
      </div>
      <img
        src="../static/gambar.png"
        alt="Deskripsi gambar"
        class="w-[472px] h-[300px] m-auto"
      />
    </div>

    <div class="bg-[#EBF0FF] flex w-full justify-center pb-20">
      <div class="bg-white rounded-md w-full mx-32 px-8 flex">
        <input
          v-model="transcript"
          type="text"
          placeholder="Search your product ..."
          class="input bg-white w-full h-20"
        />
        <div class="flex ml-auto gap-4 items-center justify-center">
          <button class="btn h-12 w-12 flex justify-center items-center rounded-md bg-[#93AAF8]" @click="startRecording" >
            <svg
              width="15"
              height="20"
              viewBox="0 0 27 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 20.648C11.8929 20.648 10.5268 20.1462 9.40179 19.1424C8.27679 18.1387 7.71429 16.9199 7.71429 15.486V5.162C7.71429 3.72811 8.27679 2.50931 9.40179 1.50558C10.5268 0.501862 11.8929 0 13.5 0C15.1071 0 16.4732 0.501862 17.5982 1.50558C18.7232 2.50931 19.2857 3.72811 19.2857 5.162V15.486C19.2857 16.9199 18.7232 18.1387 17.5982 19.1424C16.4732 20.1462 15.1071 20.648 13.5 20.648ZM11.5714 32.6927V27.4016C8.22857 27.0002 5.46429 25.6666 3.27857 23.4011C1.09286 21.1355 0 18.4972 0 15.486H3.85714C3.85714 17.8663 4.79764 19.8955 6.67864 21.5737C8.55964 23.252 10.8334 24.0905 13.5 24.0894C16.1679 24.0894 18.4423 23.2502 20.3233 21.572C22.2043 19.8938 23.1441 17.8651 23.1429 15.486H27C27 18.4972 25.9071 21.1355 23.7214 23.4011C21.5357 25.6666 18.7714 27.0002 15.4286 27.4016V32.6927H11.5714Z"
                fill="white"
              />
            </svg>
          </button>
          <button class="btn bg-[#93AAF8] font-bold h-12 w-32 rounded-md text-white">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
export default {
  name: 'HomePageView',
  setup() {
    const isRecording = ref(false)
    const recognition = ref(null)
    const transcript = ref('')

    function startRecording() {
      if (process.client) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition
        recognition.value = new SpeechRecognition()
        recognition.value.start()
        recognition.value.onresult = (event) => {
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
