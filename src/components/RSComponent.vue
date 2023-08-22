<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-left">
        <div class="title">
          <h2>Your Result</h2>
        </div>

        <div class="circle">
          <h1>{{ Math.round(average) }}</h1>
          <p>of 100</p>
        </div>
        <div class="commit">
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div class="card-right">
        <h2>Summary</h2>
        <div
          v-for="(data, index) in dataList"
          :key="data.category"
          class="dataBar"
          :style="data.color"
        >
          <div class="icon">
            <img :src="data.icon" alt="icon" />
          </div>
          <h3 :style="data.textcolor">{{ data.category }}</h3>
          <div class="score-end">
            <span class="strong">{{ 20 }}</span>
            <span class="weak">/ 100</span>
          </div>
        </div>
        <div class="button-container">
          <button @continue="onClear">Clear</button>
            <button @click="$emit('cancel')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = "https://" + window.location.host.replace('5173', '3000') + "/";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    / TODO: fetch data and colors from api
    return {
      dataList: [
        {
          id: 'reaction',
          category: 'Reaction',
          score: 85,
          icon: '/images/icon-reaction.svg',
          color: `background-color:hsl(0, 100%, 67%, 0.05)`,
          textColor: `color:hsl(0, 100%, 67%)`,
        },
        {
          id: 'memory',
          category: 'Memory',
          score: 92,
          icon: '/images/icon-memory.svg',
          color: `background-color:hsl(39, 100%, 56%, 0.05)`,
          textColor: `color:hsl(39, 100%, 56%)`,
        },
        {
          id: 'verbal',
          category: 'Verbal',
          score: 61,
          icon: '/images/icon-verbal.svg',
          color: `background-color:hsl(166, 100%, 37%, 0.05)`,
          textColor: `color:hsl(166, 100%, 37%)`,
        },
        {
          id: 'visual',
          category: 'Visual',
          score: 72,
          icon: '/images/icon-visual.svg',
          color: `background-color:hsl(234, 85%, 45%, 0.05)`,
          textColor: `color:hsl(234, 85%, 45%)`,
        },
      ],
    };
  },
  computed: {
    average() {
      const scores = this.dataList.map((result) => result.score);
      return scores / this.dataList.length;
    },
  },
  methods: {
    onClear() {
      // clear each result for a score of 0
      this.dataList.forEach((result) => (result = 0));
    },
  },
};
</script>

<style scoped>

/* left card */
.card-left {
  width: 50%;
  height: 100%;
  background: linear-gradient(
    180deg,
    var(--gradient-light-slate-blue) 0%,
    var(--gradient-light-royal-blue) 100%
  );
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.card-right {
  width: 50%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.card-left h2 {
  color: var(--neutral-white);
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 0 20px;
}

.card-left h1 {
  color: var(--neutral-white);
  font-size: 120px;
  font-weight: 700;
}

.card-left h3 {
  color: var(--neutral-white);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 0 20px;
}
.card-right h2 {
  color: var(--neutral-dark-gray-blue);
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 0 40px;
}

.dataBar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding-left: 1rem;
}

.dataBar h3 {
  color: var(--neutral-dark-blue);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 0 20px;
}

.dataBar span {
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 0 20px;
}

.dataBar .icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dataBar .icon img {
  width: 20px;
  height: 20px;
}

.card-right button {
  width: 100%;
  height: 55px;
  background-color: var(--neutral-dark-gray-blue);
  border-radius: 50px;
  border: none;
  color: var(--neutral-white);
  font-size: 18px;
  font-weight: 700;
}
.card-right .button-container {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
}

.card-right button:hover {
  background-color: var(--gradient-light-royal-blue);
}

.score-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 0 40px 0 0;
}

.score-end .strong {
  font-weight: 700;
  color: rgba(11, 11, 11, 0.613);
}

.score-end .weak {
  font-weight: 300;
  color: rgba(11, 11, 11, 0.413);
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--neutral-light-lavender);
}

.circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    var(--gradient-violet-blue) 0%,
    var(--gradient-persian-blue) 100%
  );
}

.circle h1 {
  font-size: 80px;
  font-weight: 600;
  color: var(--neutral-white);
}

.circle p {
  font-size: 16px;
  font-weight: 600;
  color: rgba(244, 242, 246, 0.365);
}

.commit {
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 40px;
  gap: 20px;
}

.commit h2 {
  font-size: 32px;
  font-weight: 600;
  color: var(--neutral-white);
  margin: 0 auto;
}

.commit p {
  letter-spacing: 1px;
  font-size: 0.75rem;
  width: 200px;
  font-weight: 600;
  color: var(--neutral-light-lavender);
  line-height: 1.5;
  text-align: center;
  margin: 0 auto;
}

@media screen and (max-width: 375px) {
  .card {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  .card-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  .card-right {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
