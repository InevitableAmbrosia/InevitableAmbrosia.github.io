const graph = {
	nodes : [
		{
			index : "cogito",
			quotation: "Doubt is the Origin of Wisdom.",
			src : "Rene Descartes, Meditations on First Philosophy"
		},
		{
			index : "doubt_is",
			quotation:  "Doubt is the Tathagata.",
			src : "Nirvana Sutra"
		},
		{
			index : "cartesian_senses",
			quotation : "So I shall suppose that some malicious powerful cunning demon has done all he can to deceive me... " + 
			"I shall think that the sky, the air, the earth, colors, shapes, sounds and all external things are merely dreams that the demon has contrived as traps for my judgment."
			,
			src : "Rene Descartes, Meditations on First Philosophy"
		},
		{
			index : "diamond_senses",
			quotation : "So you should view this fleeting world -- <br> " +
			"A star at dawn, a bubble in a stream, <br>" + 
			"A flash of lightning in a summer cloud, <br> " + 
			"A flickering lamp, a phantom, a dream.",
			src: "Diamond Sutra"
		},
		{
			index: "descartes_conqueror",
			quotation :  "My third maxim was to always conquer myself rather than fortune, and to alter my desires rather tha change the order of the world.",
			src: "Rene Descartes, Discourse on Method"
		}
		,
		{
			index: "dhammapada_conquest",
			quotation : "Greater in battle than the man who would conquer a thousand times, thousand men, is he who would conquer just one -- himself.",
			src: "The Dhammapada"
		},
		{
			index : "diamond_transformation",
			quotation : "One who transforms the world does not transform the world; that is to transform the world.",
			src: "Diamond Sutra"
		},
		{
			index: "descartes_will",
			quotation : "Except our own thoughts, there is nothing absolutely within our power.",
			src : "Rene Descartes, Discourse on Method"
		},
		{
			index : "lankavatara_yogacara",
			quotation : "The external world is only a manifestation of the activities of the mind itself.",
			src: "Lankavatara Sutra"
		},
		{
			index: "kant_yogacara",
			quotation:  "The objects we intuit in space and time are appearances, not objects that exist independently of our intuition.",
			src: "Immanuel Kant, Critique of Pure Reason"
		},
		{
			index: "tibetan_yogacara",
			quotation: "Now, with regard to the diversity of relative apperances: They are all perishable; not one of them is genuinely existent. All phenomenal existence, all the things of cyclic exsitence and nirvana, Are the discernible manifestations of the unique essential nature of one's own mind."
			,
			src : "Tibetan Book of the Dead"
		},
		{
			index: "heraclitus_rivers",
			quotation: "Into rivers staying the same, other and other waters flow.",
			src: "Heraclitus, Fragments"
		},
		{
			index : "tibetan_impermanence",
			quotation : "All substantial things are unreal and false, like a mirage. They are not permanent. They are not changeless. So what is the purpose of my attachment [to these perceptions] What is the purpose of awe and terror? That which is non-existent, I am seeing as existent! [In reality], all these things [that I perceive] are the perceptions of my own mind."
			,
			src:  "Tibetan Book of the Dead"
		},
		{
			index : "tibetan_mind",
			quotation : "In actuality, there is but one single [nature of mind], And that single [nature of mind] is without foundation and without root."
			,
			src: "Tibetan Book of the Dead"
		},
		{
			index : "heraclitus_life",
			quotation : "Immortals are mortal and mortals Immortal. <br> Living our deaths, dying our lives!",
			src: "Heraclitus, Fragments"
		},
		{
			index : "tibetan_life",
			quotation : "The body is composed of the four elements, Thus following portents of its demise Will arise prior [to the time of death]."
			,src : "Tibetan Book of the Dead"
		},
		{
			index : "hume_self",
			quotation: "For my part, when I enter most intimately, into what I call myself, I always stumble on some particular perception or other...I can never catch myself at any time without a perception, and never observe anything but the perception...[One] may, perhaos, perceive something simple and continu'd, which he calls hismelf; tho' I am certain there is no such principle in me."
			,src : "Hume, Treatise on Human Nature"
		},
		{
			index: "diamond_self",
			quotation : "A true disciple knows that there is no such thing as a self, a person, a living being, or a universal self. A true disciple knows that all things are devoid of selfhood, devoid of any separate individuality.",
			src: "Diamond Sutra"
		}	
		,
		{
			index : "dhammapada_hero",
			quotation : "Well-makers lead the water (wherever they like); <br> Fletchers bend the arrow; <br> Carpenters bend a log of wood; <br> Good people fashion themselves.",
			src : "The Dhammapada"
		},
		{
			index : "nietzsche_becoming",
			quotation : "What does your conscience say? -- 'You shall become who you are.'"
			,
			src: "Nietzsche, The Gay Science"
		}
		,
		{
			index :"aurelius_death",
			quotation : "Consider thyself to be dead, and to have completed thy life up to the present time; and live according to nature the remainder which is allowed thee.",
			src :"Marcus Aurelius, Meditations"
		},
		{
			index: "dhammapada_quarrels",
			quotation : "People, other than the wise, do not realize, 'We in this world must all die,' (and, not realizing it, continue their quarrels). The wise realize it and their quarrels cease at once."
			,
			src : "The Dhammapada"
		},
		{
			index: "emerald_wisdom",
			quotation : "Approach ye ever the Infinite Wisdom, ever before thee recedes the goal.",
			src : "Thoth, Emerald Tablets of Thoth The Atlantean"
		},
		{
			index: "heart_attainment",
			quotation : "There is no attainment, and nothing to attain.",
			src : "Heart Sutra"
		},
		{
			index : "lotus_omniscience",
			quotation : "Just like the great cloud that rains upon all the grasses, trees, shrubs, and herbs, whose seeds are watered and which grow according to their capacities, the Tathagata teaches the Dharma of one aspect and character, that is to say, the character of liberation, dispassion, and cessation which ultimate leads to omniscience."
			,
			src: "The Lotus Sutra"
		},
		{
			index : "emerald_sun",
			quotation : "When ye have gained the light of all wisdom, free shall ye be to shine in the ether -- one of the Suns that light outer darkness -- one of the space-born grown into Light."
			,
			src: "Thoth, Emerald Tablets of Thoth the Atlantean"
		},
		{
			index :"lotus_all",
			quotation : "The Buddha is exactly like this. When he was a bodhisattva he aroused in us the aspiration for omniscience. Nevertheless we forgot, we did not know or understand....It was very hard for us to support ourselves and we were satisfied with little. But we never fully lost our wish for all-knowledge"
			,
			src : "The Lotus Sutra"
		},
		{
			index : "avatam_sun",
			quotation : "The deity Universal Light found the door of liberation carrying the palace of the sun all over, shining on all sentient beings of the ten directions, allowing them to accomplish their work.",
			src: "Avatamsaka Sutra"
		},
		{
			index : "socrates_oracle",
			quotation : "Socrates is the Wisest Man in Athens [because he knows that he knows nothing].",
			src : "Socrates, Oracle at Delphi"
		},
		{
			index : "tao_emptiness",
			quotation : "Become totally empty, quiet the restlessness of the mind. Only then will you witness everything unfolding from emptiness.",
			src : "Lao Tzu, Tao Te Ching"
		},
		{
			index : "culatanhasankhaya_omniscience",
			quotation : "Here, ruler of gods, a bhikkhu has heard that nothing is worth adhering to. When a bhikkhu has heard that nothing is worth adhering to, he directly knows everything;"
			,src : "Culatanhasankhaya Sutra"
		},
		{
			index: "nietzsche_love",
			quotation: "What is done out of love always occurs beyond good and evil.",
			src : "Nietzsche, Beyond Good and Evil"
		},
		{
			index : "dhammapada_love",
			quotation: "Beyond good and evil, <br> noble in conduct, <br> loving and discerning he lives, <br> the true monk.",
			src : "The Dhammapada"
		},
		{
			index : "socrates_beyond",
			quotation : "So, if you're wavering, it's obvious from what we've said that not only are you ignorant about the most imporant things, but you also think you know what you don't know."
			,
			src : "Plato, Alcibiades"
		},
		{
			index : "lotus_beyond",
			quotation : "All dharmas are empty and without substance, impermanent, without origination or cessation.",
			src : "The Lotus Sutra"
		},
		{
			index : "diamond_beyond",
			quotation : "If we should not be attached to dharmas, how much less to no-dharmas.",
			src : "Diamond Sutra"
		},
		{
			index : "nietzsche_buddha",
			quotation : "Buddhism already has -- and this distinguishes it profoundly from Christianity -- the self-deception of moral concepts behind it -- it stands, in my langauge, Beyond Good and Evil.",
			
			src: "Nietzsche, The Antichrist"
		},
		{
			index : "nirvana_beyond",
			quotation : "'She truly is my sister. I am always accompanied by her, in going and coming; we never part. Wherever I am, I always do good and she always does evil. I give benefit and she loss. If you love me, you love her also. If you respect me, respect her too.' The man at once said: 'If there have to be both, good and evil, I won't have either. Go your way, both of you!'"
			,
			src: "Nirvana Sutra"
		},
		{
			index : "nietzsche_truth",
			quotation : "Indeed, it is only by means of the rigid and regular web of concepts that the waking man clearly sees that he is awake; and it is precisely because of this that he sometimes thinks that he must be dreaming when this web of concepts is torn by art."
			,
			src : "Nietzsche, On Truth and Lie in the Non-Moral Sense",

		},
		{
			index : "plato_form",
			quotation : "In the knowledgable realm, the Form of the Good is the last thing to be seen, and it is reached only with difficulty.",
			src : "Plato, Parmenides"
		},
		{
			index : "heart_form",
			quotation: "Form is emptiness and emptiness is form. <br> That which is form is emptiness, that which is emptiness form.",
			src : "Heart Sutra"
		},
		{
			index : "nietzsche_bee",
			quotation : "As a genius of construction man raises himself far above the bee in the following way: whereas the bee builds with wax that he gathers from nature, man builds with the far more delicate conceptual material which he first has to manufacture from himself. In this he is greatly to be admired, but not on account of his drive for truth or for pure knowledge of things."
			,
			src: "Nietzsche, On Truth and Lie in the Non-Moral Sense"
		},
		{
			index :"nietzsche_suffering",
			quotation : "The man who is guided by concepts and abstractions only succeeds by such means in warding off misfortune, without ever gaining any happiness for himself from these abstractions."
			,
			src : "Nietzsche, On Truth and Lie in the Non-Moral Sense"
		},
		{
			index: "lankavatara_concept",
			quotation : "Attached to erroneous thoughts they contradict themselves and others by not seeing things as they really and truly are. Mahamati, to see things as they really and truly are is to realize that there is nothing to be seen but Mind itself."
			,
			src : "Lankavatara Sutra"
		}
		,
		{
			index : "lankavatara_suffering",
			quotation : "Action and misery come from conceptual thought. This comes from mental fabrication. Fabrication ceases through emptiness.",
			src : "Lankavatara Sutra"
		},
		{
			index : "heart_passion",
			quotation : "Bodhisattva Avalokitesvara <br> While practicing Deeply the Prajnaparamita (Wisdom) <br> Realized that all five skhandas are empty <br> and is Safe from all Suffering and Distress"
			,
			src : "Heart Sutra"
		},
		{
			index : "russell_universe",
			quotation : "There is no single universe of discourse. Even a statement like, 'for every x, x=x', cannot be understood as quantifying over all objects without restriction."
			,
			src: "Bertrand Russell, The Paradoxes of Logic"
		}
		,
		{
			index : "russell_logic",
			quotation: "To form a universe of discourse argues... no further kind of connexion. The importance attached by certain monistic writers to the fact that any chaos may become a universe by merely being named, is to me incomprehensible."
			,
			src: "Bertrand Russell, Human Knowledge: Its Scope and Limits"
		},
		{
			index : "gunther_context",
			quotation : "Within each [context] the rules of the classical [binary] logic are valid locally.",
			src : "Gotthard Gunther, The Historical Category of the New"
		},
		{
			index : "avatam_hair",
			quotation: "Each of the Buddha's hairs <br> Is an inconceivable act of light <br> Like the clear orb of the sun <br> Illuminating all lands",
			src : "Avatamsaka Sutra"
		},
		{
			index : "nirvana_eternity",
			quotation : "The Meditation on the Buddha is the Dharma Eternal. The Dharma Eternal is not erected on the path of causal relations. Why should the Tathagata ask me about causal relations?"
			,
			src : "Nirvana Sutra"
		},
		{
			index : "plutarch_theseus",
			quotation : "The ship wherein Theseus and the youth of Athens returned from Crete had thirty oars, and was preserved by the Athenians down even to the time of Demetrius Phalereus, for they took away the old planks as they decyed, putting in stronger timber in their places, in so much that this ship became a standing example among the philosophers, for the logical question of things that grow; one side holding that the ship remained the same, and the other contending that it was not the same.",
			src: "Plutarch, Theseus"
		}
		,
		{
			index : "emerald_gods",
			quotation : "As I to thee am a god by my knowledge <br> So ye too shall be gods of the future <br> because of your knowledge far above theirs <br> Know ye that all thru the Ages <br> Man shall have access to Law when he will"
			,
			src : "Thoth, Emerald Tablets of Thoth The Atlantean"
		},
		{
			index : "exalted_king",
			quotation: "It is he who effects fruition <br> For beings in this life, <br> For he demonstrates the ripened effects of deeds <br> Done well and wrongly done; <br> For this reason he is called 'king.'"
			,
			src : "Exalted Sublime Golden Light"
		},
		{
			index : "diamond_entity",
			quotation : "Subhuti, when the Buddha speaks of particles of dust, it does not mean I am thinking of any definite or arbitrary thought. I am merely using these words as a figure of speech. The are not real, only illusion. I tis just the same with the word universe: these words do not assert any definite or arbitrary idea. I am only using the words as words."
			,
			src : "Diamond Sutra"
		}
		,
		{
			index:"god_of_gods",
			quotation : "You should thus show the prohibitions. Why? Because we say that the Tathagata, the Right-Enlightened One, is one who is true [truthful]. He sees the right path. And the Tathagata is the gods of gods, and he indeed talks about the superb virtues of the ten good deeds and meanings thereof."
			,src : "Nirvana Sutra"
		},
		{
			index:"heraclitus_logos",
			quotation: "To the Self belongs the self-multiplying Logos.",
			src: "Heraclitus, Fragments"
		},
		{
			index:"patriarch_identity",
			quotation: "Good friends, all of your coming here must have arisen out of your own identities.",
			src: "The Sixth Patriarch, Platform Sutra"
		},
		{
			index:"patriarch_logos",
			quotation: "If One Understands the Meaning, one transcends samsara; if one is attached to one's sensory realms, samsara is activated, just as waves [arise on] water. This is called the 'other shore,' therefore it is said to be 'paramita' (Wisdom)."
			,
			src: "The Sixth Patriarch, Platform Sutra"
		},
		{
			index :"patriarch_doubt",
			quotation : "If you want to teach others, <br> You must have expedient means yourself, <br> Do not make them destroy their doubts -- <br> This is what allows the self-nature to become manifest."
			,
			src:"The Sixth Patrarich, Platform Sutra"
		},
		{
			index : "master_patriarch",
			quotation : "Through the Master's internal mirroring, all is attained in the fundamental.",
			src: "The Sixth Patriarch, Platform Sutra"
		},
		{
			index : "logos_as_such",
			quotation : "Good friends, thoughts are activated from the self-nature of suchness. Although the six sensory faculties possesss perceptual cognition, they do not defile the myriad realms. And yet the true nature is always autonomous. Therefore, the sutra says, 'When one is able to discriminate well the characteristics of the dharmas, this is to be unmoving within the cardinal meaning.'" 
			, 
			src:"The Sixth Patriarch, Platform Sutra"
		},
		{
			index : "lankavatara_nature",
			quotation : "Again, Mahamati, what is meant by the emptiness of self-nature? Mahamati, it is that all things in their self-nature are unborn, hence the emptiness of self-nature, and it is therefore said that things are empty in their self-nature."
			,
			src: "Lankavatara Sutra"
		},
		{
			index : "emptiness_light",
			quotation : "Indeed, emptiness and radiance are not separate; the essential nature of emptiness is radiance and the essential nature of radiance is emptiness. This indivisible, naked, unclouded, and exposed awareness, present as it is right now in a natural uncontrived state, is the Buddha-body of essentiality."
			,src : "Tibetan Book of the Dead"
		}

	],
	rels : [
		{
			start:"heraclitus_logos",
			end : "patriarch_logos",
			pages : ["Heraclitus", "Platform Sutra", "Logic", "Self-Nature"]
		},
		{
			start:"heraclitus_logos",
			end : "patriarch_identity",
			pages : ["Heraclitus", "Platform Sutra", "Self-Nature"]
		},
		{
			start : "avatam_sun",
			end : "master_patriarch",
			pages : ["Sun", "Platform Sutra", "Avatamsaka Sutra", "Self-Nature", "Form"]
		},
		{
			start : "heraclitus_rivers",
			end:"logos_as_such",
			pages : ["Heraclitus", "Form", "Logic", "Platform Sutra", "Self-Nature"]
		},
		{
			start : "russell_logic",
			end:  "logos_as_such",
			pages : ["Logic", "Form", "Emptiness", "Platform Sutra", "Bertrand Russell"]
		},
		{
			start : "hume_self",
			end : "lankavatara_nature",
			pages : ["Hume", "Self", "anatta", "Self-Nature", "Lankavatara Sutra"]
		},
		{
			start : "lankavatara_nature",
			end : "logos_as_such",
			pages : ["Hume", "Self", "anatta", "Emptiness", "Self-Nature", "Lankavatara Sutra"]
		},

		{
			start: "doubt_is",
			end : "patriarch_doubt",
			pages : ["Platform Sutra", "Nirvana Sutra", "Skillful Means"]
		},

		
		{
			start : "cogito",
			end : "doubt_is",
			pages : ["Descartes", "Nirvana Sutra", "anatta", "Self"]
		},
		{
			start: "cogito",
			end : "patriarch_doubt",
			pages : ["Platform Sutra", "Descartes"]
		},
		{
			start : "cartesian_senses",
			end : "diamond_senses",
			pages : ["Descartes", "Diamond Sutra", "Maya", "Matter"]
		},
		{
			start : "descartes_conqueror",
			end: "dhammapada_conquest",
			pages: ["Descartes", "The Dhammapada"]
		},
		{
			start: "descartes_conqueror",
			end : "diamond_transformation",
			pages : ["Descartes", "Diamond Sutra"]
		},
		{

			start : "diamond_transformation",
			end:  "dhammapada_conquest",
			pages: ["Dhammapda", "Diamond Sutra"]
		},
		{
			//T
			start : "kant_yogacara",
			end : "lankavatara_concept",
			pages : ["Kant", "Lankavatara Sutra", "Maya", "Matter", "Form", "Plato"]
		},
		{
			//A
			start: "kant_yogacara",
			end: "diamond_senses",
			pages : ["Kant", "Yogacara", "Maya", "Matter", "Diamond Sutra", "Diamond Sutra"]
		},
		{
			//N
			start : "lankavatara_yogacara",
			end: "tibetan_yogacara",
			pages: ["Heraclitus", "Yogacara", "Tibetan Book of the Dead", "Lankavatara Sutra"]
		},
		{
			start : "diamond_senses",
			end: "lankavatara_yogacara",
			pages : ["Kant"]
		},
		{
			start : "plato_form",
			end : "tibetan_yogacara",
			pages : ["Plato", "Yogacara"]
		}
		,
		{
			start: "tibetan_yogacara",
			end : "nietzsche_truth",
			pages : ["Nietzsche", "Yogacara"]
		},
		{
			//T
			start : "kant_yogacara",
			end: "tibetan_yogacara",
			pages: ["Yogacara", "Tibetan Book of the Dead", "Lankavatara Sutra", "Kant"]
		},
		{
			//I
			start : "lankavatara_yogacara",
			end: "heraclitus_rivers",
			pages: ["Heraclitus", "Yogacara", "Tibetan Book of the Dead", "Lankavatara Sutra", "Kant"]
		},
		{
			//I
			start : "diamond_senses",
			end: "tibetan_yogacara",
			pages: ["Yogacara", "Tibetan Book of the Dead", "Diamond Sutra"]
		},
		{
			//T
			start: "kant_yogacara",
			end : "lankavatara_yogacara",
			pages : ["Yogacara", "Kant", "Maya", "Matter", "Diamond Sutra", "Lankavatara Sutra"]
		},
		{
			//N
			start : "diamond_senses",
			end: "lankavatara_yogacara",
			pages: ["Yogacara", "Lankavatara Sutra", "Diamond Sutra"]
		},
		

		/*{
			start : "tibetan_mind",
			end: "plato_form",
			pages: ["Form", "World Spirit", "Sun", "Avatamsaka Sutra", "Nirvana Sutra"]
		},*/
		{
			start : "heraclitus_life",
			end: "tibetan_life",
			pages: ["World Spirit", "Tibetan Book of the Dead", "Heraclitus", "Other"]
		},
		{
			start: "tibetan_impermanence",
			end: "heraclitus_rivers",
			pages : ["Heraclitus", "Tibetan Book of the Dead", "Yogacara", "anatta", "Self", "Becoming"]
		},
		{
			start : "hume_self",
			end: "diamond_self",
			pages : ["Other", "Diamond Sutra", "Hume", "anatta", "Self", "Maya", "Heraclitus", "Becoming"]
		},
		{
			start : "dhammapada_hero",
			end : "nietzsche_becoming",
			pages : ["Nietzsche", "The Dhammapada", "Self", "Ethics", "Dharma", "Descartes", "Marcus Aurelius"]
		},
		
		{
			start : "aurelius_death",
			end : "dhammapada_quarrels",
			pages : ["The Dhammapada", "Ethics", "Dharma"]
		}
		,
		{
			start : "lotus_omniscience",
			end : "emerald_wisdom",
			pages : ["Thoth", "Sun", "Eternity", "Wisdom", "The Lotus Sutra", "Skillful Means", "Omniscience"]
		}
		,
		{
			start : "emerald_wisdom",
			end : "heart_attainment",
			pages : ["Heart Sutra", "Thoth", "Maya", "Dharma", "Omniscience"]
		},
		{
			start : "avatam_sun",
			end:  "emerald_sun",
			pages : ["Sun", "World Spirit", "Hegel", "Avatamsaka Sutra", "Thoth", "Wisdom", "Omniscience"]
		},
		{
			start: "lotus_all"
			,
			end: "emerald_sun",
			pages: ["Sun", "The Lotus Sutra", "Thoth", "Wisdom", "Omniscience", "Skillful Means"]
		}
		,
		{
			start: "socrates_oracle",
			end: "tao_emptiness"
			,
			pages: ["Wisdom", "Omniscience", "Tao", "Socrates", "Dharma", "Emptiness"]
		},
		{
			start : "culatanhasankhaya_omniscience",
			end : "socrates_oracle",
			pages: ["Socrates", "Omniscience", "Wisdom", "Dharma", "Maya"]
		}
		,
		{
			start : "culatanhasankhaya_omniscience",
			end : "tao_emptiness",
			pages: ["Tao", "Omniscience", "Wisdom", "Dharma", "Maya"]
		},
		{
			start : "nietzsche_love",
			end : "dhammapada_love",
			pages: ["Dharma", "Morality", "The Dhammapada", "Nietzsche", "Maya", "Emptiness"]
		},
		{
			start : "socrates_beyond",
			end:  "dhammapada_love",
			pages : ["Dharma", "Morality", "Plato", "Socrates", "The Dhammapada", "Emptiness"]
		},
		{
			start : "socrates_beyond",
			end : "nietzsche_love",
			pages : ["Dharma", "Morality", "Plato", "Socrates", "Nietzsche", "Maya"]
		},
		{
			start : "nietzsche_love",
			end : "diamond_beyond",
			pages : ["Dharma", "Morality", "Diamond Sutra", "Nietzsche", "Emptiness"]
		},
		{
			start : "lotus_beyond",
			end : "diamond_beyond",
			pages : ["Dharma", "Morality", "Diamond Sutra", "The Lotus Sutra", "Emptiness"]
		},
		{
			start : "nietzsche_love",
			end : "lotus_beyond",
			pages : ["Dharma", "Morality", "The Lotus Sutra", "Nietzsche", "Emptiness"]
		},
		{
			start : "nietzsche_buddha",
			end : "lotus_beyond",
			pages : ["The Lotus Sutra", "Morality", "Dharma", "Nietzsche"]
		},
		{
			start : "nietzsche_buddha",
			end : "nirvana_beyond",
			pages : ["Nirvana Sutra", "Morality", "Dharma", "Nietzsche", "Emptiness"]
		},
		{
			start : "nietzsche_buddha",
			end : "diamond_beyond",
			pages : ["Diamond Sutra", "Dharma", "Morality", "Nietzsche"]
		},
		{
			start : "dhammapada_love",
			end : "nirvana_beyond",
			pages : ["Nirvana Sutra", "Morality", "Dharma", "The Dhammapada"]
		},
		{
			start : "nietzsche_bee",
			end : "heart_form",
			pages : ["Heart Sutra", "Maya", "Nietzsche", "Form", "Plato"]
		},
		{
			start : "nietzsche_truth",
			end : "heart_form",
			pages : ["Heart Sutra", "Maya", "Nietzsche", "Form", "Plato"]
		},
		{
			start : "nietzsche_bee",
			end : "lankavatara_concept",
			pages : ["Lankavatara Sutra", "Maya", "Nietzsche", "Form", "Plato"]
		}
		,
		{
			start : "nietzsche_truth",
			end : "lankavatara_concept",
			pages : ["Lankavatara Sutra", "Maya", "Nietzsche", "Form", "Plato"]
		},
		{
			start : "nietzsche_bee",
			end : "lankavatara_concept",
			pages : ["Nietzsche", "Lankavatara Sutra", "Maya", "Form", "Plato"]
		}
		,
		{
			start : "nietzsche_truth",
			end : "lankavatara_concept",
			pages : ["Nietzsche", "Lankavatara Sutra", "Maya", "Form", "Plato"]
		}
		
		
		,
		{
			start : "nietzsche_suffering",
			end : "lankavatara_suffering",
			pages : ["Nietzsche", "Lankavatara Sutra", "Maya", "Matter", "Form", "Plato"]
		}
		,
		{
			start : "nietzsche_suffering",
			end : "heart_passion",
			pages : ["Nietzsche", "Heart Sutra", "Maya", "Form", "Plato"]
		}
		,
		{
			start : "heart_passion",
			end : "lankavatara_suffering",
			pages : ["Lankavatara Sutra", "Heart Sutra", "Maya", "Form"]
		},
		{
			start : "russell_universe",
			end : "diamond_entity",
			pages : ["Bertrand Russell", "Diamond Sutra", "Logic", "Emptiness", "Wisdom", "Omniscience"]
		}
		,
		{
			start : "russell_logic",
			end : "diamond_entity",
			pages : ["Bertrand Russell", "Diamond Sutra", "Logic", "Emptiness", "Wisdom", "Omniscience"]
		}
		,
		{
			start : "russell_logic",
			end : "russell_universe",
			pages : ["Bertrand Russell", "Logic", "Emptiness", "Wisdom", "Omniscience"]
		}
		,
		{
			start : "russell_logic",
			end : "nietzsche_bee",
			pages : ["Bertrand Russell", "Nietzsche", "Logic", "Emptiness", "Wisdom", "Omniscience"]
		},
		{
			start : "russell_universe",
			end : "gunther_context",
			pages : ["Bertrand Russell", "Logic", "Emptiness"]
		},
		{
			start : "russell_logic",
			end : "gunther_context",
			pages : ["Bertrand Russell", "Logic", "Emptiness", "Matter", "Omniscience"]
		},
		{
			start : "lotus_omniscience",
			end : "gunther_context",
			pages : ["The Lotus Sutra", "Wisdom", "Skilful Means", "Omniscience", "Context"]
		},
		{
			start: "avatam_hair",
			end: "emerald_sun",
			pages : ["Sun", "Thoth", "Wisdom", "Omniscience", "Avatamsaka Sutra", "Emerald Tablets of Thoth"]
		},
		{
			start: "plato_form",
			end: "avatam_hair",
			pages : ["Sun", "Form", "Wisdom", "Omniscience", "Avatamsaka Sutra", "Plato"]
		},
		{
			start: "nirvana_eternity",
			end: "avatam_hair",
			pages : ["Sun", "Omniscience", "Nirvana Sutra"]
		}
		,
		{
			start: "plato_form",
			end: "nirvana_eternity",
			pages : ["Sun", "Form", "Wisdom", "Omniscience", "Nirvana Sutra", "Plato"]
		},
		{
			start : "plutarch_theseus",
			end : "heraclitus_rivers",
			pages : ["Heraclitus", "Becoming", "Matter", "Maya", "Transience"]
		}
		,
		{
			start : "plutarch_theseus",
			end : "tibetan_impermanence",
			pages : ["Tibetan Book of the Dead", "Becoming", "Matter", "Maya", "Transience"]
		},
		{
			start : "emerald_gods",
			end : "exalted_king",
			pages : ["Emerald Tablets of Thoth", "Dharma", "Morality", "Wisdom", "Exalted Sublime Golden Light"]
		}
		,
		{
			start : "emerald_gods",
			end : "god_of_gods",
			pages : ["Emerald Tablets of Thoth", "Dharma", "Morality", "Wisdom", "Eternity", "Nirvana Sutra"]
		}
		,
		{
			start : "exalted_king",
			end : "god_of_gods",
			pages : ["Nirvana Sutra", "Dharma", "Morality", "Wisdom", "Eternity", "Exalted Sublime Golden Light"]
		},
		{
			start: "nietzsche_suffering",
			end : "lankavatara_suffering",
			pages : ["Nietzsche", "Lankavatara Sutra", "Suffering", "Plato"]
		},
		{
			start : "emptiness_light",
			end: "heart_form",
			pages : ["Tibetan Book of the Dead", "Heart Sutra", "Emptiness", "Form", "Logic", "Eternity"]
		}
		,
		{
			start : "emptiness_light",
			end: "nirvana_eternity",
			pages : ["Tibetan Book of the Dead", "Nirvana Sutra", "Emptiness", "Form", "Logic", "Eternity"]
		}



		/*{
			start : "nirvana_self",
			end : "",
			pages : ["Nirvana Sutra", "Morality", "Dharma", "Nietzsche"]
		}*/

	]
}
