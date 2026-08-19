<script setup lang="ts">
import { ref } from 'vue'

// On garde en mémoire l'index de l'onglet actif (0 = la première expérience)
const activeTab = ref(0)

// Ton tableau d'expériences
const experiences = [
  {
    company: 'Ateme',
    role: 'Ingénieure R&D Frontend',
    date: 'MARS 2026 - AOÛT 2026',
    description: [
      "Refactoriser et moderniser le FrontendStarterKit de l'entreprise avec Vue 3 et TypeScript.",
      'Mettre en place des tests automatisés de bout en bout (E2E) via Playwright.',
      "Intégrer une documentation interactive avec Storybook et mise en place d'une intégration Figma (MCP).",
    ],
  },
  {
    company: 'IMT Atlantique',
    role: 'Développeuse d’outils d’analyse des réseaux 4G–5G',
    date: 'DÉC. 2025 - FÉV. 2026',
    description: [
      "Développer modules Python de traitement de données et optimisation des performances via la conception d'algorithmes de fusion de données.",
      'Documenter les méthodes pour assurer la reproductibilité scientifique.',
    ],
  },
  {
    company: 'Isati',
    role: 'Présidente du Bureau des Élèves',
    date: '2024 - 2025',
    description: [
      "Manager et coordonner une équipe d'environ 40 personnes.",
      "Gérer des projets, organiser la logistique d'événements et animer la vie étudiante de l'école d'ingénieurs.",
    ],
  },
  {
    company: 'ContiTech',
    role: 'Stagiaire Service IT',
    date: 'JUIN 2024',
    description: [
      'Assister les techniciens dans la maintenance des systèmes.',
      'Découvrir les processus du support technique.',
    ],
  },
]
</script>

<template>
  <section id="experiences" class="mx-auto max-w-4xl px-4 py-20">
    <!-- En-tête de la section (reproduit le style "/ experience" de ton image) -->
    <div class="mb-12 flex items-center">
      <h2 class="text-3xl font-bold text-slate-200">
        <span class="mr-2 font-mono text-emerald-400">/</span>Expériences
      </h2>
      <!-- Ligne de séparation subtile -->
      <div class="ml-6 h-[1px] max-w-xs flex-grow bg-slate-800"></div>
    </div>

    <div class="flex flex-col gap-8 md:flex-row">
      <!-- Colonne de gauche : Les onglets (Entreprises) -->
      <div
        class="hide-scrollbar flex overflow-x-auto border-b border-slate-700 md:w-48 md:flex-col md:overflow-x-visible md:border-b-0 md:border-l"
      >
        <button
          v-for="(job, index) in experiences"
          :key="job.company"
          @click="activeTab = index"
          class="border-b-2 px-5 py-3 text-left font-mono text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-slate-800/50 hover:text-emerald-300 md:border-b-0 md:border-l-2"
          :class="[
            activeTab === index
              ? 'border-emerald-400 bg-emerald-900/10 text-emerald-400'
              : 'border-transparent text-slate-400 md:-ml-[2px]',
          ]"
        >
          {{ job.company }}
        </button>
      </div>

      <!-- Colonne de droite : Les détails de l'expérience active -->
      <div class="min-h-[300px] flex-1">
        <!-- 
          La directive :key force Vue à re-rendre la div quand l'onglet change, 
          ce qui permet de déclencher une petite animation si on le souhaite 
        -->
        <div :key="activeTab" class="animate-fade-in">
          <h3 class="mb-1 text-2xl font-bold text-slate-200">
            {{ experiences[activeTab].role }}
            <span class="text-emerald-400">@ {{ experiences[activeTab].company }}</span>
          </h3>

          <p class="mb-6 font-mono text-sm tracking-wide text-slate-400">
            {{ experiences[activeTab].date }}
          </p>

          <ul class="space-y-4">
            <li
              v-for="(bullet, idx) in experiences[activeTab].description"
              :key="idx"
              class="flex items-start"
            >
              <!-- La petite flèche verte de l'image -->
              <svg
                class="mt-1 mr-3 h-4 w-4 flex-shrink-0 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-lg leading-relaxed text-slate-300">
                {{ bullet }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Cache la scrollbar sur mobile pour les onglets si l'écran est très petit */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Petite animation d'apparition douce au changement d'onglet */
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
