<script setup lang="ts">
import { ref } from 'vue'

// État pour gérer l'ouverture du menu sur mobile
const isMobileMenuOpen = ref(false)

// Liste des liens de navigation pour éviter de répéter le HTML
const navLinks = [
  { name: 'Projets', href: '#projets' },
  { name: 'Stack technique', href: '#stack' },
  { name: 'À propos', href: '#about' },
]
</script>

<template>
  <!-- 
    sticky & top-0 : Garde le header en haut lors du scroll
    backdrop-blur-md & bg-slate-950/80 : Crée l'effet de verre fumé 
  -->
  <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 text-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-bold tracking-tighter hover:text-emerald-400 transition-colors duration-300">
            Elisa<span class="text-emerald-500">.</span>dev
          </a>
        </div>

        <!-- Navigation Bureau -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="link in navLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Bouton d'appel à l'action (Contact) Bureau -->
        <div class="hidden md:block">
          <a 
            href="#contact" 
            class="px-5 py-2.5 text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 rounded-lg hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Me contacter
          </a>
        </div>

        <!-- Bouton Menu Burger (Mobile) -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="text-slate-300 hover:text-white focus:outline-none p-2"
            aria-label="Ouvrir le menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Icône Croix si ouvert, Hamburger si fermé -->
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Menu Déroulant Mobile -->
    <!-- On utilise v-show pour que Vue gère l'affichage dynamiquement -->
    <div 
      v-show="isMobileMenuOpen" 
      class="md:hidden bg-slate-900 border-b border-slate-800"
    >
      <ul class="px-4 pt-2 pb-6 space-y-2">
        <li v-for="link in navLinks" :key="link.name">
          <a 
            :href="link.href" 
            @click="isMobileMenuOpen = false" 
            class="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          >
            {{ link.name }}
          </a>
        </li>
        <li class="pt-4">
           <a 
            href="#contact" 
            @click="isMobileMenuOpen = false"
            class="block w-full text-center px-5 py-3 rounded-md text-base font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Me contacter
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>