<template>
  <div class="flex justify-center text-[100px] relative">
    <div
      class="absolute top-0 left-0 right-0 text-center bg-[#EBF0FF] font-bold"
      style="color: #031550"
    >
      Member Group
    </div>
  </div>
  <div class="flex justify-center items-center bg-[#EBF0FF] h-screen mt-16">
    <div class="h-96 carousel carousel-vertical rounded-box drop-shadow-2xl">
      <div class="carousel-item h-full relative">
        <img src="../static/alya.jpeg" />
        <p class="absolute bottom-0 left-0 right-2 p-7">
          I Gusti Agung Bagus Maitreya S
          <span class="flex items-center justify-center"> 5027211046</span>
        </p>
      </div>
      <div class="carousel-item h-full relative">
        <img src="../static/goan.jpeg" />
        <p class="absolute bottom-0 left-16 right-0 p-7">
          FAJAR SADBOY<span class="flex items-center justify-center mr-16 mb-4">
            5027211046</span
          >
        </p>
      </div>
    </div>
  </div>
  <p
    class="bg-[#EBF0FF] flex justify-center text-4xl font-bold"
    style="color: #031550"
  >
    #LIBRARY
  </p>
  <div
    class="flex flex-col w-full px-16 lg:flex-row bg-[#EBF0FF] pt-[50px] h-60"
  >
    <div
      class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-fontblue font-bold leading-5"
      style="background-color: white !important"
    >
      <div class="flex items-center">
        <span>content</span>
        <div
          class="dropdown dropdown-end ml-2 mt-1"
          style="display: inline-block"
        >
          <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabindex="0"
            class="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
          >
            <div class="card-body">
              <h2 class="card-title">You needed more info?</h2>
              <p>Here is a description!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div
      class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-fontblue font-bold leading-5"
      style="background-color: white !important"
    >
      <div class="flex items-center">
        <span>content</span>
        <div
          class="dropdown dropdown-end ml-2 mt-1"
          style="display: inline-block"
        >
          <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabindex="0"
            class="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
          >
            <div class="card-body">
              <h2 class="card-title">You needed more info?</h2>
              <p>Here is a description!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutView',
}
</script>
