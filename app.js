/* ═══════════════════════════════════════════════════
   BASE DE DONNÉES D'EXERCICES
   71 exercices, tags musculaires précis (sans emoji).
═══════════════════════════════════════════════════ */
const EXERCISES = [
  { nom: "Armless Prayer", zones: ["Épaules", "Trapèzes", "Dorsaux", "Triceps"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Traction sur les dorsaux et ouverture de la ceinture scapulaire.", instructions: ["À genoux, posez les coudes sur un banc ou une box.", "Joignez les mains derrière la nuque sans forcer sur la tête.", "Laissez descendre la poitrine vers le sol tout en gardant le dos neutre.", "Cherchez à éloigner les coudes du centre du corps."] },
  { nom: "Big Toe Stretch", zones: ["Pieds", "Aponévrose plantaire"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Libération des tensions sous la plante du pied.", instructions: ["À genoux, repliez les orteils vers l'avant, talons serrés.", "Asseyez-vous sur vos talons pour mettre en tension l'arche plantaire.", "Gardez le buste droit pour bien répartir le poids.", "Ne laissez pas les chevilles s'affaisser vers l'extérieur."] },
  { nom: "Bottom Squat", zones: ["Hanches", "Fessiers", "Chevilles"], unilateral: false, temps_min: 90, temps_max: 180, stimulus: "Ouverture profonde des hanches en posture accroupie.", instructions: ["Pieds à largeur de bassin, descendez les fesses vers les talons.", "Utilisez vos coudes pour maintenir les genoux dans l'axe des pointes de pieds.", "Cherchez à redresser la colonne vertébrale, évitez d'arrondir le bas du dos.", "Ancrez fermement les talons dans le sol."] },
  { nom: "Butterfly", zones: ["Adducteurs", "Hanches"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Élongation des adducteurs et gain de mobilité hanche.", instructions: ["Assis, joignez les plantes de pieds et laissez tomber les genoux sur les côtés.", "Tenez vos chevilles et allongez la colonne vertébrale.", "Utilisez le poids des bras pour accentuer légèrement la descente des genoux.", "Maintenez une respiration fluide pour favoriser le relâchement musculaire."] },
  { nom: "Calf Stretch On Wall", zones: ["Mollets", "Chevilles"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Détente du triceps sural et mobilité de cheville.", instructions: ["Placez la pointe du pied contre un mur, talon au sol.", "Poussez le genou vers l'avant jusqu'à sentir l'étirement du mollet.", "Gardez le talon bien ancré dans le sol tout au long de la phase.", "Ne cambrez pas le bas du dos."] },
  { nom: "Cross Behind The Back", zones: ["Triceps", "Épaules"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Allongement de la chaîne postérieure du bras.", instructions: ["Passez un bras au-dessus de la tête, pliez le coude pour descendre la main dans le dos.", "Utilisez l'autre main pour exercer une pression douce sur le coude plié.", "Gardez la tête alignée, évitez de la pousser vers l'avant.", "Contractez légèrement les abdominaux pour stabiliser le tronc."] },
  { nom: "Crossed Prayer", zones: ["Épaules", "Trapèzes"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement ciblé de la capsule postérieure de l'épaule.", instructions: ["En appui au sol, croisez un bras sous le corps.", "Posez l'épaule et la tempe au sol.", "Utilisez le bras libre pour stabiliser la position.", "Laissez le poids du buste étirer l'arrière de l'épaule."] },
  { nom: "Cuff Stretch", zones: ["Rotateurs", "Épaules"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Mobilisation des rotateurs de l'épaule.", instructions: ["Allongé sur le côté, coude plié à 90°.", "Avec la main opposée, appuyez doucement sur l'avant-bras vers le sol.", "Veillez à ne pas décoller l'épaule du sol.", "Cherchez un étirement léger, ne cherchez pas l'amplitude maximale immédiate."] },
  { nom: "Downward Facing Dog", zones: ["Ischio-Jambiers", "Lombaires", "Mollets", "Trapèzes"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Allongement global de la chaîne postérieure.", instructions: ["Mains au sol, montez les fesses vers le ciel pour former un V inversé.", "Pressez les mains dans le tapis et cherchez à ramener les talons vers le sol.", "Poussez les fesses vers l'arrière pour allonger la colonne.", "Relâchez la tête entre les épaules."] },
  { nom: "Fingers & Forearms Stretch", zones: ["Fléchisseurs de l'avant-bras"], unilateral: false, temps_min: 45, temps_max: 90, stimulus: "Libération des tensions dans les avant-bras.", instructions: ["À genoux, posez les mains au sol, doigts pointés vers les genoux.", "Reculez doucement les fesses pour étirer l'intérieur des avant-bras.", "Gardez les paumes à plat au maximum.", "Ne forcez pas si vous sentez une douleur articulaire au poignet."] },
  { nom: "Half Kneeling Quad Stretch", zones: ["Quadriceps", "Hanches"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Étirement actif du psoas et quadriceps.", instructions: ["Fente avant, genou arrière au sol.", "Contractez le fessier côté genou au sol pour basculer le bassin en rétroversion.", "Avancez le bassin en gardant le buste bien droit.", "Sentez l'étirement sur le devant de la cuisse."] },
  { nom: "Half Lotus On Wall", zones: ["Fessiers", "Lombaires", "Hanches"], unilateral: true, temps_min: 90, temps_max: 180, stimulus: "Détente profonde du complexe fessier.", instructions: ["Allongé au sol, placez une cheville sur le genou opposé en appui contre un mur.", "Cherchez à rapprocher les fessiers du mur tout en poussant le genou plié vers l'extérieur.", "Maintenez le bas du dos au sol.", "Expirez lentement pour accentuer l'ouverture."] },
  { nom: "Half Spinal Twist", zones: ["Fessiers", "Hanches", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Torsion vertébrale et mobilité pelvienne.", instructions: ["Assis, jambes tendues, passez un pied par-dessus l'autre genou.", "Engagez une rotation du buste en utilisant le coude opposé pour faire levier.", "Regardez vers l'arrière pour accentuer la torsion.", "Gardez les deux fessiers bien ancrés au sol."] },
  { nom: "Hamstring Rack Stretch", zones: ["Ischio-Jambiers"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement ischio-jambier avec support.", instructions: ["Posez un talon sur un support élevé (rack, barre).", "Gardez la jambe tendue et le buste droit.", "Penchez-vous doucement vers l'avant en gardant le dos plat.", "Pensez à ramener la pointe de pied vers vous."] },
  { nom: "Hamstrings Stretch", zones: ["Ischio-Jambiers", "Lombaires"], unilateral: false, temps_min: 90, temps_max: 180, stimulus: "Étirement complet de la chaîne postérieure.", instructions: ["Assis au sol, jambes tendues devant vous.", "Attrapez vos pieds ou vos chevilles, gardez le dos le plus plat possible.", "Cherchez à descendre le ventre vers les cuisses, pas le front vers les genoux.", "Relâchez les tensions du haut du dos."] },
  { nom: "High Shin Pull", zones: ["Fessiers", "Hanches"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Ouverture latérale de la hanche.", instructions: ["Debout, tirez le tibia vers la poitrine en plaçant le pied dans le pli du coude.", "Gardez la jambe d'appui stable et le dos droit.", "Cherchez à garder le bassin parallèle au sol.", "Maintenez l'équilibre en fixant un point devant vous."] },
  { nom: "Kneeling Hamstring Stretch", zones: ["Ischio-Jambiers"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement dynamique ischio-jambier.", instructions: ["À genoux, tendez une jambe devant vous, talon au sol.", "Penchez-vous vers l'avant tout en gardant le dos droit.", "Sentez l'étirement sous la cuisse.", "Ne verrouillez pas le genou de la jambe tendue."] },
  { nom: "Kneeling Quads Stretch", zones: ["Quadriceps", "Hanches"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement passif intense du quadriceps.", instructions: ["À genoux, asseyez-vous sur vos talons, puis inclinez le buste vers l'arrière.", "Prenez appui sur les mains derrière vous.", "Contractez les fessiers pour protéger les lombaires.", "Soulevez légèrement le bassin pour intensifier l'étirement."] },
  { nom: "Knight Stretch On Box", zones: ["Hanches", "Quadriceps", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Étirement du psoas en profondeur (Couch Stretch).", instructions: ["Un genou au sol, le pied arrière remonté sur une box ou contre un mur.", "Redressez le buste, contractez le fessier arrière.", "Gardez les hanches alignées vers l'avant.", "Ne cambrez pas le dos, cherchez l'étirement du haut de la cuisse."] },
  { nom: "Lat Leg Stretch", zones: ["TFL", "Fessiers"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Libération du muscle tenseur du fascia lata (TFL).", instructions: ["Debout, croisez la jambe à étirer derrière l'autre.", "Poussez les hanches du côté de la jambe arrière.", "Levez le bras du côté étiré pour allonger tout le flanc.", "Gardez les deux pieds à plat."] },
  { nom: "Lat Stretch", zones: ["Dorsaux", "Épaules"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Étirement latéral du grand dorsal.", instructions: ["Face à un montant, saisissez-le avec la main.", "Déplacez vos hanches à l'opposé pour créer une tension dans le flanc.", "Gardez le bras tendu.", "Respirez largement dans les côtes pour ouvrir la zone latérale."] },
  { nom: "Lower Pec Stretch", zones: ["Pectoraux", "Épaules"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Ouverture de la chaîne antérieure pectorale.", instructions: ["Placez votre avant-bras contre un cadre de porte ou un poteau.", "Avancez le pied du même côté et pivotez le buste à l'opposé.", "Gardez l'épaule basse, ne la laissez pas monter vers l'oreille.", "Contrôlez l'ouverture de la poitrine."] },
  { nom: "Manual Extensor Forearm Stretch", zones: ["Extenseurs de l'avant-bras"], unilateral: true, temps_min: 45, temps_max: 90, stimulus: "Étirement de l'avant-bras.", instructions: ["Bras tendu devant vous, paume vers le bas.", "Utilisez l'autre main pour ramener le dos de la main vers vous.", "Gardez l'épaule basse.", "Ne forcez pas sur l'articulation du poignet."] },
  { nom: "Manual Forearm Stretch", zones: ["Fléchisseurs"], unilateral: true, temps_min: 45, temps_max: 90, stimulus: "Détente des avant-bras.", instructions: ["Bras tendu, paume vers l'avant.", "Avec l'autre main, tirez les doigts vers vous.", "Gardez l'épaule basse."] },
  { nom: "Manual Triceps Stretch", zones: ["Triceps", "Épaules"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Allongement du long chef du triceps.", instructions: ["Coude vers le ciel, main dans le dos.", "Pressez doucement sur le coude.", "Gardez le buste droit."] },
  { nom: "Medium Pec Stretch", zones: ["Pectoraux", "Épaules"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Ouverture pectorale.", instructions: ["Avant-bras contre un mur à hauteur d'épaule.", "Pivotez le buste à l'opposé.", "Contrôlez l'ouverture sans forcer."] },
  { nom: "Neck Band", zones: ["Trapèzes"], unilateral: false, temps_min: 45, temps_max: 120, stimulus: "Relâchement cervical.", instructions: ["Utilisez une bande élastique légère.", "Laissez le poids étirer latéralement le cou.", "Relâchez les épaules vers le bas."] },
  { nom: "Overhead Squat On Wall", zones: ["Épaules", "Pectoraux", "Hanches"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Mobilité combinée squat et overhead.", instructions: ["Dos au mur, bras levés contre le mur.", "Descendez en squat en gardant le contact total.", "Ne cambrez pas le dos."] },
  { nom: "Pec Stretch On The Ground", zones: ["Pectoraux", "Épaules"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Étirement passif du pectoral.", instructions: ["Allongé sur le ventre, bras en croix à 90°.", "Poussez avec la main libre pour pivoter.", "Laissez l'épaule s'ouvrir."] },
  { nom: "Pigeon", zones: ["Fessiers", "Hanches", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Ouverture profonde de hanche.", instructions: ["Jambe avant pliée au sol.", "Bassin carré vers le sol.", "Relâchez progressivement le haut du corps."] },
  { nom: "Pigeon On Box", zones: ["Fessiers", "Hanches"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Étirement intense du moyen fessier.", instructions: ["Tibia posé sur une box, genou fléchi.", "Gardez le dos neutre.", "Inclinez-vous vers l'avant."] },
  { nom: "Prayer Lat Stretch", zones: ["Épaules", "Dorsaux"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Traction dorsale.", instructions: ["À genoux, bras tendus au sol.", "Reculez les fesses sur les talons.", "Cherchez l'allongement latéral."] },
  { nom: "Prayer On Roller", zones: ["Trapèzes", "Dorsaux"], unilateral: false, temps_min: 60, temps_max: 150, stimulus: "Relâchement dorsal et trapèzes.", instructions: ["Mains sur un foam roller, bras tendus.", "Roulez doucement vers l'avant.", "Laissez le dos se creuser."] },
  { nom: "Quad Stretch", zones: ["Quadriceps"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Détente du quadriceps.", instructions: ["Debout ou à genoux, saisissez le pied.", "Ramenez le talon vers la fesse.", "Genoux alignés."] },
  { nom: "Rainbow Stretch", zones: ["Obliques", "Dorsaux"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Étirement latéral.", instructions: ["Jambes écartées, inclinez le buste.", "Bras tendu au-dessus de la tête.", "Cherchez la courbe latérale."] },
  { nom: "Resting Cossack Squat", zones: ["Adducteurs", "Chevilles"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Ouverture adducteurs.", instructions: ["Fente latérale, jambe tendue.", "Poids sur la jambe fléchie.", "Gardez le talon au sol."] },
  { nom: "Rhombo Stretch", zones: ["Trapèzes", "Épaules"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Relâchement entre les omoplates.", instructions: ["Croisez les bras devant vous, coudes liés.", "Poussez les mains vers l'avant.", "Écartez les omoplates."] },
  { nom: "Samson Stretch", zones: ["Hanches", "Quadriceps", "Dorsaux", "Obliques"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Étirement global de chaîne.", instructions: ["Fente, mains jointes au-dessus.", "Poussez le bassin vers l'avant.", "Allongez tout le côté."] },
  { nom: "Seated Piriformis Stretch", zones: ["Fessiers", "Hanches", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Détente du piriforme.", instructions: ["Assis, cheville sur genou opposé.", "Redressez le buste.", "Poussez légèrement le genou."] },
  { nom: "Self Hug Stretch", zones: ["Trapèzes", "Épaules"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Relâchement des trapèzes.", instructions: ["Entourez vos épaules avec vos bras.", "Cherchez à attraper vos omoplates.", "Arrondissez le haut du dos."] },
  { nom: "Shin Stretch", zones: ["Tibial Antérieur", "Chevilles"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Détente du tibial.", instructions: ["Debout, pointe de pied au sol derrière vous.", "Poussez le coup de pied vers le sol.", "Maintenez la cheville alignée."] },
  { nom: "Shoulder External Rotation With Pipe", zones: ["Épaules"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Mobilité épaule.", instructions: ["Coude à 90°, bras contre un montant.", "Pivotez pour ouvrir l'épaule.", "Gardez le coude stable."] },
  { nom: "Shoulder Internal Rotation", zones: ["Épaules", "Rotateurs"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Rotation interne.", instructions: ["Allongé sur le côté, coude à 90°.", "Pressez doucement la main vers le sol.", "Épaule stable."] },
  { nom: "Standing Cuff Stretch", zones: ["Rotateurs", "Épaules"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Relâchement coiffe.", instructions: ["Dos contre un support, bras en rotation externe.", "Gardez l'épaule basse.", "Maintenez la tension."] },
  { nom: "Standing Forward Bend", zones: ["Lombaires", "Ischio-Jambiers", "Mollets"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Allongement chaîne postérieure.", instructions: ["Jambes tendues, pieds largeur bassin.", "Laissez le poids du corps pendre.", "Relâchez la tête."] },
  { nom: "Standing Quad Stretch", zones: ["Quadriceps"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement debout.", instructions: ["Saisissez la cheville.", "Contractez le fessier pour aligner hanches.", "Gardez l'équilibre."] },
  { nom: "Standing V Stretch", zones: ["Adducteurs", "Ischio-Jambiers"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Grand écart frontal.", instructions: ["Jambes écartées, buste au sol.", "Gardez les genoux verrouillés.", "Cherchez le relâchement."] },
  { nom: "Twisted Hip Opener", zones: ["Quadriceps", "Hanches"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Ouverture hanche en torsion.", instructions: ["Fente, attrapez le pied arrière.", "Gardez le buste droit.", "Poussez le bassin vers le sol."] },
  { nom: "Upper Pec Stretch", zones: ["Pectoraux", "Épaules"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Cible le haut du grand pectoral.", instructions: ["Main sur un support au-dessus de l'épaule.", "Pivotez le buste.", "Gardez l'épaule basse."] },
  { nom: "V Sit", zones: ["Adducteurs", "Hanches", "Ischio-Jambiers"], unilateral: false, temps_min: 90, temps_max: 180, stimulus: "Étirement complet chaîne postérieure et adducteurs.", instructions: ["Assis jambes largement écartées.", "Gardez le dos plat.", "Avancez les mains progressivement."] },
  { nom: "Wall Triceps Stretch", zones: ["Triceps", "Épaules"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Libération du triceps.", instructions: ["Coude contre le mur.", "Avancez le bassin.", "Relâchez le bras vers le bas."] },
  { nom: "Wall-Assisted Achilles Stretch", zones: ["Chevilles", "Mollets"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Mobilité de cheville.", instructions: ["Pointe contre le mur.", "Ramenez le talon vers le sol.", "Pressez le genou contre le mur."] },
  { nom: "Wall-Assisted Arm Stretch", zones: ["Pectoraux", "Biceps", "Épaules"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Ouverture antérieure.", instructions: ["Bras tendu contre le mur.", "Pivotez le buste à l'opposé.", "Gardez la main à hauteur d'épaule."] },
  { nom: "Wall-Assisted Calf Stretch", zones: ["Mollets", "Chevilles"], unilateral: true, temps_min: 60, temps_max: 120, stimulus: "Détente triceps sural.", instructions: ["Main au mur, une jambe derrière.", "Talon au sol, jambe arrière tendue.", "Poussez le bassin vers l'avant."] },
  { nom: "Wall-Assisted Shoulder Opener", zones: ["Pectoraux", "Biceps", "Épaules", "Fléchisseurs"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Ouverture épaule.", instructions: ["Avant-bras au mur.", "Poussez l'épaule vers l'avant.", "Ne cambrez pas."] },
  { nom: "The Shoemaker", zones: ["Pieds"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Libération des fascias plantaires.", instructions: ["À genoux, massez la voûte plantaire.", "Étirez chaque orteil individuellement."] },
  { nom: "The Turtle", zones: ["Trapèzes", "Lombaires"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Décompression vertébrale.", instructions: ["Assis, jambes pliées devant.", "Passez les bras sous les jambes.", "Relâchez le dos vers l'avant."] },
  { nom: "The Wall Butterfly", zones: ["Adducteurs", "Hanches"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Adducteurs passifs.", instructions: ["Allongé fesses au mur.", "Laissez tomber les jambes sur les côtés.", "Utilisez la pesanteur."] },
  { nom: "The Wall Candle", zones: ["Lombaires", "Ischio-Jambiers", "Mollets"], unilateral: false, temps_min: 90, temps_max: 180, stimulus: "Drainage et étirement postérieur.", instructions: ["Jambes verticales contre le mur.", "Relâchez le bassin au sol.", "Respirez profondément."] },
  { nom: "The Wall Hinge", zones: ["Épaules", "Trapèzes", "Dorsaux", "Ischio-Jambiers"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Allongement postural.", instructions: ["Mains au mur, reculez les pieds.", "Faites un angle droit avec le corps.", "Poussez les fesses vers l'arrière."] },
  { nom: "The Wall Twist", zones: ["Épaules", "Pectoraux", "Hanches", "Dorsaux"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Torsion intégrale.", instructions: ["En squat profond face au mur.", "Rotation d'un bras vers le ciel.", "Suivez la main du regard."] },
  { nom: "The Wall V Stretch", zones: ["Adducteurs", "Ischio-Jambiers"], unilateral: false, temps_min: 90, temps_max: 180, stimulus: "Grand écart passif.", instructions: ["Fesses au mur, jambes en V.", "Laissez les adducteurs s'allonger.", "Maintenez le dos neutre."] },
  { nom: "Trap Stretch", zones: ["Trapèzes"], unilateral: true, temps_min: 45, temps_max: 120, stimulus: "Détente nuque.", instructions: ["Main dans le dos.", "Inclinez la tête à l'opposé.", "Relâchez l'épaule."] },
  { nom: "Supine Piriformis Stretch", zones: ["Fessiers", "Lombaires", "Hanches"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Soulagement fessier.", instructions: ["Allongé, cheville sur genou opposé.", "Tirez la cuisse vers vous.", "Maintenez le sacrum au sol."] },
  { nom: "The Breakdancer", zones: ["Ischio-Jambiers", "Mollets", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Étirement fessier/ischio.", instructions: ["Une jambe tendue, l'autre pliée.", "Penchez-vous sur la jambe tendue.", "Gardez le dos droit."] },
  { nom: "The Cobra", zones: ["Abdominaux", "Trapèzes", "Lombaires"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Extension abdominale.", instructions: ["Allongé, poussez sur les mains.", "Regardez vers le haut.", "Dégagez les épaules."] },
  { nom: "The Frog", zones: ["Adducteurs", "Hanches"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Ouverture hanche profonde.", instructions: ["À quatre pattes, genoux écartés.", "Poussez le bassin vers l'arrière.", "Gardez les pieds alignés aux genoux."] },
  { nom: "The Knight Stretch", zones: ["Hanches", "Quadriceps", "Lombaires"], unilateral: true, temps_min: 60, temps_max: 180, stimulus: "Psoas profond.", instructions: ["Fente, genou au sol.", "Contractez le fessier arrière.", "Gardez le buste vertical."] },
  { nom: "The Mast", zones: ["Ischio-Jambiers"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Ischio-jambiers actif.", instructions: ["Allongé, jambe tendue à la verticale.", "Gardez le bassin au sol.", "Utilisez une sangle si besoin."] },
  { nom: "The Prayer", zones: ["Épaules", "Trapèzes", "Dorsaux"], unilateral: false, temps_min: 60, temps_max: 180, stimulus: "Traction scapulaire.", instructions: ["À genoux, mains jointes au sol.", "Allongez le dos au maximum.", "Relâchez la tête entre les bras."] },
  { nom: "The Sagittarius", zones: ["Lombaires", "Pectoraux", "Obliques"], unilateral: true, temps_min: 60, temps_max: 150, stimulus: "Torsion colonne.", instructions: ["Allongé, passez une jambe au-dessus.", "Gardez les deux épaules au sol.", "Regardez à l'opposé du genou."] }
];

//test
/* Toutes les zones musculaires uniques de la base, utilisées
   pour l'écran "Routine Libre" (un seul groupe, sans grandes chaînes). */
const MUSCLES_ISOLES = [
  "Épaules", "Trapèzes", "Dorsaux", "Triceps", "Biceps", "Pectoraux",
  "Rotateurs", "Fléchisseurs", "Fléchisseurs de l'avant-bras", "Extenseurs de l'avant-bras",
  "Abdominaux", "Obliques", "Lombaires",
  "Hanches", "Fessiers", "TFL", "Adducteurs", "Quadriceps", "Ischio-Jambiers",
  "Mollets", "Chevilles", "Tibial Antérieur", "Pieds", "Aponévrose plantaire"
];

/* ═══════════════════════════════════════════════════
   PRE-WOD — BASE DE MOUVEMENTS CLASSIQUES
   Mouvements d'haltérophilie / CrossFit basiques, chacun
   relié aux chaînes musculaires (mêmes tags que EXERCISES)
   qu'il sollicite. Utilisé pour cibler l'activation avant
   l'entraînement à partir des mouvements prévus par l'utilisateur.
═══════════════════════════════════════════════════ */
const MOUVEMENTS_PREWOD = [
  { nom: "Air Squat",           zones: ["Quadriceps", "Fessiers", "Hanches", "Chevilles"] },
  { nom: "Back Squat",          zones: ["Quadriceps", "Fessiers", "Hanches", "Lombaires"] },
  { nom: "Front Squat",         zones: ["Quadriceps", "Hanches", "Épaules", "Chevilles"] },
  { nom: "Overhead Squat",      zones: ["Épaules", "Pectoraux", "Hanches", "Chevilles", "Quadriceps"] },
  { nom: "Deadlift",            zones: ["Ischio-Jambiers", "Lombaires", "Fessiers", "Dorsaux"] },
  { nom: "Sumo Deadlift",       zones: ["Adducteurs", "Fessiers", "Ischio-Jambiers", "Lombaires"] },
  { nom: "Clean",               zones: ["Hanches", "Quadriceps", "Trapèzes", "Épaules"] },
  { nom: "Clean & Jerk",        zones: ["Hanches", "Quadriceps", "Épaules", "Triceps"] },
  { nom: "Snatch",              zones: ["Épaules", "Hanches", "Chevilles", "Dorsaux"] },
  { nom: "Push Press",          zones: ["Épaules", "Triceps", "Quadriceps"] },
  { nom: "Push Jerk",           zones: ["Épaules", "Triceps", "Hanches", "Chevilles"] },
  { nom: "Strict Press",        zones: ["Épaules", "Triceps", "Abdominaux"] },
  { nom: "Bench Press",         zones: ["Pectoraux", "Épaules", "Triceps"] },
  { nom: "Thruster",            zones: ["Quadriceps", "Épaules", "Hanches"] },
  { nom: "Pull-Up",             zones: ["Dorsaux", "Biceps", "Trapèzes"] },
  { nom: "Chest To Bar",        zones: ["Dorsaux", "Biceps", "Épaules"] },
  { nom: "Muscle-Up",           zones: ["Dorsaux", "Pectoraux", "Triceps", "Épaules"] },
  { nom: "Toes To Bar",         zones: ["Abdominaux", "Fléchisseurs de l'avant-bras", "Dorsaux"] },
  { nom: "Kipping HSPU",        zones: ["Épaules", "Triceps", "Trapèzes"] },
  { nom: "Wall Walk",           zones: ["Épaules", "Abdominaux", "Pectoraux"] },
  { nom: "Handstand Walk",      zones: ["Épaules", "Fléchisseurs de l'avant-bras", "Abdominaux"] },
  { nom: "Box Jump",            zones: ["Quadriceps", "Mollets", "Chevilles"] },
  { nom: "Burpee",              zones: ["Épaules", "Quadriceps", "Abdominaux"] },
  { nom: "Rowing (Machine)",    zones: ["Dorsaux", "Ischio-Jambiers", "Quadriceps"] },
  { nom: "Double Under",        zones: ["Mollets", "Chevilles"] },
  { nom: "Wall Ball",           zones: ["Quadriceps", "Épaules", "Hanches"] },
  { nom: "Kettlebell Swing",    zones: ["Fessiers", "Hanches", "Ischio-Jambiers", "Épaules"] },
  { nom: "Lunge",               zones: ["Quadriceps", "Fessiers", "Hanches"] },
  { nom: "Good Morning",        zones: ["Ischio-Jambiers", "Lombaires", "Fessiers"] },
  { nom: "Barbell Row",         zones: ["Dorsaux", "Trapèzes", "Biceps"] },
  { nom: "Rope Climb",          zones: ["Dorsaux", "Fléchisseurs de l'avant-bras", "Biceps"] },
];

/* ═══════════════════════════════════════════════════
   PROFIL DE MOBILITÉ — 6 ZONES CLÉS
   Chaque zone du profil est mappée vers un ou plusieurs
   tags réels de la base EXERCISES, pour le filtrage.
═══════════════════════════════════════════════════ */
const PROFILE_ZONES = [
  { key: "epaules",          label: "Épaules",            dbTags: ["Épaules", "Rotateurs", "Trapèzes"] },
  { key: "overhead",         label: "Overhead",            dbTags: ["Épaules", "Dorsaux", "Triceps", "Pectoraux", "Biceps"] },
  { key: "thorax",           label: "Thorax",             dbTags: ["Obliques", "Abdominaux", "Pectoraux", "Dorsaux"] },
  { key: "hanches",          label: "Hanches",            dbTags: ["Hanches", "Fessiers", "Adducteurs", "TFL", "Quadriceps"] },
  { key: "chaine_posterieure", label: "Chaîne Postérieure", dbTags: ["Ischio-Jambiers", "Lombaires", "Mollets"] },
  { key: "chevilles",        label: "Chevilles",          dbTags: ["Chevilles", "Mollets", "Tibial Antérieur", "Pieds", "Aponévrose plantaire"] },
];

const PROFILE_STORAGE_KEY = "flexflow_mobility_profile";
const DEFAULT_PROFILE_VALUE = 50;

/* Charge le profil depuis localStorage, ou crée des valeurs par défaut */
function loadMobilityProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Sécurité : s'assure que toutes les zones existent même si le schéma a évolué
      const safe = {};
      PROFILE_ZONES.forEach(z => { safe[z.key] = typeof parsed[z.key] === 'number' ? parsed[z.key] : DEFAULT_PROFILE_VALUE; });
      return safe;
    }
  } catch (e) { console.warn('Profil illisible, réinitialisation.', e); }
  const fresh = {};
  PROFILE_ZONES.forEach(z => { fresh[z.key] = DEFAULT_PROFILE_VALUE; });
  return fresh;
}

/* Sauvegarde immédiate dans localStorage */
function saveMobilityProfile(profile) {
  try { localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile)); }
  catch (e) { console.warn('Impossible de sauvegarder le profil.', e); }
}

let mobilityProfile = loadMobilityProfile();

/* ═══════════════════════════════════════════════════
   CALCUL DES 2 POINTS FAIBLES
   Tri croissant par score ; en cas d'égalité sur la 2e
   position, tirage aléatoire parmi les ex-aequo.
═══════════════════════════════════════════════════ */
function computeWeakPoints(profile) {
  const entries = PROFILE_ZONES.map(z => ({ ...z, value: profile[z.key] }));
  entries.sort((a, b) => a.value - b.value);

  const lowestValue = entries[0].value;
  const tiedForFirst = entries.filter(e => e.value === lowestValue);

  let pf1, remaining;
  if (tiedForFirst.length > 1) {
    // Égalité sur la 1ère place : tirage aléatoire parmi les ex-aequo
    const idx = Math.floor(Math.random() * tiedForFirst.length);
    pf1 = tiedForFirst[idx];
    remaining = entries.filter(e => e !== pf1);
  } else {
    pf1 = entries[0];
    remaining = entries.slice(1);
  }

  const secondLowestValue = remaining[0].value;
  const tiedForSecond = remaining.filter(e => e.value === secondLowestValue);
  const pf2 = tiedForSecond.length > 1
    ? tiedForSecond[Math.floor(Math.random() * tiedForSecond.length)]
    : remaining[0];

  return [pf1, pf2];
}

/* ═══════════════════════════════════════════════════
   PROFIL UTILISATEUR — nom + date d'inscription
═══════════════════════════════════════════════════ */
const USER_STORAGE_KEY = "flexflow_user";

function loadUserProfile() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.name === 'string' && typeof parsed.memberSince === 'string') return parsed;
    }
  } catch (e) { console.warn('Profil utilisateur illisible, réinitialisation.', e); }
  const fresh = { name: '', memberSince: new Date().toISOString() };
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(fresh));
  return fresh;
}

function saveUserProfile(profile) {
  try { localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(profile)); }
  catch (e) { console.warn('Impossible de sauvegarder le profil utilisateur.', e); }
}

let userProfile = loadUserProfile();

const MONTHS_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
function formatMemberSince(isoDate) {
  const d = new Date(isoDate);
  if (isNaN(d.getTime())) return '';
  return `${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}

/* ═══════════════════════════════════════════════════
   STATISTIQUES — cumul du temps de mobilité
═══════════════════════════════════════════════════ */
const STATS_STORAGE_KEY = "flexflow_stats";

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        totalSeconds: typeof parsed.totalSeconds === 'number' ? parsed.totalSeconds : 0,
        sessionsCount: typeof parsed.sessionsCount === 'number' ? parsed.sessionsCount : 0,
      };
    }
  } catch (e) { console.warn('Stats illisibles, réinitialisation.', e); }
  return { totalSeconds: 0, sessionsCount: 0 };
}

function saveStats(stats) {
  try { localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats)); }
  catch (e) { console.warn('Impossible de sauvegarder les stats.', e); }
}

let mobilityStats = loadStats();

/* Enregistre une session terminée (appelée depuis finishSession) */
function recordCompletedSession(durationSeconds) {
  mobilityStats.totalSeconds += Math.max(0, durationSeconds || 0);
  mobilityStats.sessionsCount += 1;
  saveStats(mobilityStats);
}

function formatDurationHM(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return h > 0 ? `${h}h${String(m).padStart(2, '0')}` : `${m}min`;
}

/* Score global de mobilité = moyenne des 6 zones du profil */
function computeMobilityScore(profile) {
  const values = PROFILE_ZONES.map(z => profile[z.key]);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}


// Les 3 écrans principaux, associés à la bottom navigation persistante
const MAIN_TAB_SCREENS = ['screen-hub', 'screen-activites', 'screen-tab-profil'];

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'screen-hub') renderDashboard();
  if (id === 'screen-activites') { renderActivitesGreeting();
    // On désactive le verrou et on remet la transition
    isCarouselFrozen = false;
    document.querySelectorAll('.act-card').forEach(card => {
      card.style.transition = ''; // Redonne le contrôle au CSS
    });
    
    requestAnimationFrame(updateActCardScales); 
  }

  const bottomNav = document.getElementById('bottom-nav');
  const isMainTab = MAIN_TAB_SCREENS.includes(id);

  // La bottom nav ne s'affiche que sur les 3 onglets principaux
  bottomNav.classList.toggle('visible', isMainTab);
  document.body.classList.toggle('has-bottom-nav', isMainTab);

  if (isMainTab) {
    document.querySelectorAll('.bn-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === id);
    });
  }
}

// Alias sémantique utilisé par la bottom nav pour basculer entre onglets
function switchTab(id) {
  showScreen(id);
}

/* ═══════════════════════════════════════════════════
   DASHBOARD — rendu dynamique (temps, score, focus)
═══════════════════════════════════════════════════ */
function renderDashboard() {
  // Identité
  document.getElementById('dash-user-name').textContent = userProfile.name || 'Utilisateur GoWod';
  document.getElementById('dash-user-sub').textContent = `Membre GoWod depuis ${formatMemberSince(userProfile.memberSince)}`;

  // Temps de mobilité cumulé
  document.getElementById('dash-total-time').textContent = formatDurationHM(mobilityStats.totalSeconds);
  const sc = mobilityStats.sessionsCount;
  document.getElementById('dash-sessions-count').textContent = `${sc} séance${sc > 1 ? 's' : ''}`;

  // Score de mobilité (moyenne des 6 zones)
  const score = computeMobilityScore(mobilityProfile);
  const arc = document.getElementById('dash-ring-arc');
  const circumference = 2 * Math.PI * 26;
  arc.style.strokeDasharray = `${circumference}`;
  arc.style.strokeDashoffset = `${circumference * (1 - score / 100)}`;
  arc.style.stroke = score >= 66 ? '#4ee08a' : score >= 40 ? '#f2c94c' : '#ef5b5b';
  document.getElementById('dash-score-value').textContent = `${score}%`;

  // Mini barres par zone (reflète le profil de mobilité)
  const barsWrap = document.getElementById('dash-bars');
  barsWrap.innerHTML = '';
  PROFILE_ZONES.forEach(z => {
    const v = mobilityProfile[z.key];
    const bar = document.createElement('div');
    bar.className = 'dash-bar';
    const fill = document.createElement('div');
    fill.className = 'dash-bar-fill';
    fill.style.height = `${Math.max(6, v)}%`;
    fill.style.background = v >= 66 ? '#4ee08a' : v >= 40 ? '#f2c94c' : '#ef5b5b';
    bar.appendChild(fill);
    barsWrap.appendChild(bar);
  });

  // Focus de mobilité — 2 points faibles dynamiques
  const [pf1, pf2] = computeWeakPoints(mobilityProfile);
  const focusList = document.getElementById('dash-focus-list');
  focusList.innerHTML = '';
  [pf1, pf2].forEach((pf, i) => {
    const row = document.createElement('div');
    row.className = 'dash-focus-item';
    row.innerHTML = `
      <span class="dash-focus-icon"></span>
      <span class="dash-focus-text">
        <span class="dash-focus-label">Point faible ${i + 1}</span>
        <span class="dash-focus-name">${pf.label}</span>
      </span>
    `;
    focusList.appendChild(row);
  });
}

/* ═══════════════════════════════════════════════════
   ÉCRAN ACTIVITÉS — carrousel de cartes + salutation
═══════════════════════════════════════════════════ */
let isCarouselFrozen = false;

function updateActCardScales() {
  
  if (isCarouselFrozen) return;
  const carousel = document.getElementById('act-carousel');
  if (!carousel) return;
  const cards = Array.from(carousel.querySelectorAll('.act-card'));
  if (!cards.length) return;
  const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2;
  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const dist = Math.abs(viewportCenter - cardCenter);
    const maxDist = (carousel.clientWidth / 2 + card.offsetWidth / 2) || 1;
    const t = Math.min(1, dist / maxDist);
    const scale = 1 - t * 0.1; // léger rétrécissement des cartes voisines ("pas beaucoup")
    card.style.transform = `scale(${scale.toFixed(3)})`;
  });
}

function initActivitesScreen() {
  const carousel = document.getElementById('act-carousel');
  const cards = Array.from(carousel.querySelectorAll('.act-card'));
  const dotsWrap = document.getElementById('act-dots');

  dotsWrap.innerHTML = '';
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'act-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  let ticking = false;
  carousel.addEventListener('scroll', () => {
    // offsetWidth (layout) plutôt que getBoundingClientRect (post-transform)
    const cardWidth = cards[0].offsetWidth + 14; // + gap
    const idx = Math.round(carousel.scrollLeft / cardWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { updateActCardScales(); ticking = false; });
    }
  }, { passive: true });

  window.addEventListener('resize', updateActCardScales);
  updateActCardScales(); // état initial (première carte à taille normale)
}

function renderActivitesGreeting() {
  const el = document.getElementById('activites-greeting');
  const first = (userProfile.name || 'Utilisateur GoWod').split(' ')[0];
  el.textContent = `Bonjour, ${first}`;
}


/* ═══════════════════════════════════════════════════
   ONGLET PROFIL — identité utilisateur (nom + ancienneté)
═══════════════════════════════════════════════════ */
function initProfilTabIdentity() {
  const input = document.getElementById('profil-name-input');
  input.value = userProfile.name || '';
  document.getElementById('profil-member-since').textContent = `Membre MOBILIS depuis ${formatMemberSince(userProfile.memberSince)}`;

  input.addEventListener('input', () => {
    userProfile.name = input.value.trim();
    saveUserProfile(userProfile);
    renderDashboard();          // le Dashboard reflète le nom en temps réel
  });
}

/* ═══════════════════════════════════════════════════
   ÉCRAN PROFIL — rendu des sliders + sauvegarde live
═══════════════════════════════════════════════════ */
function initProfileScreen() {
  const container = document.getElementById('profile-sliders');
  container.innerHTML = '';

  PROFILE_ZONES.forEach(zone => {
    const card = document.createElement('div');
    card.className = 'slider-card';
    card.innerHTML = `
      <div class="slider-head">
        <span class="slider-label">${zone.label}</span>
        <span class="slider-value" id="val-${zone.key}">${mobilityProfile[zone.key]}%</span>
      </div>
      <input type="range" class="mobility-slider" id="slider-${zone.key}" min="0" max="100" step="1" value="${mobilityProfile[zone.key]}">
    `;
    container.appendChild(card);

    const input = card.querySelector(`#slider-${zone.key}`);
    const valueLabel = card.querySelector(`#val-${zone.key}`);

    input.addEventListener('input', () => {
      const v = parseInt(input.value);
      mobilityProfile[zone.key] = v;
      valueLabel.textContent = v + '%';
      saveMobilityProfile(mobilityProfile);     // sauvegarde à chaque modification
      renderWeakPoints();                        // recalcul live des points faibles
    });
  });

  renderWeakPoints();
}

function renderWeakPoints() {
  const [pf1, pf2] = computeWeakPoints(mobilityProfile);
  const tagsEl = document.getElementById('pw-tags');
  tagsEl.innerHTML = `
    <span class="pw-tag">${pf1.label} — ${pf1.value}%</span>
    <span class="pw-tag">${pf2.label} — ${pf2.value}%</span>
  `;
}

/* ═══════════════════════════════════════════════════
   ÉCRAN DAILY — affiche les points faibles + durée
═══════════════════════════════════════════════════ */
let dailyMinutes = null;
let dailyPF1 = null, dailyPF2 = null;

function goToDaily() {

  // 1. On active le verrou et on fige visuellement les cartes
  isCarouselFrozen = true;
  document.querySelectorAll('.act-card').forEach(card => {
    // On coupe l'animation CSS pour qu'elle ne bouge plus d'un poil
    card.style.transition = 'none'; 
  });

  // Recalcule les points faibles à chaque entrée sur l'écran
  [dailyPF1, dailyPF2] = computeWeakPoints(mobilityProfile);
  document.getElementById('daily-pf1').textContent =dailyPF1.label;
  document.getElementById('daily-pf2').textContent =dailyPF2.label;

  // Reset sélection durée
  dailyMinutes = null;
  document.querySelectorAll('#screen-daily .duration-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('btn-start-daily').classList.remove('ready');
  document.getElementById('daily-alert').textContent = '';

  showScreen('screen-daily');
}

function initDailyScreen() {
  document.querySelectorAll('#screen-daily .duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#screen-daily .duration-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      dailyMinutes = parseInt(btn.dataset.minutes);
      document.getElementById('btn-start-daily').classList.add('ready');
      document.getElementById('daily-alert').textContent = '';
    });
  });
}

function startDailyRoutine() {
  if (!dailyMinutes) {
    document.getElementById('daily-alert').textContent = 'Choisissez une durée.';
    return;
  }
  routine = buildDailyRoutine(dailyMinutes, dailyPF1, dailyPF2);
  if (!routine.length) {
    document.getElementById('daily-alert').textContent = 'Impossible de créer une routine pour ce profil.';
    return;
  }
  totalRoutineSec = routine.reduce((s, ex) => s + ex.duration, 0);
  elapsedSec = 0; currentIdx = 0; completedCount = 0;
  sessionStart = Date.now(); isPaused = false;
  showScreen('screen-routine');
  loadExercise(0);
}

/* ═══════════════════════════════════════════════════
   SÉLECTION LIBRE (inchangée dans son fonctionnement)
═══════════════════════════════════════════════════ */
let selectedZones = new Set(), selectedMinutes = null;
let checkedChains = new Set(), checkedMuscles = new Set();

function initSelectionScreen() {
  buildZoneGrid('grid-chains', PROFILE_ZONES, 'chain');
  buildZoneGrid('grid-muscles', MUSCLES_ISOLES, 'muscle');
  document.querySelectorAll('#screen-selection .duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#screen-selection .duration-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMinutes = parseInt(btn.dataset.minutes);
      updateStartBtn();
    });
  });
}

function recomputeSelectedZones() {
  selectedZones = new Set();
  checkedChains.forEach(key => {
    const chain = PROFILE_ZONES.find(z => z.key === key);
    if (chain) chain.dbTags.forEach(t => selectedZones.add(t));
  });
  checkedMuscles.forEach(m => selectedZones.add(m));
}

function buildZoneGrid(gridId, zones, type) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  const cls = type === 'chain' ? 'active-chain' : 'active-muscle';
  zones.forEach(zone => {
    // 'chain' => zone est un objet {key, label, emoji, dbTags}; 'muscle' => zone est une simple chaîne
    const value = type === 'chain' ? zone.key : zone;
    const label = type === 'chain' ? zone.label : zone;
    const lbl = document.createElement('label');
    lbl.className = 'zone-label';
    lbl.innerHTML = `<input type="checkbox" value="${value}"/><span>${label}</span>`;
    const cb = lbl.querySelector('input');
    cb.addEventListener('change', () => {
      const set = type === 'chain' ? checkedChains : checkedMuscles;
      if (cb.checked) { set.add(value); lbl.classList.add(cls); }
      else { set.delete(value); lbl.classList.remove(cls); }
      recomputeSelectedZones();
      updateStartBtn();
    });
    grid.appendChild(lbl);
  });
}

function updateStartBtn() {
  const alert = document.getElementById('sel-alert'), count = document.getElementById('sel-count'), btn = document.getElementById('btn-start');
  if (!selectedZones.size) { count.innerHTML = 'Cochez au moins une zone.'; alert.textContent = ''; btn.classList.remove('ready'); return; }
  const avail = filterExercises(selectedZones);
  count.innerHTML = `<strong>${avail.length}</strong> exercice${avail.length>1?'s':''} disponible${avail.length>1?'s':''}`;
  if (!avail.length) { alert.textContent = 'Aucun exercice pour cette sélection.'; btn.classList.remove('ready'); return; }
  if (!selectedMinutes) { alert.textContent = 'Choisissez une durée.'; btn.classList.remove('ready'); return; }
  alert.textContent = ''; btn.classList.add('ready');
}

function filterExercises(zones) { return EXERCISES.filter(ex => ex.zones.some(z => zones.has(z))); }
function roundTo15(s) { return Math.round(s / 15) * 15; }

function buildRoutine(zones, totalMinutes) {
  const totalSec = totalMinutes * 60, pool = filterExercises(zones);
  if (!pool.length) return [];
  const ratio = Math.max(0.2, Math.min(1, (totalMinutes - 8) / 14));
  const shuffled = [...pool].sort(() => Math.random() - .5);
  const routine = []; let elapsed = 0, idx = 0;
  while (elapsed < totalSec) { // On boucle tant qu'on n'a pas atteint le temps total
  if (idx >= shuffled.length) { idx = 0; } // On repart du début du pool si besoin
  const ex = shuffled[idx++];
  
  const base = ex.temps_min + ratio * (ex.temps_max - ex.temps_min);
  const raw = Math.max(ex.temps_min, Math.min(ex.temps_max, base + (Math.random()*40-20)));
  const dur = roundTo15(raw);
  
  // On ajoute l'exercice : l'objectif est d'atteindre ou dépasser totalSec
  routine.push({...ex, duration: dur});
  elapsed += dur;
  
  // On arrête uniquement si on a dépassé la cible de plus de 15 secondes
  if (elapsed >= totalSec) break; 
}
  return routine;
}

function startRoutine() {
  routine = buildRoutine(selectedZones, selectedMinutes);
  if (!routine.length) { document.getElementById('sel-alert').textContent = 'Impossible de créer une routine.'; return; }
  totalRoutineSec = routine.reduce((s, ex) => s + ex.duration, 0);
  elapsedSec = 0; currentIdx = 0; completedCount = 0;
  sessionStart = Date.now(); isPaused = false;
  showScreen('screen-routine');
  loadExercise(0);
}

/* ═══════════════════════════════════════════════════
   PRE-WOD — sélection des mouvements prévus, puis
   activation ciblée sur les chaînes musculaires sollicitées.
═══════════════════════════════════════════════════ */
let selectedMouvements = [];   // liste des objets MOUVEMENTS_PREWOD choisis
let prewodMinutes = null;
let prewodHighlight = -1;      // index surligné dans les suggestions (clavier)

function initPrewodScreen() {
  const input = document.getElementById('prewod-search-input');
  const box = document.getElementById('prewod-suggestions');

  input.addEventListener('input', () => renderPrewodSuggestions(input.value));
  input.addEventListener('focus', () => renderPrewodSuggestions(input.value));
  input.addEventListener('keydown', (e) => {
    const items = Array.from(box.querySelectorAll('.prewod-suggestion-item'));
    if (!items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); prewodHighlight = Math.min(prewodHighlight + 1, items.length - 1); updatePrewodHighlight(items); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); prewodHighlight = Math.max(prewodHighlight - 1, 0); updatePrewodHighlight(items); }
    else if (e.key === 'Enter') { e.preventDefault(); const idx = prewodHighlight >= 0 ? prewodHighlight : 0; if (items[idx]) items[idx].click(); }
  });

  // Ferme les suggestions si on clique ailleurs sur l'écran
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.prewod-search-wrap')) box.classList.remove('open');
  });

  document.querySelectorAll('#prewod-duration-grid .duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#prewod-duration-grid .duration-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      prewodMinutes = parseInt(btn.dataset.minutes);
      updatePrewodStartBtn();
    });
  });
}

function updatePrewodHighlight(items) {
  items.forEach((it, i) => it.classList.toggle('hi', i === prewodHighlight));
}

function renderPrewodSuggestions(query) {
  const box = document.getElementById('prewod-suggestions');
  const q = query.trim().toLowerCase();
  prewodHighlight = -1;

  const already = new Set(selectedMouvements.map(m => m.nom));
  const results = MOUVEMENTS_PREWOD
    .filter(m => !already.has(m.nom))
    .filter(m => !q || m.nom.toLowerCase().includes(q))
    .slice(0, 8);

  if (!results.length) {
    box.innerHTML = `<div class="prewod-suggestion-empty">Aucun mouvement trouvé.</div>`;
  } else {
    box.innerHTML = results.map(m => `<div class="prewod-suggestion-item" data-nom="${m.nom}">${m.nom}</div>`).join('');
    box.querySelectorAll('.prewod-suggestion-item').forEach(item => {
      item.addEventListener('click', () => addPrewodMouvement(item.dataset.nom));
    });
  }
  box.classList.add('open');
}

function addPrewodMouvement(nom) {
  const mvt = MOUVEMENTS_PREWOD.find(m => m.nom === nom);
  if (!mvt || selectedMouvements.some(m => m.nom === nom)) return;
  selectedMouvements.push(mvt);
  const input = document.getElementById('prewod-search-input');
  input.value = '';
  document.getElementById('prewod-suggestions').classList.remove('open');
  input.focus();
  renderPrewodChips();
  updatePrewodStartBtn();
}

function removePrewodMouvement(nom) {
  selectedMouvements = selectedMouvements.filter(m => m.nom !== nom);
  renderPrewodChips();
  updatePrewodStartBtn();
}

function renderPrewodChips() {
  const wrap = document.getElementById('prewod-chips');
  wrap.innerHTML = selectedMouvements.map(m => `
    <span class="prewod-chip">${m.nom}<button class="prewod-chip-remove" onclick="removePrewodMouvement('${m.nom.replace(/'/g, "\\'")}')">✕</button></span>
  `).join('');
}

/* Zones musculaires sollicitées par les mouvements sélectionnés,
   agrégées et dédupliquées pour filtrer la base EXERCISES. */
function computePrewodZones() {
  const zones = new Set();
  selectedMouvements.forEach(m => m.zones.forEach(z => zones.add(z)));
  return zones;
}

/* Poids de chaque zone = nombre de mouvements sélectionnés qui la
   sollicitent. Une zone travaillée par 3 mouvements (ex: hanches sur
   Squat + Deadlift + Good Morning) doit peser plus dans la routine
   qu'une zone touchée par un seul mouvement isolé. */
function computePrewodZoneWeights() {
  const weights = {};
  selectedMouvements.forEach(m => m.zones.forEach(z => { weights[z] = (weights[z] || 0) + 1; }));
  return weights;
}

/* Score d'un étirement = somme des poids des zones qu'il couvre.
   Un étirement qui couvre plusieurs zones "chaudes" (très sollicitées
   par les mouvements du jour) remonte naturellement en priorité. */
function scorePrewodExercise(ex, zoneWeights) {
  return ex.zones.reduce((sum, z) => sum + (zoneWeights[z] || 0), 0);
}

function updatePrewodStartBtn() {
  const alert = document.getElementById('prewod-alert'), count = document.getElementById('prewod-count'), btn = document.getElementById('btn-start-prewod');
  if (!selectedMouvements.length) { count.innerHTML = 'Ajoutez au moins un mouvement.'; alert.textContent = ''; btn.classList.remove('ready'); return; }
  const zones = computePrewodZones();
  const avail = filterExercises(zones);
  count.innerHTML = `<strong>${avail.length}</strong> étirement${avail.length>1?'s':''} ciblé${avail.length>1?'s':''} sur ${zones.size} zone${zones.size>1?'s':''}`;
  if (!avail.length) { alert.textContent = 'Aucun étirement disponible pour ces mouvements.'; btn.classList.remove('ready'); return; }
  if (!prewodMinutes) { alert.textContent = 'Choisissez une durée.'; btn.classList.remove('ready'); return; }
  alert.textContent = ''; btn.classList.add('ready');
}

/* ═══════════════════════════════════════════════════
   ALGORITHME PRE-WOD — buildPrewodRoutine
   Contrairement à buildRoutine (tirage uniforme sur toutes les
   zones cochées), on pondère chaque étirement par le nombre de
   mouvements sélectionnés qui recrutent ses zones : les zones les
   plus sollicitées par la séance à venir reviennent plus souvent
   et donc cumulent plus de temps total.
═══════════════════════════════════════════════════ */
function buildPrewodRoutine(totalMinutes) {
  const zoneWeights = computePrewodZoneWeights();
  const zones = new Set(Object.keys(zoneWeights));
  const pool = filterExercises(zones);
  if (!pool.length) return [];

  const totalSec = totalMinutes * 60;
  const ratio = Math.max(0.2, Math.min(1, (totalMinutes - 8) / 14));

  // "Tickets" pondérés : un étirement au score 3 apparaît 3x plus
  // souvent dans le tirage qu'un étirement au score 1, sans pour
  // autant exclure totalement les zones moins sollicitées.
  const tickets = [];
  pool.forEach(ex => {
    const score = Math.max(1, scorePrewodExercise(ex, zoneWeights));
    for (let i = 0; i < score; i++) tickets.push(ex);
  });
  const shuffled = [...tickets].sort(() => Math.random() - .5);

  const routine = [];
  let elapsed = 0, idx = 0, guard = 0;
  while (elapsed < totalSec && guard < 500) {
    guard++;
    if (idx >= shuffled.length) idx = 0;
    const ex = shuffled[idx++];
    // Évite deux fois le même étirement d'affilée quand une alternative existe
    if (routine.length && routine[routine.length - 1].nom === ex.nom && pool.length > 1) continue;

    const base = ex.temps_min + ratio * (ex.temps_max - ex.temps_min);
    const raw = Math.max(ex.temps_min, Math.min(ex.temps_max, base + (Math.random() * 40 - 20)));
    const dur = roundTo15(raw);

    routine.push({ ...ex, duration: dur });
    elapsed += dur;
    if (elapsed >= totalSec) break;
  }
  return routine;
}

function startPrewodRoutine() {
  if (!selectedMouvements.length || !prewodMinutes) return;

  // ─────────────────────────────────────────────────────────
  // MODE ACTUEL : buildPrewodRoutine() pioche dans le pool
  // d'étirements PASSIFS classiques (EXERCISES), pondéré par les
  // zones réellement sollicitées par les mouvements choisis (voir
  // computePrewodZoneWeights / scorePrewodExercise ci-dessus).
  //
  // TODO (à venir) : quand la base d'ÉTIREMENTS ACTIFS sera prête
  // (mobilisations dynamiques, activation neuro-musculaire, plus
  // adaptées juste avant un WOD que des étirements passifs tenus
  // longtemps), faire piocher buildPrewodRoutine() en priorité dans
  // ce pool actif avant de retomber sur les étirements passifs
  // classiques, par ex. :
  //   const poolActif  = filterExercises(zones, { type: 'actif' });
  //   const poolPassif = filterExercises(zones, { type: 'passif' });
  //   // scorer et tirer d'abord dans poolActif, compléter avec poolPassif
  // ─────────────────────────────────────────────────────────
  routine = buildPrewodRoutine(prewodMinutes);

  if (!routine.length) { document.getElementById('prewod-alert').textContent = 'Impossible de créer une activation.'; return; }
  totalRoutineSec = routine.reduce((s, ex) => s + ex.duration, 0);
  elapsedSec = 0; currentIdx = 0; completedCount = 0;
  sessionStart = Date.now(); isPaused = false;
  showScreen('screen-routine');
  loadExercise(0);
}


/* ═══════════════════════════════════════════════════
   ALGORITHME DU QUOTIDIEN — buildDailyRoutine
   Répartition du temps total :
     ~40% → exercices ciblant le Point Faible 1
     ~30% → exercices ciblant le Point Faible 2
     ~30% → réparti aléatoirement sur les 4 AUTRES zones
   Chaque durée d'exercice est arrondie à 15s près.
═══════════════════════════════════════════════════ */
function buildDailyRoutine(totalMinutes, pf1, pf2) {
  const totalSec = totalMinutes * 60;
  // Nombre minimum d'exercices pour garantir une variété
  const minExos = totalMinutes >= 22 ? 6 : (totalMinutes >= 15 ? 4 : 3);

  // Même ratio de calibration que buildRoutine : pour une séance courte,
  // on reste proche de temps_min ; pour une longue, on va vers temps_max.
  const ratio = Math.max(0.2, Math.min(1, (totalMinutes - 8) / 14));

  const poolPF1 = filterExercises(new Set(pf1.dbTags));
  const poolPF2 = filterExercises(new Set(pf2.dbTags));
  const otherProfileZones = PROFILE_ZONES.filter(z => z.key !== pf1.key && z.key !== pf2.key);
  const otherTags = new Set();
  otherProfileZones.forEach(z => z.dbTags.forEach(t => otherTags.add(t)));
  const poolOther = filterExercises(otherTags);

  // Filet de sécurité : si un pool ciblé est vide (tag de zone introuvable
  // dans la base, etc.), on retombe sur tous les exercices plutôt que de
  // perdre silencieusement le budget-temps de ce segment.
  const safePoolPF1 = poolPF1.length ? poolPF1 : EXERCISES;
  const safePoolPF2 = poolPF2.length ? poolPF2 : EXERCISES;
  const safePoolOther = poolOther.length ? poolOther : EXERCISES;

  const shuffledPF1 = [...safePoolPF1].sort(() => Math.random() - .5);
  const shuffledPF2 = [...safePoolPF2].sort(() => Math.random() - .5);
  const shuffledOther = [...safePoolOther].sort(() => Math.random() - .5);
  let iPF1 = 0, iPF2 = 0, iOther = 0;

  function calibratedDuration(ex) {
    const base = ex.temps_min + ratio * (ex.temps_max - ex.temps_min);
    const raw = Math.max(ex.temps_min, Math.min(ex.temps_max, base + (Math.random() * 40 - 20)));
    return roundTo15(raw);
  }

  // IMPORTANT : un seul compteur "elapsed" pour TOUTE la routine (comme
  // buildRoutine), avec un tirage pondéré à chaque itération plutôt que
  // 3 budgets de temps indépendants. L'ancienne version cumulait un
  // dépassement de calibration sur CHAQUE segment (PF1 + PF2 + Autres),
  // ce qui pouvait faire déraper la durée totale de 30 à 50%.
  const routine = [];
  let elapsed = 0;
  while (elapsed < totalSec) {
    const r = Math.random();
    let ex;
    if (r < 0.4 && shuffledPF1.length)        ex = shuffledPF1[iPF1++ % shuffledPF1.length];
    else if (r < 0.7 && shuffledPF2.length)    ex = shuffledPF2[iPF2++ % shuffledPF2.length];
    else if (shuffledOther.length)             ex = shuffledOther[iOther++ % shuffledOther.length];
    else                                       ex = shuffledPF1[iPF1++ % shuffledPF1.length];

    routine.push({...ex, duration: calibratedDuration(ex)});
    elapsed += routine[routine.length - 1].duration;
    if (elapsed >= totalSec) break;
  }

  // Filet de sécurité variété : si la session est très courte et n'a pu
  // caser que 1-2 exercices, on complète jusqu'au minimum sans toucher
  // au budget de temps déjà atteint (les exercices ajoutés restent courts).
  const allPools = [shuffledPF1, shuffledPF2, shuffledOther].filter(p => p.length);
  let guard = 0;
  while (routine.length < minExos && allPools.length && guard < 20) {
    const pool = allPools[routine.length % allPools.length];
    const candidate = pool.find(ex => !routine.some(r => r.nom === ex.nom));
    if (!candidate) break;
    routine.push({...candidate, duration: calibratedDuration(candidate)});
    guard++;
  }

  return routine;
}

/* ═══════════════════════════════════════════════════
   ÉTAT RUNTIME DE LA ROUTINE
═══════════════════════════════════════════════════ */
let routine = [], currentIdx = 0, timeLeft = 0, totalRoutineSec = 0, elapsedSec = 0, timerInterval = null, isPaused = false, isSetupPhase = true, sessionStart = null, completedCount = 0, currentVideo = null, uniHalfDone = false, isSideSwitching = false, sideCountdown = 0;

const CIRC = 163.4;

function loadExercise(idx) {
  if (idx >= routine.length) { finishSession(); return; }
  clearInterval(timerInterval);
  const ex = routine[idx];
  timeLeft = ex.duration; isSetupPhase = true; isPaused = false; uniHalfDone = false; isSideSwitching = false; sideCountdown = 0;
  
  // Mise à jour de la Timeline en haut
  updateTimeline(idx);
  
  document.getElementById('exo-zone').textContent = ex.zones.slice(0,3).join(' · ');
  document.getElementById('exo-name').textContent = ex.nom;
  //document.getElementById('step-info').textContent = `Exo ${idx+1} / ${routine.length}`;
  document.getElementById('exo-subtitle').textContent = ex.unilateral ? fmtTime(ex.duration)+' total ('+fmtTime(Math.floor(ex.duration/2))+' par côté)' : fmtTime(ex.duration)+' total';
  document.getElementById('side-label').className = 'side-label hidden';
  
  if (idx+1 < routine.length) {
    document.getElementById('next-name').textContent = routine[idx+1].nom;
  } else {
    document.getElementById('next-name').textContent = '—';
  }
  
  document.getElementById('stimulus-text').textContent = ex.stimulus;
  const ul = document.getElementById('instr-list'); ul.innerHTML = '';
  ex.instructions.forEach(s => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
  
  document.getElementById('chrono-ring').className = 'chrono-ring setup';
  document.getElementById('chrono-text').textContent = fmtTime(timeLeft);
  document.getElementById('chrono-arc').style.strokeDashoffset = '0';
  document.getElementById('side-switch-banner').classList.remove('visible');
  
  injectVideo(ex);
  renderControls_Setup();
}

/* ── Gestion Timeline (les points en haut) ── */
function updateTimeline(activeIndex) {
  const container = document.getElementById('timeline-dots');
  container.innerHTML = '';
  routine.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `tl-dot ${i === activeIndex ? 'active' : (i < activeIndex ? 'done' : 'future')}`;
    container.appendChild(dot);
  });
}

function beginStretch() {
  isSetupPhase = false; isPaused = false;
  const ex = routine[currentIdx];
  if (ex.unilateral) { const sl = document.getElementById('side-label'); sl.textContent = 'GAUCHE'; sl.className = 'side-label left'; }
  document.getElementById('chrono-ring').className = 'chrono-ring';
  updateChronoUI(timeLeft, ex.duration, false);
  renderControls_Stretch();
  clearInterval(timerInterval); timerInterval = setInterval(tick, 1000);
}

function tick() {
  if (isSideSwitching) {
    sideCountdown--;
    document.getElementById('ssb-count').textContent = sideCountdown + 's';
    document.getElementById('chrono-text').textContent = sideCountdown + 's';
    if (sideCountdown <= 0) {
      isSideSwitching = false; uniHalfDone = true;
      document.getElementById('side-switch-banner').classList.remove('visible');
      const sl = document.getElementById('side-label'); sl.textContent = 'DROITE'; sl.className = 'side-label right';
      playBip('side');
      document.getElementById('chrono-ring').className = 'chrono-ring';
      updateChronoUI(timeLeft, Math.floor(routine[currentIdx].duration/2), false);
    }
    return;
  }
  if (isPaused) return;
  timeLeft--; elapsedSec++;
  const ex = routine[currentIdx];
  if (ex.unilateral && !uniHalfDone && !isSideSwitching) {
    const half = Math.floor(ex.duration/2);
    if (timeLeft === half) {
      isSideSwitching = true; sideCountdown = 5;
      playBip('side');
      document.getElementById('chrono-ring').className = 'chrono-ring side-switch';
      document.getElementById('chrono-text').textContent = '5s';
      document.getElementById('side-switch-banner').classList.add('visible');
      document.getElementById('ssb-count').textContent = '5s';
      return;
    }
  }
  updateChronoUI(timeLeft, ex.unilateral ? Math.floor(ex.duration/2) : ex.duration, false);
  if (timeLeft <= 0) { playBip('end'); clearInterval(timerInterval); completedCount++; currentIdx++; setTimeout(() => loadExercise(currentIdx), 700); }
}

function fmtTime(t) { t = Math.max(0, t); const m = Math.floor(t/60), s = t%60; return m > 0 ? `${m}:${String(s).padStart(2,'0')}` : `${s}s`; }
function updateChronoUI(tLeft, ref, isSecond) {
  document.getElementById('chrono-text').textContent = fmtTime(tLeft);
  const arc = document.getElementById('chrono-arc');
  const pct = Math.max(0, Math.min(1, tLeft/ref));
  arc.style.strokeDashoffset = String(CIRC * (1-pct));
  arc.style.stroke = tLeft <= 10 ? 'var(--danger)' : 'var(--accent)';
}

function injectVideo(ex) {
  const zone = document.getElementById('media-zone'), ph = document.getElementById('media-ph'), ov = document.getElementById('vid-overlay'), btn = document.getElementById('vid-btn');
  if (currentVideo) { currentVideo.pause(); currentVideo.remove(); currentVideo = null; }
  ph.style.display = 'flex'; ov.classList.add('paused');
  const slug = ex.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
  const vid = document.createElement('video');
  vid.loop = true; vid.muted = true; vid.playsinline = true; vid.autoplay = true; vid.src = `medias/${slug}.mp4`;
  vid.addEventListener('loadeddata', () => { ph.style.display = 'none'; vid.play().catch(()=>{}); ov.classList.remove('paused'); });
  zone.insertBefore(vid, ov); currentVideo = vid;
}

function toggleVideoPlayback() {
  if (!currentVideo) return;
  const ov = document.getElementById('vid-overlay');
  if (currentVideo.paused) { currentVideo.play(); ov.classList.remove('paused'); }
  else { currentVideo.pause(); ov.classList.add('paused'); }
}
function killVideo() { if (currentVideo) { currentVideo.pause(); currentVideo.remove(); currentVideo = null; } }

function renderControls_Setup() { document.getElementById('controls-row').innerHTML = '<button class="btn-ctrl btn-ready-ctrl" onclick="beginStretch()">✅ Démarrer</button><button class="btn-ctrl btn-skip-ctrl" onclick="skipExercise()">Passer</button>'; }
function renderControls_Stretch() { document.getElementById('controls-row').innerHTML = '<button class="btn-ctrl btn-pause-ctrl" id="btn-pause" onclick="togglePause()">Pause</button><button class="btn-ctrl btn-next-ctrl" onclick="nextExercise()">Suivant →</button>'; }

function togglePause() { isPaused = !isPaused; const btn = document.getElementById('btn-pause'); if (!btn) return; if (isPaused) { btn.textContent = 'Reprendre'; btn.classList.add('is-paused'); } else { btn.textContent = 'Pause'; btn.classList.remove('is-paused'); } }
function nextExercise() { clearInterval(timerInterval); currentIdx++; loadExercise(currentIdx); }
function skipExercise() { clearInterval(timerInterval); currentIdx++; loadExercise(currentIdx); }
function quitRoutine() { if (!confirm('Quitter la session ?')) return; clearInterval(timerInterval); killVideo(); showScreen('screen-activites'); }
function finishSession() {
  clearInterval(timerInterval); killVideo();
  recordCompletedSession(elapsedSec);
  document.getElementById('done-exos').textContent = completedCount;
  document.getElementById('done-time').textContent = Math.round(elapsedSec / 60);
  showScreen('screen-done');
}
function playBip(mode='end') { /* ton code audio */ }

// ... (Garde le reste de tes fonctions buildDailyRoutine, etc. inchangées)

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
initSelectionScreen();
initPrewodScreen();
initProfileScreen();
initDailyScreen();
initActivitesScreen();
initProfilTabIdentity();
renderDashboard();
showScreen('screen-activites'); // écran de démarrage : Activités, avec bottom nav active