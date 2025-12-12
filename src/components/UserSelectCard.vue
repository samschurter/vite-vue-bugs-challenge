<template>
  <div class="card user-list-card">
    <div class="card-header">
      <h2>Select User</h2>
      <button
        class="refresh-button"
        type="button"
        @click="$emit('refresh')"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Refreshing…' : 'Refresh' }}
      </button>
    </div>
    <div
      v-if="isLoading"
      class="loading-state"
      aria-live="polite"
    >
      <span class="spinner" aria-hidden="true"></span>
      <span>Loading users…</span>
    </div>
    <p
      v-else-if="errorMessage"
      class="error-state"
    >
      {{ errorMessage }}
    </p>
    <ol
      v-else
      class="user-list"
    >
      <li
        v-for="user in users"
        :key="user.id"
        class="user"
        @click="$emit('select', user)"
      >
        {{ user.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'UserSelectCard',
  props: {
    users: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  emits: ['refresh', 'select'],
};
</script>

<style scoped>
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

.card-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.refresh-button {
  border: 1px solid var(--neutral-light-lavender);
  background: var(--neutral-white);
  color: var(--neutral-dark-gray-blue);
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.refresh-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.refresh-button:not(:disabled):hover {
  background: var(--neutral-light-lavender);
}

.loading-state {
  width: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  color: var(--neutral-dark-gray-blue);
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--neutral-light-lavender);
  border-top-color: var(--primary-cobalt-blue);
  border-radius: 50%;
  animation: spin 0.85s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.error-state {
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 0, 0, 0.08);
  color: var(--primary-light-red);
  font-weight: 600;
}

.user-list-card h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--neutral-dark-gray-blue);
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
