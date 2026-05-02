/* ──────────────────────────────────────────────────────────
   data.js — Données du programme
   Programme 6j/semaine · Push / Pull / Legs × 2
   Modifie ce fichier pour changer les exercices, poids, etc.
   ────────────────────────────────────────────────────────── */

const DAYS = [

  /* ── LUNDI : Push A (Pecs, Épaules, Triceps) ─────────── */
  {
    label:    "Lundi",
    title:    "Push A — Pecs & Épaules",
    tagClass: "tag-push",
    tagTxt:   "Push",
    type:     "upper",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Rotation d'épaules + cercles de bras",
            note:   "30 sec chaque sens",
            sets:   "2 × 30 sec",
            weight: "Sans charge"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Développé couché haltères",
            note:   "Allongé au sol, coudes à 45°, descend lentement",
            sets:   "4 × 10-12 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Pompes (mains larges)",
            note:   "Sur les genoux si besoin – focus sur les pecs",
            sets:   "3 × max rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Écartés haltères",
            note:   "Légère flexion des coudes, contrôle la descente",
            sets:   "3 × 12-15 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Développé militaire haltères",
            note:   "Debout, pousse au-dessus de la tête, core gainé",
            sets:   "3 × 10-12 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Élévations latérales",
            note:   "Légère flexion du coude, arrête à hauteur d'épaule",
            sets:   "3 × 12-15 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Extensions triceps haltère",
            note:   "Bras derrière la tête, coudes près des oreilles",
            sets:   "3 × 12 rép.",
            weight: "1 × 4 kg"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Jumping jacks",
            note:   "Rythme soutenu",
            sets:   "3 × 40 sec / 20 sec repos",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Repos 60-75 sec entre séries. Les pecs et épaules partagent cette séance — commence toujours par les exercices les plus lourds quand tu es frais."
  },

  /* ── MARDI : Pull A (Dos, Biceps) ────────────────────── */
  {
    label:    "Mardi",
    title:    "Pull A — Dos & Biceps",
    tagClass: "tag-pull",
    tagTxt:   "Pull",
    type:     "upper",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Chat-vache (mobilité lombaire)",
            note:   "À quatre pattes, dos rond puis dos creux",
            sets:   "2 × 10 rép.",
            weight: "Sans charge"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Rowing haltère un bras",
            note:   "Genou + main sur chaise, tire le coude vers le haut",
            sets:   "4 × 10-12 rép.",
            weight: "1 × 6 kg (2+4)"
          },
          {
            name:   "Rowing haltères 2 bras",
            note:   "Penché à 45°, tire les deux haltères vers le ventre, dos plat",
            sets:   "3 × 12-15 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Superman / extensions lombaires",
            note:   "Ventre au sol, soulève bras et jambes simultanément, tiens 2 sec",
            sets:   "3 × 12 rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Oiseau haltères",
            note:   "Penché à 45°, bras écartés latéralement – deltoïdes postérieurs",
            sets:   "3 × 15 rép.",
            weight: "2 × 2 kg"
          },
          {
            name:   "Curl biceps alternés",
            note:   "Tourne le poignet en montant (supination), coudes fixes",
            sets:   "3 × 10-12 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Curl marteau",
            note:   "Poignet neutre, coudes contre le corps",
            sets:   "3 × 12 rép.",
            weight: "2 × 4 kg"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Mountain climbers",
            note:   "Genoux ramenés alternativement, rythme modéré",
            sets:   "3 × 40 sec / 20 sec repos",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Le dos se travaille en 'tirant' – visualise que tes mains ne font que crocheter la charge, c'est le dos qui tire, pas les bras."
  },

  /* ── MERCREDI : Legs A (Quadriceps dominant) ─────────── */
  {
    label:    "Mercredi",
    title:    "Legs A — Quadriceps",
    tagClass: "tag-legs",
    tagTxt:   "Jambes",
    type:     "lower",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Rotations de hanches + talons-fesses",
            note:   "Mobilise les genoux et les hanches",
            sets:   "2 × 30 sec chaque",
            weight: "Sans charge"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Squats haltères",
            note:   "Pieds à largeur d'épaules, descent sous le parallèle si possible",
            sets:   "4 × 12-15 rép.",
            weight: "2 × 6 kg (2+4)"
          },
          {
            name:   "Fentes avant alternées",
            note:   "Grand pas en avant, genou arrière proche du sol",
            sets:   "3 × 10 rép./jambe",
            weight: "2 × 4 kg"
          },
          {
            name:   "Squat bulgare (pied arrière sur chaise)",
            note:   "Pied arrière posé sur une chaise, descent sur la jambe avant",
            sets:   "3 × 10 rép./jambe",
            weight: "2 × 4 kg"
          },
          {
            name:   "Extensions jambe (assis sur chaise)",
            note:   "Assis, tend une jambe à l'horizontale, tiens 2 sec, alterne",
            sets:   "3 × 15 rép./jambe",
            weight: "Poids du corps"
          },
          {
            name:   "Mollets debout",
            note:   "Montée sur la pointe des pieds, bord d'une marche ou à plat",
            sets:   "4 × 20 rép.",
            weight: "2 × 6 kg ou poids du corps"
          },
        ]
      },
      {
        name: "Abdos",
        exs: [
          {
            name:   "Crunchs",
            note:   "Pieds au sol, mains aux tempes, expire en montant",
            sets:   "3 × 20 rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Planche",
            note:   "Sur les avant-bras, ventre rentré, respire normalement",
            sets:   "3 × 30-40 sec",
            weight: "Poids du corps"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Squats sautés",
            note:   "Explose vers le haut, réception douce",
            sets:   "3 × 30 sec / 30 sec repos",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Les jambes sont le plus grand groupe musculaire — elles brûlent beaucoup de calories. Repos 90 sec entre les séries de squats, 60 sec pour le reste."
  },

  /* ── JEUDI : Push B (Pecs, Triceps focus) ────────────── */
  {
    label:    "Jeudi",
    title:    "Push B — Pecs & Triceps",
    tagClass: "tag-push",
    tagTxt:   "Push",
    type:     "upper",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Pompes lentes (échauffement)",
            note:   "5 reps très lentes, 3 sec en descente",
            sets:   "2 × 5 rép.",
            weight: "Poids du corps"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Pompes inclinées (pieds sur chaise)",
            note:   "Travaille la partie haute des pecs",
            sets:   "4 × 8-12 rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Développé couché haltères (prise serrée)",
            note:   "Coudes à 30° du corps, accent sur les triceps",
            sets:   "3 × 12 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Pompes serrées",
            note:   "Mains sous les épaules, coudes collés au corps",
            sets:   "3 × max rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Élévations frontales haltères",
            note:   "Bras tendu, monte à hauteur des yeux, descent contrôlé",
            sets:   "3 × 12 rép.",
            weight: "1 × 4 kg"
          },
          {
            name:   "Extensions triceps haltère (un bras)",
            note:   "Bras derrière la tête, coude fixe",
            sets:   "3 × 12 rép./bras",
            weight: "1 × 4 kg"
          },
          {
            name:   "Dips entre deux chaises",
            note:   "Mains sur deux chaises derrière toi, descent en pliant les coudes",
            sets:   "3 × 10-15 rép.",
            weight: "Poids du corps"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Burpees",
            note:   "Pompe au sol + saut en fin de mouvement",
            sets:   "3 × 30 sec / 30 sec repos",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Push B met plus l'accent sur les triceps que Push A. Les dips entre chaises sont l'un des meilleurs exercices triceps sans matériel — va jusqu'au bout du mouvement."
  },

  /* ── VENDREDI : Pull B (Dos, Biceps + Abdos) ─────────── */
  {
    label:    "Vendredi",
    title:    "Pull B — Dos & Abdos",
    tagClass: "tag-pull",
    tagTxt:   "Pull",
    type:     "upper",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Rotations de tronc debout",
            note:   "Mains sur les hanches, rotation lente",
            sets:   "2 × 10 rép. chaque côté",
            weight: "Sans charge"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Rowing élastique assis (tirage horizontal)",
            note:   "Élastique autour d'un pied de table, assis au sol, tire vers le ventre",
            sets:   "4 × 15 rép.",
            weight: "Élastique"
          },
          {
            name:   "Rowing haltère un bras (tempo lent)",
            note:   "2 sec en montée, 3 sec en descente – focus sur la contraction",
            sets:   "3 × 10 rép./bras",
            weight: "1 × 6 kg (2+4)"
          },
          {
            name:   "Good morning haltères",
            note:   "Mains sur les épaules, buste en avant dos plat, renforce érecteurs",
            sets:   "3 × 15 rép.",
            weight: "2 × 4 kg"
          },
          {
            name:   "Curl biceps concentré (assis)",
            note:   "Coude appuyé sur la cuisse, montée lente et contrôlée",
            sets:   "3 × 12 rép./bras",
            weight: "1 × 6 kg"
          },
        ]
      },
      {
        name: "Abdos (circuit)",
        exs: [
          {
            name:   "Crunchs obliques",
            note:   "Genoux d'un côté, coude opposé vers les genoux",
            sets:   "3 × 15 rép./côté",
            weight: "Poids du corps"
          },
          {
            name:   "Relevés de jambes allongé",
            note:   "Bas du dos collé au sol, jambes montées à 90°",
            sets:   "3 × 15 rép.",
            weight: "Poids du corps"
          },
          {
            name:   "Planche latérale",
            note:   "Sur l'avant-bras, corps aligné, hanches hautes",
            sets:   "3 × 20 sec/côté",
            weight: "Poids du corps"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Circuit HIIT",
            note:   "30s mountain climbers → 30s jumping jacks → 30s repos × 3",
            sets:   "3 rounds",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Pull B est moins lourd que Pull A mais plus complet sur les abdos. Profite de la fin de semaine pour vraiment travailler ton gainage — c'est la base de tout le reste."
  },

  /* ── SAMEDI : Legs B (Ischio / Fessiers dominant) ─────── */
  {
    label:    "Samedi",
    title:    "Legs B — Fessiers & Ischio",
    tagClass: "tag-legs",
    tagTxt:   "Jambes",
    type:     "lower",
    duration: "~40-45 min",
    sections: [
      {
        name: "Échauffement",
        exs: [
          {
            name:   "Hip circles + fentes statiques",
            note:   "Grands cercles de hanches, puis fentes sans poids",
            sets:   "2 × 30 sec chaque",
            weight: "Sans charge"
          },
        ]
      },
      {
        name: "Exercices principaux",
        exs: [
          {
            name:   "Hip thrust au sol",
            note:   "Dos au sol, pieds à plat, haltère sur le bassin, pousse fort vers le haut",
            sets:   "4 × 15 rép.",
            weight: "1 × 8 kg (2+2+4)"
          },
          {
            name:   "Soulevé de terre roumain haltères",
            note:   "Jambes quasi tendues, haltères le long des cuisses, dos plat",
            sets:   "4 × 12 rép.",
            weight: "2 × 6 kg (2+4)"
          },
          {
            name:   "Fentes latérales",
            note:   "Grand pas sur le côté, genou fléchi, jambe opposée tendue",
            sets:   "3 × 10 rép./jambe",
            weight: "2 × 4 kg"
          },
          {
            name:   "Pont fessier une jambe",
            note:   "Allongé, une jambe levée tendue, pousse avec le pied au sol",
            sets:   "3 × 12 rép./jambe",
            weight: "Poids du corps"
          },
          {
            name:   "Good morning (ischio)",
            note:   "Mains sur les épaules, buste en avant lentement, ressens l'étirement",
            sets:   "3 × 12 rép.",
            weight: "Sans charge ou 2 × 2 kg"
          },
        ]
      },
      {
        name: "Cardio final",
        exs: [
          {
            name:   "Circuit HIIT final",
            note:   "30s squats sautés → 30s fentes alternées → 30s repos × 3",
            sets:   "3 rounds",
            weight: "Cardio"
          },
        ]
      }
    ],
    tip: "Legs B cible les ischio-jambiers et fessiers — la partie souvent négligée. Le soulevé de terre roumain est roi ici : garde le dos plat et sens bien l'étirement dans les ischios."
  },

  /* ── DIMANCHE : Repos complet ─────────────────────────── */
  {
    label:    "Dimanche",
    title:    "Repos complet",
    tagClass: "tag-rest",
    tagTxt:   "Récupération",
    type:     "rest",
    tip:      "Repos complet mérité. 6 séances c'est un volume élevé — ce jour est aussi important que les autres. Hydrate-toi bien et mange suffisamment de protéines pour récupérer."
  },

];