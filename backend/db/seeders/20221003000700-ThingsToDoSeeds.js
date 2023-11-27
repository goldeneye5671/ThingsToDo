"use strict";

const ThingsToDo = require("./generatrors/ThingsToDoGenerator");
const configuration = require("./generatrors/counter");

const numberOfThings = configuration.maxThingsToDo;
const generatedThings = [];

// for (let i = 0; i < numberOfThings; i++) {
// 	generatedThings.push(new ThingsToDo());
// }

generatedThings.push(
		new ThingsToDo(
			"Backpacking", 
			`Backpacking is a minimalist form of travel, where individuals carry essential belongings in a backpack, exploring diverse landscapes, cultures, and often relying on public transport or hiking. It embodies adventure, self-discovery, and a connection with nature, emphasizing mobility, flexibility, and a sense of exploration`
		),
		new ThingsToDo(
			"Roller Skating",
			"Rollerskating is a dynamic recreational activity where individuals glide on wheeled boots, propelling themselves forward with rhythmic movements. It combines elements of fitness, fun, and skill, fostering a sense of freedom and enjoyment. Popular for exercise and leisure, rollerskating appeals to various ages, offering a unique blend of sport and entertainment."
		),
		new ThingsToDo(
			"Singing",
			"Singing is the art of producing musical sounds with the voice, involving melody, rhythm, and expression. Utilizing the vocal cords and breath control, singers convey emotions and tell stories through harmonious and modulated tones. It is a universal form of communication and a powerful means of artistic expression across diverse cultures and genres."
		),
		new ThingsToDo(
			"Dancing",
			"Dancing is a rhythmic expression of movement, often accompanied by music, where the body interprets and responds to sound. It is a diverse and cultural form of art, conveying emotions, stories, or simply joy through coordinated and expressive gestures. Dance transcends language, uniting people in shared rhythms and creative expression."
		),
		new ThingsToDo(
			"Cooking",
			"Cooking is the process of preparing food by combining ingredients through various techniques such as chopping, mixing, and heating. It is a creative and practical activity, involving the application of culinary skills to transform raw ingredients into delicious and satisfying meals, catering to taste preferences and nutritional needs."
		),
		new ThingsToDo(
			"Drawing",
			"Drawing is the visual art of creating images, designs, or representations on a surface using various tools such as pencils, pens, charcoal, or digital devices. It involves the use of lines, shapes, and shading to convey ideas, emotions, or depict objects, people, and scenes with varying levels of detail and realism."
		),
		new ThingsToDo(
			"Painting",
			"Painting is an artistic expression involving the application of pigments, typically in a liquid form, on a surface such as canvas or paper. Artists use brushes, palette knives, or other tools to create images, conveying ideas, emotions, or scenes. The process may involve various techniques, styles, and mediums, including oils, acrylics, watercolors, and more."
		),
		new ThingsToDo(
			"Woodworking",
			"Woodworking is a craft that involves shaping and creating objects or structures from wood. Woodworkers use various tools such as saws, chisels, and planes to cut, carve, and join wood pieces, creating furniture, sculptures, or other functional and decorative items. Woodworking requires skills in design, precision, and knowledge of different wood types."
		),
		new ThingsToDo(
			"Leatherworking",
			"Leatherworking is a skilled craft focused on the creation and manipulation of leather to produce various items. Craftsmen use tools to cut, shape, dye, and stitch leather to create products such as bags, belts, footwear, and accessories. The process involves both functional and artistic techniques, showcasing the versatility of leather as a material."
		),
		new ThingsToDo(
			"Coin Collecting",
			"Coin collecting, also known as numismatics, is a hobby that involves the acquisition and study of coins, tokens, and related currency items. Collectors often seek rare or historical coins for their intrinsic value, historical significance, or aesthetic appeal. Numismatists may also study the cultural and economic aspects of the coins they collect."
		),
		new ThingsToDo(
			"Swimming",
			"Swimming is a physical activity and water-based sport where individuals move through water using various strokes and techniques. It is not only a life skill but also a recreational and competitive activity. Swimmers propel themselves using arm and leg movements, often for fitness, relaxation, or participation in organized swimming events."
		),
		new ThingsToDo(
			"Skateboarding",
			"Skateboarding is a sport and recreational activity that involves riding and performing tricks on a skateboard, typically a flat board with four wheels. Skateboarders use a combination of balance, coordination, and skill to execute maneuvers such as jumps, spins, and flips, often in skate parks or urban environments."
		),
		new ThingsToDo(
			"Basket Weaving",
			"Basket weaving is a traditional craft involving the creation of baskets by interlacing flexible materials such as reeds, twigs, or fibers. Craftsmen use various techniques to form a structural framework and create functional or decorative baskets of different shapes and sizes. Basket weaving is found in diverse cultures worldwide and serves both utilitarian and artistic purposes."
		),
		new ThingsToDo(
			"Geocaching",
			"Geocaching is an outdoor recreational activity that involves participants using a GPS receiver or mobile device to hide and seek containers, called \"geocaches\" or \"caches,\" at specific locations marked by coordinates all over the world. Geocaching combines elements of treasure hunting, navigation, and outdoor exploration, and participants often share their experiences online."
		),
		new ThingsToDo(
			"Gardening",
			"Gardening is the practice of cultivating and nurturing plants, including flowers, vegetables, herbs, or ornamental plants, within a designated area such as a garden or yard. It involves activities like planting, weeding, watering, and maintaining the soil to encourage plant growth. Gardening can be both a practical and aesthetic pursuit, providing fresh produce, beautiful landscapes, and a connection to nature."
		),
		new ThingsToDo(
			"Volunteering",
			"Volunteering is the act of offering one's time, skills, or services without expecting financial compensation. Volunteers engage in various activities to benefit individuals, communities, or organizations, contributing to social, environmental, or humanitarian causes. Volunteering fosters a sense of civic responsibility, empathy, and positive impact on the well-being of others."
		),
		new ThingsToDo(
			"Computer Building",
			"Computer building refers to the process of assembling individual computer components, such as the motherboard, CPU, RAM, storage, graphics card, and power supply, to create a functional and customized computer system. This hands-on approach allows users to tailor their computers to specific needs, preferences, and performance requirements."
		),
		new ThingsToDo(
			"Running",
			"Running is a form of aerobic exercise and athletic activity in which individuals move rapidly on foot, lifting one foot off the ground while the other is in contact with it. It is a natural human movement and a popular sport for physical fitness, competition, and personal well-being. Runners may participate in various distances, from short sprints to long-distance marathons, enjoying benefits such as cardiovascular fitness, stress relief, and a sense of accomplishment."
		),
		new ThingsToDo(
			"Cross Country Skiing",
			"Cross-country skiing is a winter sport that involves gliding over snow-covered terrain using skis. Unlike downhill skiing, it focuses on horizontal travel and endurance rather than steep descents. Participants use a push-and-glide motion with ski poles, engaging both upper and lower body muscles. Cross-country skiing is enjoyed for its cardiovascular benefits, connection with nature, and suitability for various skill levels."
		),
		new ThingsToDo(
			"Photography",
			"Photography is the art and practice of capturing and creating images using light-sensitive materials or digital sensors. Photographers use cameras to frame and record scenes, documenting moments, people, landscapes, or objects. It involves considerations of composition, lighting, and perspective to convey emotions, tell stories, or simply capture the visual essence of a subject."
		),
		new ThingsToDo(
			"Cinematography",
			"Cinematography is the art and technique of capturing moving images on film or digital media for storytelling purposes. Cinematographers, also known as directors of photography, employ various visual elements such as framing, lighting, camera angles, and movement to create a visually compelling and narrative-rich cinematic experience. They play a crucial role in shaping the visual language and mood of films or video productions."
		),
		new ThingsToDo(
			"Video Editing",
			"Video editing is the process of manipulating and rearranging video footage to create a cohesive and polished final product. Video editors use specialized software to trim, cut, and arrange clips, add transitions, effects, and audio, ensuring a seamless and engaging narrative. This creative process enhances storytelling, refines pacing, and contributes to the overall visual and auditory impact of the video. Video editing is fundamental in various industries, including filmmaking, television production, and online content creation."
		),
		new ThingsToDo(
			"Becoming a YouTuber",
			"Becoming a YouTuber involves creating and sharing content on the YouTube platform, spanning diverse topics from entertainment to education. It requires consistent video production, audience engagement, and leveraging social media to build a subscriber base. Success often hinges on originality, authenticity, and adaptability in the ever-evolving online landscape."
		),
		new ThingsToDo(
			"Dog Walking",
			"Dog walking is the act of taking dogs for a stroll outdoors, providing them with exercise, mental stimulation, and an opportunity to relieve themselves. Dog walkers, either professional or owners, guide dogs on leashes, ensuring a safe and enjoyable experience. This routine promotes the health and well-being of the dogs while fostering a bond between pets and their caregivers."
		),
		new ThingsToDo(
			"Fishing",
			"Fishing is a recreational or commercial activity involving the catching of fish or other aquatic organisms. It typically employs various techniques such as angling, netting, or trapping, often for sport, sustenance, or trade. Anglers use baited hooks, lures, or nets to catch fish in rivers, lakes, or oceans, blending skill, patience, and appreciation for nature."
		),
		new ThingsToDo(
			"Kayaking",
			"Kayaking is a water-based recreational activity where individuals paddle in a small, narrow boat called a kayak. Kayakers use double-bladed paddles to navigate rivers, lakes, or oceans. This versatile watercraft allows for exploration, physical exercise, and adventure, catering to both serene paddling on calm waters and exhilarating experiences in challenging rapids."
		),
		new ThingsToDo(
			"Paddleboarding",
			"Paddleboarding involves standing or kneeling on a large board and propelling oneself forward using a paddle. It combines elements of surfing and canoeing, offering a versatile water activity suitable for various conditions, from calm lakes to ocean waves. Paddleboarding provides a full-body workout and a unique perspective for enjoying water environments."
		),
		new ThingsToDo(
			"Surfing",
			"Surfing is a water sport in which individuals ride on the face of ocean waves using a surfboard. Surfers paddle to catch waves, stand up, and balance while riding the moving swell. It's a dynamic and exhilarating activity that requires skill, wave knowledge, and a connection with the natural elements, providing a thrilling and often serene experience."
		),
		new ThingsToDo(
			"Cannoning",
			"Canoeing is a water activity where individuals paddle a canoe, a narrow watercraft pointed at both ends. Participants typically kneel or sit while using a single-bladed paddle to propel the canoe forward. Canoeing offers opportunities for both calm water exploration and adventurous river journeys, fostering a connection with nature and requiring teamwork and paddling skills."
		),
		new ThingsToDo(
			"Sight Seeing",
			"Sightseeing is the act of visiting and observing notable or interesting places, landmarks, and attractions for leisure or cultural exploration. It involves touring and appreciating the aesthetics, history, and significance of various locations, often guided by local knowledge or informational resources. Sightseeing allows individuals to experience and learn about diverse destinations and their unique features."
		),
		new ThingsToDo(
			"Road Triping",
			"Road tripping involves traveling by road over an extended distance, often in a vehicle, to explore multiple destinations. It emphasizes the journey itself, providing opportunities for spontaneous stops, scenic detours, and immersive experiences along the way. Road trips offer flexibility, adventure, and a sense of freedom, making them a popular mode of travel for exploration and discovery."
		),
		new ThingsToDo(
			"Row Boating",
			"Row boating is a water activity where individuals propel a small boat using oars. Rowboats are typically flat-bottomed and designed for manual rowing. Participants sit facing the stern and use oars to push against the water, propelling the boat forward. Row boating offers a leisurely and serene way to navigate calm waters such as lakes or ponds, providing a peaceful recreational experience."
		),
		new ThingsToDo(
			"Wine Tasting",
			"Wine tasting is a sensory experience focused on evaluating and appreciating the aromas, flavors, and characteristics of wine. Participants sample a variety of wines, observing color, swirling to release aromas, and sipping to discern taste profiles. Tastings often involve discussions about grape varieties, regions, and winemaking techniques, contributing to a nuanced understanding and enjoyment of the wines presented."
		),
		new ThingsToDo(
			"Snowball Fight",
			"Snowball fights are winter recreational activities where participants engage in friendly combat by throwing snowballs at each other. Typically occurring after fresh snowfall, participants build snow forts or take cover behind natural features, dodging and hurling snowballs in a playful and often lighthearted manner. Snowball fights evoke a sense of joy and camaraderie, embracing the seasonal spirit of winter."
		),
		new ThingsToDo(
			"Building an Igloo",
			"Building an igloo involves compacting snow into blocks, stacking them in a spiral pattern, and shaping a domed structure. Assembled with precision, the blocks create a shelter with natural insulation. Igloos showcase traditional Arctic construction, providing warmth and protection in snowy environments, combining functionality with ingenuity."
		),
		new ThingsToDo(
			"Cyber security and Networking",
			"Cybersecurity involves safeguarding digital systems and data from unauthorized access or attacks. Networking is the interconnection of computers and devices for communication. Together, they form a critical alliance, ensuring secure and efficient information exchange while defending against cyber threats in the interconnected digital landscape."
		),
		new ThingsToDo(
			"Computer Programming",
			"Computer programming is the process of designing, writing, testing, and maintaining code that enables computers to perform specific tasks or functions. Programmers use programming languages to create software, applications, or scripts, instructing the computer to execute desired operations and solve problems in various domains."
		),
		new ThingsToDo(
			"Play Card Games",
			"Card games are recreational activities using a standard deck of playing cards. Players follow specific rules and objectives, engaging in strategic or chance-based gameplay. With diverse genres like trick-taking, shedding, and matching, card games include classics like poker, bridge, and solitaire, offering social entertainment and cognitive challenges."
		),
		new ThingsToDo(
			"Play Board Games",
			"Board games are tabletop games where players use pieces or markers on a pre-marked board, following rules to achieve objectives. They encompass a wide range of genres, from strategy and role-playing to trivia and party games. Board games foster social interaction, strategic thinking, and entertainment among players of all ages."
		),
		new ThingsToDo(
			"Hiking",
			"Hiking is a recreational activity that involves walking on trails or paths in natural environments, such as mountains, forests, or parks. Hikers often explore landscapes, enjoy outdoor scenery, and connect with nature. It's a physically engaging activity that varies in intensity, catering to both casual enthusiasts and avid adventurers."
		),		
		new ThingsToDo(
			"Sport Shooting",
			"Sport shooting, also known as competitive shooting, is a recreational activity where participants use firearms to engage in various shooting competitions. These events often assess accuracy, speed, and precision across different disciplines, such as pistol, rifle, or shotgun shooting. Sport shooting emphasizes skill, safety, and adherence to specific rules and regulations."
		),
		new ThingsToDo(
			"Hunting",
			"Hunting is the practice of pursuing and capturing or killing wild animals for food, sport, or conservation. Hunters use various methods, including firearms, bows, or traps, and often follow ethical and legal guidelines to maintain wildlife populations. Hunting has cultural, historical, and recreational aspects, with a focus on responsible and sustainable practices."
		),
		new ThingsToDo(
			"Learn to play an instrument",
			"Learning to play an instrument involves acquiring the skills to produce music using tools such as a guitar, piano, violin, or others. This process includes understanding musical notation, practicing techniques, and developing a sense of rhythm and melody. It requires dedication, patience, and consistent practice to gain proficiency and musical expression."
		),
		new ThingsToDo(
			"Volleyball",
			"Volleyball is a team sport played on a rectangular court divided by a net. Two teams, each with six players, aim to score points by sending a ball over the net and into the opponent's court. Players use a combination of passes, sets, and spikes to maneuver the ball strategically. Volleyball is known for its fast-paced and dynamic nature, promoting teamwork and athleticism."
		),
		new ThingsToDo(
			"Pickleball",
			" it's a paddle sport that combines elements of tennis, badminton, and table tennis. Played on a smaller court with a solid paddle and a perforated plastic ball, pickleball is popular for its accessibility, social aspect, and suitability for players of all ages and skill levels."
		),
		new ThingsToDo(
			"Video Games",
			"Video games are electronic games played on computers, gaming consoles, or other platforms. Players interact with virtual worlds, characters, or scenarios, using controllers or other input devices. Video games span diverse genres, including action, adventure, simulation, and multiplayer games, offering entertainment, challenges, and often immersive storytelling experiences. They have become a significant form of recreation and a booming industry worldwide."
		),
		new ThingsToDo(
			"paper mâché",
			"Paper mâché is a crafting technique that involves creating objects by layering pieces of paper or pulp with an adhesive, often a mixture of glue, water, or flour. Once the layers dry and harden, a durable and lightweight structure is formed. Paper mâché is commonly used for creating sculptures, masks, and various decorative items due to its versatility and cost-effectiveness."
		),
		new ThingsToDo(
			"Camping",
			"Camping is an outdoor recreational activity where individuals set up temporary shelters, such as tents, in natural environments like forests, mountains, or campgrounds. Campers engage in activities like hiking, cooking over an open fire, and stargazing, fostering a connection with nature. Camping provides an escape from urban life, promoting relaxation, adventure, and a sense of self-sufficiency."
		),
		new ThingsToDo(
			"Poetry",
			"Poetry is a form of literary expression characterized by rhythmic and imaginative use of language. Poets convey emotions, ideas, or stories through carefully chosen words, often employing rhyme, meter, and various literary devices. Poetry encompasses diverse styles and genres, from traditional forms like sonnets to free verse, allowing for creative exploration and evoking powerful imagery and emotions."
		),
		new ThingsToDo(
			"Writing a song",
			"Songwriting is the creative process of composing lyrics and music to create a song. Songwriters craft melodies, chord progressions, and meaningful lyrics to convey emotions, tell stories, or communicate messages. The art involves a blend of musical and poetic elements, often reflecting personal experiences or societal themes."
		),
		new ThingsToDo(
			"Writing a book",
			"Book writing, or authoring, is the process of creating a written work typically longer than a short story. Authors develop ideas, plan plot structures, and craft characters to produce a cohesive narrative. Writing styles vary, encompassing fiction, non-fiction, and various genres, reflecting the author's unique voice and perspective. The process often involves drafting, editing, and revising to create a polished and engaging final manuscript."
		),
		new ThingsToDo(
			"Writing a play",
			"Writing a play involves crafting a dramatic script for performance on stage. Playwrights create dialogue, characters, and stage directions to convey a story or message. Considerations include plot development, setting, and character arcs, with an emphasis on dramatic structure. Playwriting allows for creative exploration of themes, emotions, and human experiences within the context of live theatrical performance."
		),
		new ThingsToDo(
			"White Water Rafting",
			"Whitewater rafting is an adventurous water sport where participants navigate inflatable rafts through the turbulent and challenging waters of rivers with varying degrees of rapids. Paddlers work as a team, following a guide's instructions to steer through twists, turns, and rapids, providing an exhilarating and adrenaline-filled experience amidst stunning natural landscapes."
		),
		new ThingsToDo(
			"Build a box fort",
			"Building a box fort involves constructing a makeshift structure using cardboard boxes. Participants cut, fold, and tape boxes together, creating walls and rooms. The fort can be as simple or elaborate as desired, fostering creativity and imaginative play. Building a box fort is a fun and often spontaneous activity, providing a cozy and playful space for children and adults alike."
		),
		new ThingsToDo(
			"Build a snow man",
			"Building a snowman involves rolling snow into three progressively larger balls, stacking them, and decorating with items like buttons and a carrot for a nose. This joyful winter activity brings people together, promoting creativity and outdoor fun as a whimsical, temporary sculpture emerges in the snowy landscape."
		),
		new ThingsToDo(
			"Sledding",
			"Sledding is a winter activity where individuals ride on a sled or toboggan down snow-covered hills. Thrilling and fast-paced, sledding offers a simple yet exhilarating experience. Participants often enjoy the combination of speed, laughter, and the crisp winter air, making it a popular and festive cold-weather pastime."
		),
		new ThingsToDo(
			"Biking",
			"Biking involves riding bicycles for recreation, exercise, or transportation. Cyclists use pedal-powered two-wheelers, exploring diverse terrains from city streets to mountain trails. Biking offers a sustainable and healthy mode of transport, promoting fitness and a sense of freedom as riders navigate various landscapes with the wind in their faces."
		),
		new ThingsToDo(
			"Autocross",
			"Autocross is a motorsport where participants navigate a defined course marked by cones in a competitive and timed environment. Typically held in large parking lots or open spaces, autocross emphasizes precision driving, agility, and quick decision-making. Drivers aim to navigate the course with the fastest time while avoiding penalties for hitting cones or other infractions. It's a popular and accessible form of amateur motorsport."
		),
		new ThingsToDo(
			"Drifting",
			"Drifting, in the context of motorsport, is a driving technique where a driver intentionally oversteers, causing the rear wheels to lose traction, resulting in a controlled slide. Drifting competitions judge participants based on factors like speed, angle, and style as they skillfully navigate a course. It's a dynamic and visually captivating form of motorsport that showcases a driver's car control and precision."
		),
		new ThingsToDo(
			"Racing",
			"Racing in motorsport involves vehicles competing against each other to complete a designated course in the shortest time. This high-speed competition takes various forms, including circuit racing on closed tracks, drag racing on straight courses, or rally racing on diverse terrains. It demands skill, strategy, and teamwork as drivers and their teams aim for victory in a test of speed, agility, and endurance."
		),
		new ThingsToDo(
			"Ultimate Frisbee",
			"Ultimate frisbee, also known as ultimate, is a team sport played with a flying disc (frisbee). Teams of seven players each aim to score points by passing the disc among teammates and catching it in the opposing team's end zone. Fast-paced and non-contact, ultimate frisbee emphasizes sportsmanship, fair play, and constant movement."
		),
		new ThingsToDo(
			"Can Jam",
			"Can Jam is an outdoor game played with two teams, each consisting of two players. The objective is to throw a flying disc toward a large can, attempting to score points by either hitting the can directly or having a teammate deflect the disc through a slot in the can. It's a fun and active game that combines elements of accuracy and teamwork."
		),
		new ThingsToDo(
			"Building with Legos",
			"Building with LEGO involves assembling interlocking plastic bricks and elements to create structures, vehicles, and imaginative creations. Builders follow instructions from LEGO sets or use their creativity to design unique models. This hands-on activity encourages spatial reasoning, problem-solving, and imaginative play, making it popular for both children and adults."
		),
		new ThingsToDo(
			"Nerf Battle",
			"A Nerf battle is a recreational activity where participants engage in mock combat using Nerf foam dart guns. Players strategize and dart around, attempting to eliminate opponents by hitting them with foam darts. Safety is a key element, as the soft foam darts minimize the risk of injury, allowing for energetic and enjoyable indoor or outdoor battles."
		)
	)

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		 *  Backpacking
		 *  Music Creation
		 *  Learn An Instrument
		 *  Learn A new Language
		 *  Martial Arts
		 *  Art Classes
		 *  Soccer
		 *  Football
		 *  Rugby
		 *  Cooking Classes
		 *  Become a Social Media Influencer
		 *  Hiking
		 *  Visit a Park
		 *  Learn a Programming Language
		 *  Become a Pro Gamer
		 *  Start a Business
		 *  Become a Day Trader
		 *  Car Maintenance
		 */
		return queryInterface.bulkInsert("ThingsToDos", generatedThings, {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete("ThingsToDos", null, {});
	},
};
