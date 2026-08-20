<script setup lang="ts">
// 1. Déclaration de la langue attendue
defineProps<{
  lang: 'en' | 'fr'
}>()

// 2. Le dictionnaire bilingue pour les projets, les titres et l'accessibilité
const content = {
  en: {
    title: 'Projects',
    tooltipConfidential:
      'Confidential project, refer to the defense presentation for more information.',
    ariaSource: 'View source code',
    projects: [
      {
        title: 'Personal Portfolio',
        description:
          'Creation of a personal portfolio to showcase my projects and experiences, using Vue 3, TypeScript, and Tailwind CSS.',
        techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Astro'],
        githubUrl: 'https://github.com/dntelisa/portfolio',
        liveUrl: '#',
        isConfidential: false,
      },
      {
        title: 'PI CHU - DICOM Integration',
        description:
          'Design of backend tools and a visualization interface to convert video-EEG (EDF/MKV) formats to the DICOM standard, for integration into PACS servers.',
        techStack: ['Python', 'DICOM', 'Angular', 'Docker', 'Typescript', 'HTML', 'CSS'],
        githubUrl: '/diapos/support-soutenance-chu.pdf',
        liveUrl: '#',
        isConfidential: true,
      },
      {
        title: 'FSM Modeling',
        description:
          'Implementation of a Domain-Specific Language (DSL) to give instructions to a robot. It covers all stages of its implementation: metamodel definition with Ecore, textual modeling with Langium, and setting up the interpreter and compiler.',
        techStack: ['Ecore', 'Xtext', 'Langium', 'TypeScript'],
        githubUrl: 'https://github.com/dntelisa/ASE---RobotML',
        liveUrl: '#',
        isConfidential: false,
      },
      {
        title: 'Online Multiplayer Game',
        description:
          'Development of an online multiplayer game using WebSocket for real-time communication between players.',
        techStack: ['C++', 'Go'],
        githubUrl: 'https://github.com/dntelisa/SR-S9-Projet-Client',
        liveUrl: '#',
        isConfidential: false,
      },
    ],
  },
  fr: {
    title: 'Projets',
    tooltipConfidential:
      "Projet confidentiel, consulter le support de soutenance pour plus d'informations.",
    ariaSource: 'Voir le code source',
    projects: [
      {
        title: 'Portfolio Personnel',
        description:
          "Création d'un portfolio personnel pour présenter mes projets et expériences, en utilisant Vue 3, TypeScript et Tailwind CSS.",
        techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Astro'],
        githubUrl: 'https://github.com/dntelisa/portfolio',
        liveUrl: '#',
        isConfidential: false,
      },
      {
        title: 'PI CHU - Intégration DICOM',
        description:
          "Conception d'outils backend et d'une interface de visualisation pour convertir des formats vidéo-EEG (EDF/MKV) vers le standard DICOM, en vue d'une intégration aux serveurs PACS.",
        techStack: ['Python', 'DICOM', 'Angular', 'Docker', 'Typescript', 'HTML', 'CSS'],
        githubUrl: '/diapos/support-soutenance-chu.pdf',
        liveUrl: '#',
        isConfidential: true,
      },
      {
        title: 'Modélisation FSM',
        description:
          "Implémentation d'un Domain-Specific Language (DSL). Un langage destiné à donner des instructions à un robot. Il couvre toutes les étapes de sa mise en oeuvre : la définition du métamodèle avec Ecore, la modélisation textuelle avec Langium, la mise en place de l'interpréteur et du compilateur.",
        techStack: ['Ecore', 'Xtext', 'Langium', 'TypeScript'],
        githubUrl: 'https://github.com/dntelisa/ASE---RobotML',
        liveUrl: '#',
        isConfidential: false,
      },
      {
        title: 'Jeu multijoueur en ligne',
        description:
          "Développement d'un jeu multijoueur en ligne utilisant WebSocket pour la communication en temps réel entre les joueurs.",
        techStack: ['C++', 'Go'],
        githubUrl: 'https://github.com/dntelisa/SR-S9-Projet-Client',
        liveUrl: '#',
        isConfidential: false,
      },
    ],
  },
}
</script>

<template>
  <section id="projets" class="mx-auto max-w-5xl px-4 py-20">
    <!-- En-tête -->
    <div class="mb-12 flex items-center">
      <h2 class="text-3xl font-bold text-slate-200">
        <span class="mr-2 font-mono text-emerald-400">/</span>{{ content[lang].title }}
      </h2>
      <div class="ml-6 h-[1px] max-w-xs flex-grow bg-slate-800"></div>
    </div>

    <!-- Grille de projets -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in content[lang].projects"
        :key="project.title"
        class="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)]"
      >
        <!-- Titre et Liens -->
        <div class="mb-4 flex items-start justify-between">
          <h3
            class="text-xl font-bold text-slate-200 transition-colors group-hover:text-emerald-400"
          >
            {{ project.title }}
          </h3>

          <div class="flex space-x-3">
            <!-- Condition 1 : Projet Confidentiel -->
            <template v-if="project.isConfidential">
              <div class="group relative flex cursor-help items-center justify-center">
                <a
                  :href="project.githubUrl"
                  target="_blank"
                  class="text-slate-400 transition-colors hover:text-white"
                  :aria-label="content[lang].ariaSource"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-sticky-note-icon lucide-sticky-note"
                  >
                    <path
                      d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
                    />
                    <path d="M15 3v5a1 1 0 0 0 1 1h5" />
                  </svg>
                  <!-- Tooltip Tailwind avec texte dynamique -->
                  <div
                    class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-center text-xs text-slate-200 opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {{ content[lang].tooltipConfidential }}
                  </div>
                </a>
              </div>
            </template>

            <!-- Condition 2 : Projet Open Source -->
            <template v-else>
              <a
                :href="project.githubUrl"
                target="_blank"
                class="text-slate-400 transition-colors hover:text-white"
                :aria-label="content[lang].ariaSource"
              >
                <!-- Icône GitHub -->
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </template>
          </div>
        </div>

        <!-- Description -->
        <p class="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
          {{ project.description }}
        </p>

        <!-- Tags Technologiques -->
        <ul class="mt-auto flex flex-wrap gap-2">
          <li
            v-for="tech in project.techStack"
            :key="tech"
            class="rounded-md bg-emerald-400/10 px-2 py-1 font-mono text-xs text-emerald-400"
          >
            {{ tech }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
