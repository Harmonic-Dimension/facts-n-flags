<script setup>
import { computed, ref } from 'vue'
import countries from './data/countries'

const targetCorrect = 10
const startingLives = 3

const gameState = ref('start') // start | playing | win | lose
const lives = ref(startingLives)
const correctCount = ref(0)
const questionIndex = ref(0)
const feedback = ref(null) // correct | wrong

const flagSelection = ref(null)
const factSelection = ref(null)

const questionQueue = ref(buildQuestionQueue(targetCorrect))

const currentQuestion = computed(() =>
  buildQuestion(questionQueue.value[questionIndex.value]),
)

function buildQuestionQueue(minLength) {
  const shuffled = [...countries].sort(() => Math.random() - 0.5)
  if (shuffled.length >= minLength) {
    return shuffled.slice(0, minLength)
  }
  const result = []
  while (result.length < minLength) {
    result.push(...shuffled)
  }
  return result.slice(0, minLength)
}

function getRandomItems(array, count, excludeIds = new Set()) {
  const pool = array.filter((item) => !excludeIds.has(item.id || item.name))
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function buildQuestion(country) {
  const otherCountries = countries.filter((c) => c.name !== country.name)

  // Flags: correct + two wrong from other countries
  const wrongFlags = getRandomItems(
    otherCountries.map((c) => ({
      id: `${c.code}-flag`,
      label: c.name,
      url: c.flag,
      isCorrect: false,
    })),
    2,
  )

  const flagOptions = [
    {
      id: `${country.code}-flag-correct`,
      label: country.name,
      url: country.flag,
      isCorrect: true,
    },
    ...wrongFlags,
  ].sort(() => Math.random() - 0.5)

  // Facts: one true from country, two true facts from others marked false here.
  const trueFact =
    country.facts[Math.floor(Math.random() * country.facts.length)] || ''

  const otherFactsPool = otherCountries.flatMap((c) =>
    c.facts.map((fact, idx) => ({
      id: `${c.code}-fact-${idx}`,
      text: fact,
      isCorrect: false,
    })),
  )

  const falseFacts = getRandomItems(otherFactsPool, 2)

  const factOptions = [
    {
      id: `${country.code}-fact-true`,
      text: trueFact,
      isCorrect: true,
    },
    ...falseFacts,
  ].sort(() => Math.random() - 0.5)

  return { country, flagOptions, factOptions }
}

function startGame() {
  lives.value = startingLives
  correctCount.value = 0
  questionIndex.value = 0
  questionQueue.value = buildQuestionQueue(targetCorrect)
  flagSelection.value = null
  factSelection.value = null
  feedback.value = null
  gameState.value = 'playing'
}

function nextQuestion() {
  flagSelection.value = null
  factSelection.value = null
  feedback.value = null
  questionIndex.value =
    (questionIndex.value + 1) % questionQueue.value.length
}

function handleSubmit() {
  if (feedback.value) return
  const pickedFlag = flagSelection.value !== null
  const pickedFact = factSelection.value !== null

  if (!pickedFlag && !pickedFact) {
    feedback.value = 'choose'
    setTimeout(() => (feedback.value = null), 1200)
    return
  }

  const flagCorrect =
    pickedFlag &&
    currentQuestion.value.flagOptions.find((o) => o.id === flagSelection.value)
      ?.isCorrect
  const factCorrect =
    pickedFact &&
    currentQuestion.value.factOptions.find((o) => o.id === factSelection.value)
      ?.isCorrect

  const bothPicked = pickedFlag && pickedFact
  let correct = false

  if (bothPicked) {
    if (flagCorrect && factCorrect) {
      correct = true
      lives.value += 1
    } else {
      lives.value -= 2
    }
  } else if (pickedFlag || pickedFact) {
    if (flagCorrect || factCorrect) {
      correct = true
    } else {
      lives.value -= 1
    }
  }

  lives.value = Math.max(lives.value, 0)

  if (correct) {
    correctCount.value += 1
    feedback.value = 'correct'
    if (correctCount.value >= targetCorrect) {
      setTimeout(() => {
        gameState.value = 'win'
      }, 500)
      return
    }
  } else {
    feedback.value = 'wrong'
    if (lives.value <= 0) {
      setTimeout(() => {
        gameState.value = 'lose'
      }, 500)
      return
    }
  }

  setTimeout(() => {
    nextQuestion()
  }, 800)
}

function restart() {
  startGame()
}

const livesDisplay = computed(() => '❤️'.repeat(Math.max(lives.value, 0)))
const livesRemaining = computed(() => Math.max(lives.value, 0))
</script>

<template>
  <div class="app-shell">
    <header class="hero">
      <div>
        <p class="eyebrow">Facts n Flags</p>
        <h1>Raad de vlag of het feit</h1>
        <p class="lede">
          Kies de juiste vlag of het juiste feit. Fout? Je verliest een leven.
          Allebei goed? Je verdient er een terug. Tien goede antwoorden en je
          wint.
        </p>
      </div>
    </header>

    <main class="panel">
      <section v-if="gameState === 'start'" class="center">
        <p class="muted">
          Three lives. Ten correct answers. Choose a flag, a fact, or both.
        </p>
        <button class="btn primary" @click="startGame">Start the game</button>
      </section>

      <section v-else-if="gameState === 'playing'" class="question">
        <div class="question-header">
          <div>
            <p class="label">Land</p>
            <h2>{{ currentQuestion.country.name }}</h2>
          </div>
          <div class="header-actions">
            <div class="pill">Vraag {{ questionIndex + 1 }}</div>
            <div class="pill progress-pill" v-if="gameState !== 'start'">
              <span class="label inline">Goed</span>
              <span class="value">{{ correctCount }} / {{ targetCorrect }}</span>
            </div>
            <div class="pill lives-pill" v-if="gameState !== 'start'">
              <span class="label inline">Levens</span>
              <span class="value hearts">{{ livesDisplay }}</span>
            </div>
            <button class="btn primary small-btn" @click="handleSubmit">
              Volgende
            </button>
          </div>
        </div>

        <div class="options-grid">
          <div class="card">
            <div class="card-head">
              <p class="label">Feiten</p>
              <p class="muted small">Kies er één</p>
            </div>
            <div class="fact-options">
              <label
                v-for="option in currentQuestion.factOptions"
                :key="option.id"
                class="option fact"
              >
                <input
                  type="radio"
                  name="fact"
                  :value="option.id"
                  v-model="factSelection"
                />
                <span class="option-label">{{ option.text }}</span>
              </label>
            </div>
          </div>

          <div class="card">
            <div class="card-head">
              <p class="label">Vlaggen</p>
              <p class="muted small">Kies er één</p>
            </div>
            <div class="flag-options">
              <label
                v-for="(option, idx) in currentQuestion.flagOptions"
                :key="option.id"
                class="option"
              >
                <input
                  type="radio"
                  name="flag"
                  :value="option.id"
                  v-model="flagSelection"
                  :aria-label="`Flag option ${String.fromCharCode(65 + idx)}`"
                />
                <div class="flag">
                  <img
                    :src="option.url"
                    :alt="`Flag option ${String.fromCharCode(65 + idx)}`"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="actions">
          <p class="muted tiny">
            Kies een vlag, een feit, of allebei. Beide goed = +1 leven. Iets
            fout bij twee keuzes = -2 levens.
          </p>
          <p v-if="feedback === 'choose'" class="error tiny">
            Kies minstens één antwoord.
          </p>
        </div>

        <div v-if="feedback === 'correct'" class="confetti"></div>
        <div v-if="feedback === 'wrong'" class="snow"></div>
      </section>

      <section v-else class="center">
        <h2>{{ gameState === 'win' ? 'You win!' : 'Game over' }}</h2>
        <p class="muted">
          Goede antwoorden: {{ correctCount }} / {{ targetCorrect }} · Levens
          over: {{ livesRemaining }}
        </p>
        <div class="actions center-actions">
          <button class="btn primary" @click="restart">Speel opnieuw</button>
        </div>
      </section>
    </main>
  </div>
</template>
