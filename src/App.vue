<template>
  <div 
    v-if="!selectedUser"
    class="card-wrapper"
  >
    <div class="card user-list-card">
      <h2>Select User</h2>
      <ol class="user-list">
        <li
          v-for="user in userList"
          :key="user.id"
          class="user"
          @click="selectUser(user)"
        >
          {{ user.name }}
        </li>
      </ol>
    </div>
  </div>
  <div v-else>
    <RSComponent 
      :user="selectedUser"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import RSComponent from './components/RSCompnent.vue';
const API_URL = "https://" + window.location.host.replace('5173', '3000') + "/";
export default {
  components: {
    RSComponent,
  },
  data() {
    /////////////////////////////////
    // TODO: delete the following mock data and replace with real data from the API
    const users = [
      {
        "name": "Garth Edwards",
        "email": "ipsum.primis@yahoo.com",
        "id": "ZEX58MUB7TI",
        "reaction": 52,
        "memory": 75,
        "verbal": 29,
        "visual": 40
      },
      {
        "name": "Orlando Rodgers",
        "email": "ligula.tortor.dictum@yahoo.edu",
        "id": "MGR77EST3SW",
        "reaction": 45,
        "memory": 36,
        "verbal": 96,
        "visual": 81
      },
      {
        "name": "Naomi Chapman",
        "email": "eget@icloud.org",
        "id": "TTA92MPY1XO",
        "reaction": 45,
        "memory": 51,
        "verbal": 95,
        "visual": 75
      }
    ];
    for (let i = 0; i < 3; i++) {
      users.push(...users);
    }
    const user = users[0];
    ////////////////////////////

    return {
      selectedUser: user,
      userList: users,
    };
  },
  mounted() {
    console.log('mounted', API_URL);
    // TODO: fetch user list from API
  },
  methods: {
    selectUser(user) {
      console.log('selectUser', user);
      // TODO: select user and display scores
    },
    onCancel() {
      console.log('onCancel');
      // TODO: cancel selection and go back to user list
    },
  }
};
</script>

<style>
:root {
  --primary-light-red: hsl(0, 100%, 67%);
  --primary-orangey-yellow: hsl(39, 100%, 56%);
  --primary-green-teal: hsl(166, 100%, 37%);
  --primary-cobalt-blue: hsl(234, 85%, 45%);

  --gradient-light-slate-blue: hsl(252, 100%, 67%);
  --gradient-light-royal-blue: hsl(241, 81%, 54%);

  --gradient-violet-blue: hsla(256, 72%, 46%, 1);
  --gradient-persian-blue: hsla(241, 72%, 46%, 0);

  --neutral-white: hsl(0, 0%, 100%);
  --neutral-pale-blue: hsl(221, 100%, 96%);
  --neutral-light-lavender: hsl(241, 100%, 89%);
  --neutral-dark-gray-blue: hsl(224, 30%, 27%);
}

@font-face {
  font-family: 'Hanken Grotesk';
  src: url('./assets/fonts/HankenGrotesk-VariableFont_wght.ttf')
    format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Hanken Grotesk', sans-serif;

  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

p {
  font-size: 18px;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 740px;
  height: 520px;
  background-color: var(--neutral-white);
  border-radius: 30px;
  box-shadow: 0px 0px 30px 0px rgba(50, 78, 238, 0.308);
}

.user-list-card {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  overflow-y: clip;
}

.user-list-card h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--neutral-dark-gray-blue);
  margin-bottom: 1rem;
}

.user-list {
  overflow-y: scroll;
  width: 100%;
}

.user-list li {
  font-size: 18px;
  font-weight: 700;
  color: var(--neutral-dark-gray-blue);
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.user-list li:hover {
  background-color: var(--neutral-light-lavender);
}
</style>
