<script setup lang="ts">
import { ref, computed } from 'vue'

// On utilise une chaîne de caractères pour identifier l'onglet actif
const activeCategory = ref('Tous')

const techCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Vue 3', icon: 'https://api.iconify.design/logos:vue.svg' },
      { name: 'Angular', icon: 'https://api.iconify.design/logos:angular-icon.svg' },
      { name: 'TypeScript', icon: 'https://api.iconify.design/logos:typescript-icon.svg' },
      { name: 'JavaScript', icon: 'https://api.iconify.design/logos:javascript.svg' },
      { name: 'Tailwind CSS', icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg' },
      { name: 'HTML', icon: 'https://api.iconify.design/logos:html-5.svg' },
      { name: 'CSS', icon: 'https://api.iconify.design/logos:css-3.svg' },
      { name: 'Storybook', icon: 'https://api.iconify.design/logos:storybook-icon.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://api.iconify.design/logos:nodejs-icon.svg' },
      { name: 'Java', icon: 'https://api.iconify.design/logos:java.svg' },
      { name: 'Spring Boot', icon: 'https://api.iconify.design/logos:spring-icon.svg' },
      { name: 'Python', icon: 'https://api.iconify.design/logos:python.svg' },
      { name: 'Go', icon: 'https://api.iconify.design/logos:go.svg' },
      { name: 'REST', icon: 'https://api.iconify.design/carbon:api.svg?color=%23cbd5e1' },
    ],
  },
  {
    title: 'Data et IA',
    skills: [
      { name: 'PostgreSQL', icon: 'https://api.iconify.design/logos:postgresql.svg' },
      { name: 'MySQL', icon: 'https://api.iconify.design/logos:mysql-icon.svg' },
      { name: 'MongoDB', icon: 'https://api.iconify.design/logos:mongodb-icon.svg' },
      { name: 'Python', icon: 'https://api.iconify.design/logos:python.svg' },
      { name: 'Agent Copilot', icon: 'https://api.iconify.design/logos:github-copilot.svg' },
      { name: 'MCP Figma', icon: 'https://api.iconify.design/logos:figma.svg' },
      { name: 'MCP Chrome', icon: 'https://api.iconify.design/logos:chrome.svg' },
    ],
  },
  {
    title: 'Qualité',
    skills: [
      { name: 'Docker', icon: 'https://api.iconify.design/logos:docker-icon.svg' },
      { name: 'Git', icon: 'https://api.iconify.design/logos:git-icon.svg' },
      { name: 'Bash', icon: 'https://api.iconify.design/logos:bash-icon.svg' },
      { name: 'Playwright', icon: 'https://api.iconify.design/logos:playwright.svg' },
      { name: 'Vitest', icon: 'https://api.iconify.design/logos:vitest.svg' },
    ],
  },
  {
    title: 'Projet',
    skills: [
      { name: 'Jira', icon: 'https://api.iconify.design/logos:jira.svg' },
      { name: 'Confluence', icon: 'https://api.iconify.design/logos:confluence.svg' },
      { name: 'Notion', icon: 'https://api.iconify.design/logos:notion-icon.svg' },
    ],
  },
]

// 1. On crée dynamiquement la liste de tous les onglets (en ajoutant "Tous" au début)
const allTabs = computed(() => {
  return ['Tous', ...techCategories.map((category) => category.title)]
})

// 2. On calcule les compétences à afficher selon l'onglet actif
const displayedSkills = computed(() => {
  // Si on est sur l'onglet "Tous", on fusionne tout en retirant les doublons (ex: Python)
  if (activeCategory.value === 'Tous') {
    const uniqueSkills = new Map()
    techCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        if (!uniqueSkills.has(skill.name)) {
          uniqueSkills.set(skill.name, skill)
        }
      })
    })
    return Array.from(uniqueSkills.values())
  }

  // Sinon, on cherche la catégorie correspondante
  const category = techCategories.find((c) => c.title === activeCategory.value)
  return category ? category.skills : []
})
</script>

<template>
  <section id="stack" class="mx-auto max-w-5xl px-4 py-20">
    <!-- En-tête -->
    <div class="mb-12 flex items-center">
      <h2 class="text-3xl font-bold text-slate-200">
        <span class="mr-2 font-mono text-emerald-400">/</span>Stack technique
      </h2>
      <div class="ml-6 h-[1px] max-w-xs flex-grow bg-slate-800"></div>
    </div>

    <!-- Navigation : Les bulles (Onglets dynamiques) -->
    <div class="mb-12 flex flex-wrap justify-center gap-3">
      <button
        v-for="tab in allTabs"
        :key="tab"
        @click="activeCategory = tab"
        class="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300"
        :class="[
          activeCategory === tab
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.1)]'
            : 'border-transparent bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Affichage : Les compétences avec Logos -->
    <div class="min-h-[300px]">
      <div :key="activeCategory" class="animate-fade-in flex flex-wrap justify-center gap-4">
        <div
          v-for="skill in displayedSkills"
          :key="skill.name"
          class="group flex cursor-default items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 px-5 py-2.5 font-medium text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:text-emerald-400"
        >
          <img
            :src="skill.icon"
            :alt="'Logo ' + skill.name"
            class="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
