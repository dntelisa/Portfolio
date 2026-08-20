<script setup lang="ts">
import { ref } from 'vue'

// 1. On déclare la propriété 'lang' que le composant va recevoir
defineProps<{
  lang: 'en' | 'fr'
}>()

const activeTab = ref(0)

// 2. On crée un grand objet qui stocke les deux langues
const content = {
  en: {
    title: 'Experiences',
    experiences: [
      {
        company: 'Ateme',
        role: 'Frontend R&D Engineer',
        date: 'MARCH 2026 - AUG 2026',
        description: [
          "Refactor and modernize the company's FrontendStarterKit using Vue 3 and TypeScript.",
          'Set up automated end-to-end (E2E) testing with Playwright.',
          'Integrate interactive documentation with Storybook and set up a Figma integration (MCP).',
        ],
      },
      {
        company: 'IMT Atlantique',
        role: '4G-5G Network Analysis Tools Developer',
        date: 'DEC 2025 - FEB 2026',
        description: [
          'Develop Python data processing modules and optimize performance through the design of data fusion algorithms.',
          'Document methods to ensure scientific reproducibility.',
        ],
      },
      {
        company: 'Isati',
        role: 'President of the Student Board',
        date: '2024 - 2025',
        description: [
          'Manage and coordinate a team of approximately 40 people.',
          'Manage projects, organize event logistics, and lead student life activities for the engineering school.',
        ],
      },
      {
        company: 'ContiTech',
        role: 'IT Service Intern',
        date: 'JUNE 2024',
        description: [
          'Assist technicians with system maintenance.',
          'Gain exposure to technical support processes.',
        ],
      },
    ],
  },
  fr: {
    title: 'Expériences',
    experiences: [
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
    ],
  },
}
</script>

<template>
  <section id="experiences" class="mx-auto max-w-4xl px-4 py-20">
    <!-- En-tête -->
    <div class="mb-12 flex items-center">
      <h2 class="text-3xl font-bold text-slate-200">
        <!-- On appelle dynamiquement le titre selon la langue -->
        <span class="mr-2 font-mono text-emerald-400">/</span>{{ content[lang].title }}
      </h2>
      <div class="ml-6 h-[1px] max-w-xs flex-grow bg-slate-800"></div>
    </div>

    <div class="flex flex-col gap-8 md:flex-row">
      <!-- Colonne de gauche : Les onglets -->
      <div
        class="hide-scrollbar flex overflow-x-auto border-b border-slate-700 md:w-48 md:flex-col md:overflow-x-visible md:border-b-0 md:border-l"
      >
        <button
          v-for="(job, index) in content[lang].experiences"
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

      <!-- Colonne de droite : Les détails -->
      <div class="min-h-[300px] flex-1">
        <div :key="activeTab" class="animate-fade-in">
          <h3 class="mb-1 text-2xl font-bold text-slate-200">
            {{ content[lang].experiences[activeTab].role }}
            <span class="text-emerald-400"
              >@ {{ content[lang].experiences[activeTab].company }}</span
            >
          </h3>

          <p class="mb-6 font-mono text-sm tracking-wide text-slate-400">
            {{ content[lang].experiences[activeTab].date }}
          </p>

          <ul class="space-y-4">
            <li
              v-for="(bullet, idx) in content[lang].experiences[activeTab].description"
              :key="idx"
              class="flex items-start"
            >
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
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
