<script setup lang="ts">
// On organise les compétences par catégories pour faciliter la lecture
const techCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'TypeScript', 'Angular', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Outils',
    skills: ['Git', 'GitLab CI/CD', 'Docker', 'Vite', 'Storybook', 'Playwright', 'Vitest'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'Java', 'SQL'],
  },
]
</script>

<template>
  <section id="stack" class="mx-auto max-w-4xl px-4 py-20">
    <!-- En-tête de la section -->
    <div class="mb-12 flex items-center">
      <h2 class="text-3xl font-bold text-slate-200">
        <span class="mr-2 font-mono text-emerald-400">/</span>Stack technique
      </h2>
      <div class="ml-6 h-[1px] max-w-xs flex-grow bg-slate-800"></div>
    </div>

    <!-- Grille des catégories -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        v-for="category in techCategories"
        :key="category.title"
        class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-700"
      >
        <!-- Titre de la catégorie -->
        <div class="mb-6 flex items-center space-x-3">
          <h3 class="text-lg font-bold text-slate-200">{{ category.title }}</h3>
        </div>

        <!-- Liste des compétences (Badges) -->
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="cursor-default rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-300 transition-all hover:border-emerald-500/30 hover:bg-slate-800 hover:text-emerald-400"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
