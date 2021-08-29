<template>
  <svg
    v-if="name === 'facebook'"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
  >
    <path
      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
    />
  </svg>
  <svg
    v-else-if="name === 'messages'"
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    viewBox="0 0 24 24"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
    />
  </svg>
  <svg
    v-else-if="name === 'people'"
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    viewBox="0 0 24 24"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
    />
  </svg>
  <svg
    v-else-if="name === 'money'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="100%"
    width="100%"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    />
  </svg>
  <svg
    v-else-if="name === 'list'"
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    viewBox="0 0 24 24"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z" />
  </svg>
  <svg
    v-else-if="name === 'refresh'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="100%"
    width="100%"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    />
  </svg>
  <svg
    v-else-if="name === 'call'"
    viewBox="0 0 24 24"
    height="100%"
    width="100%"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
    />
  </svg>
  <svg
    v-else-if="name === 'profile'"
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    viewBox="0 0 24 24"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
    />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: String,
  },
};
</script>
