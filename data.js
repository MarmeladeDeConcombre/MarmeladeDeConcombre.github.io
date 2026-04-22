/* ──────────────────────────────────────────────────────────
   data.js — Données du programme
   Modifie ce fichier pour changer les exercices, poids, etc.
   ────────────────────────────────────────────────────────── */

const DAYS = [
  {
    label:    "Lundi",
    title:    "Pecs & Triceps",
    tagClass: "tag-upper",
    tagTxt:   "Haut du corps",
    type:     "upper",
    duration: "~35-40 min",
    sections: [
      {
        name: "Exercices principaux",
        exs: [
          {
            name:  "Pompes (mains larges)",
            note:  "Sur les genoux si besoin – focus sur les pecs",
            sets:  "3 × 8-12 rép.",
            weight:"Poids du corps"
          },
          {
            name:  "Développé couché haltères",
            note:  "Allongé sur sol, descendre les coudes à 45°",
            sets:  "3 × 10-12 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Écartés haltères",
            note:  "Légère flexion des coudes, contrôle la descente",
            sets:  "3 × 12 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Extensions triceps haltère",
            note:  "Bras derrière la tête, coudes près des oreilles",
            sets:  "3 × 12 rép.",
            weight:"1 × 4 kg"
          },
          {
            name:  "Pompes serrées",
            note:  "Mains sous les épaules, coudes collés au corps",
            sets:  "2 × 8-10 rép.",
            weight:"Poids du corps"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:  "Burpees ou jumping jacks",
            note:  "3 séries de 30 secondes, 20s de repos entre",
            sets:  "3 × 30 sec",
            weight:"Cardio"
          },
        ]
      }
    ],
    tip: "Repos de 60-90 sec entre chaque série. Si tu fais les 12 reps facilement, ajoute 1 kg la prochaine fois."
  },

  {
    label:    "Mardi",
    title:    "Repos actif",
    tagClass: "tag-rest",
    tagTxt:   "Récupération",
    type:     "rest",
    tip:      "Marche 20-30 min, étirements doux. Évite l'inactivité totale mais ne force pas."
  },

  {
    label:    "Mercredi",
    title:    "Dos & Biceps",
    tagClass: "tag-upper",
    tagTxt:   "Haut du corps",
    type:     "upper",
    duration: "~35-40 min",
    sections: [
      {
        name: "Exercices principaux",
        exs: [
          {
            name:  "Rowing haltère un bras",
            note:  "Genou + main sur chaise, tire le coude vers le haut",
            sets:  "3 × 10-12 rép.",
            weight:"1 × 6 kg (2+4)"
          },
          {
            name:  "Rowing haltères 2 bras",
            note:  "Penché à 45°, tire les deux haltères vers le ventre simultanément, dos plat",
            sets:  "3 × 12-15 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Superman / extensions lombaires",
            note:  "Ventre au sol, soulève bras et jambes en même temps, tiens 2 sec en haut",
            sets:  "3 × 12 rép.",
            weight:"Poids du corps"
          },
          {
            name:  "Curl biceps alternés",
            note:  "Tourne le poignet en montant (supination)",
            sets:  "3 × 10-12 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Curl marteau",
            note:  "Poignet neutre, coudes fixes",
            sets:  "2 × 12 rép.",
            weight:"2 × 4 kg"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:  "Mountain climbers",
            note:  "Genoux ramenés alternativement, rythme modéré",
            sets:  "3 × 30 sec",
            weight:"Cardio"
          },
        ]
      }
    ],
    tip: "Le dos se travaille en 'tirant' – visualise que tes mains ne font que crocheter la charge, c'est le dos qui tire."
  },

  {
    label:    "Jeudi",
    title:    "Repos actif",
    tagClass: "tag-rest",
    tagTxt:   "Récupération",
    type:     "rest",
    tip:      "Marche 20-30 min, étirements doux. Évite l'inactivité totale mais ne force pas."
  },

  {
    label:    "Vendredi",
    title:    "Épaules & Abdos",
    tagClass: "tag-upper",
    tagTxt:   "Haut du corps",
    type:     "upper",
    duration: "~35-40 min",
    sections: [
      {
        name: "Exercices principaux",
        exs: [
          {
            name:  "Développé militaire haltères",
            note:  "Debout, pousse les haltères au-dessus de la tête, core gainé",
            sets:  "3 × 10-12 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Élévations latérales",
            note:  "Légère flexion du coude, arrête à hauteur d'épaule",
            sets:  "3 × 12-15 rép.",
            weight:"2 × 4 kg"
          },
          {
            name:  "Oiseau haltères",
            note:  "Penché en avant à 45°, bras écartés latéralement – travaille les deltoïdes postérieurs",
            sets:  "3 × 15 rép.",
            weight:"2 × 2 kg"
          },
          {
            name:  "Crunchs",
            note:  "Pieds au sol, mains aux tempes, expire en montant",
            sets:  "3 × 15-20 rép.",
            weight:"Poids du corps"
          },
          {
            name:  "Planche",
            note:  "Position pompe ou sur les avant-bras, ventre rentré",
            sets:  "3 × 20-30 sec",
            weight:"Poids du corps"
          },
          {
            name:  "Relevés de jambes (allongé)",
            note:  "Bas du dos collé au sol, jambes montées à 90°",
            sets:  "3 × 12 rép.",
            weight:"Poids du corps"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:  "Jumping jacks ou corde à sauter",
            note:  "",
            sets:  "3 × 45 sec",
            weight:"Cardio"
          },
        ]
      }
    ],
    tip: "L'oiseau remplace le face pull élastique – pars léger (2 kg), c'est un exercice d'isolation et les épaules arrière sont souvent sous-développées."
  },

  {
    label:    "Samedi",
    title:    "Full body + Bas",
    tagClass: "tag-full",
    tagTxt:   "Full body",
    type:     "full",
    duration: "~45-50 min",
    sections: [
      {
        name: "Haut du corps (rappel)",
        exs: [
          {
            name:  "Pompes (variante au choix)",
            note:  "Larges, serrées ou inclinées sur chaise",
            sets:  "3 × max rép.",
            weight:"Poids du corps"
          },
          {
            name:  "Rowing haltère 2 bras",
            note:  "Légèrement penché en avant, tire vers le ventre",
            sets:  "3 × 12 rép.",
            weight:"2 × 4 kg"
          },
        ]
      },
      {
        name: "Bas du corps",
        exs: [
          {
            name:  "Squats haltères",
            note:  "Pieds à largeur d'épaules, haltères le long du corps",
            sets:  "3 × 15 rép.",
            weight:"2 × 6 kg (2+4)"
          },
          {
            name:  "Fentes avant alternées",
            note:  "Grand pas en avant, genou arrière vers le sol",
            sets:  "3 × 10 rép./jambe",
            weight:"2 × 4 kg"
          },
          {
            name:  "Hip thrust au sol",
            note:  "Dos au sol, pieds à plat, pousse le bassin vers le haut",
            sets:  "3 × 15 rép.",
            weight:"1 × 6 kg (posé sur bassin)"
          },
        ]
      },
      {
        name: "Cardio / HIIT final",
        exs: [
          {
            name:  "Circuit HIIT",
            note:  "30s squats sautés → 30s pompes → 30s mountain climbers → 30s repos × 3",
            sets:  "3 rounds",
            weight:"Cardio"
          },
        ]
      }
    ],
    tip: "Ce jour est plus intense. Si tu es fatigué, réduis les séries – il vaut mieux 2 bonnes séries que 3 bâclées."
  },

  {
    label:    "Dimanche",
    title:    "Repos complet",
    tagClass: "tag-rest",
    tagTxt:   "Récupération",
    type:     "rest",
    tip:      "Repos complet. La croissance musculaire se passe pendant la récupération, pas pendant l'effort."
  },
];
