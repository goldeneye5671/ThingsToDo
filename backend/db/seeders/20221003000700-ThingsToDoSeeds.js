"use strict";

const ThingsToDo = require("./generatrors/ThingsToDoGenerator");
const configuration = require("./generatrors/counter");

const numberOfThings = configuration.maxThingsToDo;
const generatedThings = [];

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
		),
		new ThingsToDo(
			"Krosheying",
			"A Nerf battle is a recreational activity where participants engage in mock combat using Nerf foam dart guns. Players strategize and dart around, attempting to eliminate opponents by hitting them with foam darts. Safety is a key element, as the soft foam darts minimize the risk of injury, allowing for energetic and enjoyable indoor or outdoor battles."
		),
		new ThingsToDo(
			"Knitting",
			"A Nerf battle is a recreational activity where participants engage in mock combat using Nerf foam dart guns. Players strategize and dart around, attempting to eliminate opponents by hitting them with foam darts. Safety is a key element, as the soft foam darts minimize the risk of injury, allowing for energetic and enjoyable indoor or outdoor battles."
		),
		new ThingsToDo(
			"Rock Climbing",
			"A Nerf battle is a recreational activity where participants engage in mock combat using Nerf foam dart guns. Players strategize and dart around, attempting to eliminate opponents by hitting them with foam darts. Safety is a key element, as the soft foam darts minimize the risk of injury, allowing for energetic and enjoyable indoor or outdoor battles."
		),
		new ThingsToDo(
			"Meteorology",
			"Meteorology is the scientific study of the Earth's atmosphere, weather patterns, and climatic conditions. Weather enthusiasts and meteorologists analyze atmospheric phenomena, study climate trends, and predict short-term and long-term weather changes. Meteorology combines elements of physics, mathematics, and environmental science to understand and forecast atmospheric dynamics."
		),
		new ThingsToDo(
			"LARPing (Live Action Role-Playing)",
			"Live Action Role-Playing (LARPing) involves participants physically portraying characters in a fictional setting. Players engage in collaborative storytelling, problem-solving, and combat scenarios, often in elaborate costumes and with prop weapons. LARPing provides an immersive and social experience, blending elements of theater, gaming, and creativity."
		),
		new ThingsToDo(
			"Glassblowing",
			"Glassblowing is a traditional craft that involves shaping molten glass using a blowpipe, molds, and various tools. Artisans create intricate glass objects, such as vases, sculptures, and ornaments, through a combination of skillful blowing, shaping, and cooling techniques. Glassblowing showcases the beauty and versatility of this captivating art form."
		),
		new ThingsToDo(
			"Escape Room Challenges",
			"Escape room challenges are interactive games where participants work together to solve puzzles, uncover clues, and accomplish tasks within a set time frame to 'escape' from a themed room. These immersive experiences foster teamwork, critical thinking, and creativity, providing an engaging and mentally stimulating activity for friends, family, or colleagues."
		),
		new ThingsToDo(
			"Hot Air Ballooning",
			"Hot air ballooning is a serene and adventurous activity that involves flying in a large balloon filled with hot air. Participants enjoy breathtaking aerial views as the balloon drifts with the wind. Hot air ballooning combines the thrill of flight with the tranquility of floating, creating a unique and memorable experience."
		),
		new ThingsToDo(
			"Falconry",
			"Falconry, or hawking, is the ancient art of training and hunting with birds of prey, such as falcons, hawks, and eagles. Falconers develop a bond with their birds, teaching them to hunt and return. Falconry is a cultural and historical practice that showcases the partnership between humans and these majestic raptors."
		),
		new ThingsToDo(
			"Soap Making",
			"Soap making is a creative and practical craft that involves producing soap from raw ingredients. Crafters mix oils, lye, and scents to create unique soap bars, often experimenting with colors and textures. Soap making allows for customization and produces handmade, artisanal products, making it both a satisfying hobby and potential small business venture."
		),
		new ThingsToDo(
			"Telescope Making",
			"Telescope making is a hands-on hobby where individuals construct their own telescopes for observing celestial objects. Enthusiasts grind and polish mirrors, assemble lenses, and build telescope mounts. Telescope making combines optics, engineering, and craftsmanship, providing a deeper connection to the night sky through personally crafted observing instruments."
		),
		new ThingsToDo(
			"Genealogy Research",
			"Genealogy research involves tracing one's ancestry and family history. Researchers explore historical records, documents, and databases to build family trees, uncover connections, and learn about the lives of their ancestors. Genealogy provides a fascinating journey into the past, connecting individuals to their roots and heritage."
		),
		new ThingsToDo(
			"Metal Detecting",
			"Metal detecting is a hobby where individuals use metal detectors to search for buried objects, artifacts, or treasures beneath the ground. Detectorists explore various locations, such as parks, beaches, or historical sites, uncovering items with historical, archaeological, or sentimental value. Metal detecting combines outdoor exploration with the excitement of discovery."
		),
		new ThingsToDo(
			"Pottery",
			"Pottery is the art of creating ceramic objects by shaping clay on a wheel or by hand. Artists mold and fire their creations, producing functional or decorative items such as bowls, vases, and sculptures. Pottery involves various techniques, glazes, and firing methods, resulting in unique and personalized ceramic pieces."
		),
		new ThingsToDo(
			"Sailing",
			"Sailing is a water-based activity that involves propelling a boat using wind as the primary source of power. Sailors manipulate sails and navigate watercraft, experiencing the thrill of harnessing natural forces for propulsion. Sailing offers a blend of skill, teamwork, and a deep connection with the open water and maritime environments."
		),
		new ThingsToDo(
			"Scuba Diving",
			"Scuba diving is an underwater activity where individuals use self-contained underwater breathing apparatus (SCUBA) to explore submerged environments. Divers experience the mesmerizing beauty of coral reefs, marine life, and underwater landscapes. Scuba diving combines adventure, exploration, and appreciation for the diverse ecosystems hidden beneath the ocean's surface."
		),
		new ThingsToDo(
			"Kite Making and Flying",
			"Kite making and flying involve crafting and launching kites into the sky. Enthusiasts create colorful kites with various designs and materials, enjoying the artistry of both making and piloting their creations. Kite flying provides a simple yet joyful outdoor activity, connecting individuals with the wind and the thrill of watching their kites soar."
		),
		new ThingsToDo(
			"Amateur Radio",
			"Amateur radio, or ham radio, is a hobby that allows individuals to communicate via radio waves. Operators use designated frequencies, equipment, and techniques to connect with other ham radio enthusiasts globally. Amateur radio combines technical skills, electronics, and a sense of community, fostering communication across borders and cultures."
		),
		new ThingsToDo(
			"Creative Writing",
			"Creative writing is the expression of thoughts, ideas, and stories through original prose, poetry, or fiction. Writers explore their imagination, emotions, and unique perspectives, creating compelling narratives. Creative writing serves as a means of self-expression, storytelling, and communication, offering a diverse and enriching outlet for literary creativity."
		),
		new ThingsToDo(
			"Digital Art",
			"Digital art involves creating visual art using digital tools, software, and devices. Artists use graphics tablets, digital pens, and software like Photoshop to produce illustrations, paintings, and designs. Digital art offers a versatile and dynamic medium for artistic expression, combining traditional art principles with the possibilities of technology."
		),
		new ThingsToDo(
			"Candle Making",
			"Candle making is a craft where individuals create candles from wax, wicks, and fragrances. Crafters mold and decorate candles, experimenting with shapes, colors, and scents. Candle making provides a therapeutic and rewarding experience, producing personalized candles for decoration, ambiance, or as thoughtful handmade gifts."
		),
		new ThingsToDo(
			"Amateur Astronomy",
			"Amateur astronomy involves observing celestial objects and phenomena using telescopes, binoculars, or the naked eye. Stargazers explore the night sky, identifying planets, stars, and other astronomical wonders. Amateur astronomy fosters a sense of wonder and curiosity, connecting enthusiasts with the vastness of the cosmos and the beauty of the universe."
		),
		new ThingsToDo(
			"Aquaponics",
			"Aquaponics is a sustainable farming method that combines aquaculture (raising fish) and hydroponics (cultivating plants in water). The nutrient-rich water from fish tanks provides an organic fertilizer for plants, and the plants naturally filter and purify the water for the fish. Aquaponics is a symbiotic system that showcases the integration of aquatic and plant life."
		),
		new ThingsToDo(
			"Whittling",
			"Whittling is the art of carving shapes, figures, or designs from wood using a knife. Whittlers create small sculptures or intricate designs by removing material from a piece of wood. Whittling is a relaxing and meditative hobby that requires patience and precision, producing handcrafted wooden objects with a personal touch."
		),
		new ThingsToDo(
			"Hydroponics",
			"Hydroponics is a soilless gardening method where plants grow in nutrient-rich water solutions. Enthusiasts use hydroponic systems to cultivate vegetables, herbs, and flowers, optimizing growing conditions and resource efficiency. Hydroponics allows for precise control over plant nutrition and encourages experimentation with different crops in diverse indoor or outdoor setups."
		),
		new ThingsToDo(
			"Voice Acting",
			"Voice acting involves using one's voice to portray characters in animated films, video games, audiobooks, and other media. Voice actors convey emotions, personalities, and narratives through vocal performance. Voice acting requires versatility, expression, and the ability to bring characters to life solely through the power of the spoken word."
		),
		new ThingsToDo(
			"Blacksmithing",
			"Blacksmithing is the ancient craft of forging and shaping metal, typically iron and steel, using heat and various tools. Blacksmiths create functional items such as tools, weapons, and decorative pieces through a combination of heating, hammering, and shaping. Blacksmithing combines traditional craftsmanship with artistic expression, highlighting the beauty and utility of metalwork."
		),
		new ThingsToDo(
			"Permaculture",
			"Permaculture is a holistic approach to sustainable living that integrates ecological design principles to create regenerative and self-sufficient systems. Practitioners design landscapes, gardens, and communities based on natural patterns, emphasizing biodiversity, resource efficiency, and resilience. Permaculture fosters harmony between human activities and the natural environment, promoting long-term sustainability."
		),
		new ThingsToDo(
			"Sudoku",
			"Sudoku is a popular number puzzle game that involves filling a 9x9 grid with digits from 1 to 9. The puzzle is divided into 3x3 subgrids, and players must complete the grid by ensuring each row, column, and subgrid contains every digit exactly once. Sudoku challenges logical thinking, pattern recognition, and problem-solving skills."
		),
		new ThingsToDo(
			"Bonsai Cultivation",
			"Bonsai cultivation is the art of growing and shaping miniature trees in containers. Bonsai artists meticulously prune, wire, and care for these tiny trees, creating aesthetically pleasing and natural-looking representations of full-sized trees. Bonsai cultivation requires patience, horticultural knowledge, and an appreciation for the beauty of small-scale nature."
		),
		new ThingsToDo(
			"Photogrammetry",
			"Photogrammetry is a technique that involves creating 3D models or maps of objects and environments using photographs. By analyzing the geometry and visual characteristics of overlapping photos, photogrammetry software reconstructs spatial information. Photogrammetry finds applications in surveying, archaeology, and virtual reality, providing a powerful tool for digital reconstruction and documentation."
		),
		new ThingsToDo(
			"Origami",
			"Origami is the traditional Japanese art of paper folding to create intricate and often delicate sculptures. Artists use a single sheet of paper and precise folding techniques to craft animals, flowers, and geometric shapes. Origami is a meditative and expressive art form that enhances focus, patience, and creativity."
		),
		new ThingsToDo(
			"Horseback Riding",
			"Horseback riding involves sitting on a horse's back and controlling its movements. It can be a leisurely trail ride through nature or more structured activities like dressage or show jumping. Horseback riding provides a unique connection with animals, promotes outdoor activity, and offers a blend of relaxation and adventure."
		),
		new ThingsToDo(
			"Yoyoing",
			"Yoyoing is the skillful and rhythmic art of manipulating a yoyo, a spinning toy consisting of two connected discs and an axle. Yoyoers perform various tricks, including throws, catches, and string maneuvers, showcasing creativity and dexterity. Yoyoing can be a playful hobby or a competitive sport, with a community that celebrates innovation and skill development."
		),
		new ThingsToDo(
			"Yodeling",
			"Yodeling is a vocal technique involving rapid changes between chest voice and falsetto, creating a distinctive and echoing melody. Originating in Alpine regions, yodeling has become a unique form of musical expression. Practitioners modulate their voices to produce high and low pitches, often accompanied by traditional folk music. Yodeling is both a cultural tradition and a joyful form of vocal artistry."
		),
		new ThingsToDo(
			"Mosaic Art",
			"Mosaic art involves creating images or patterns by arranging small, colored pieces of glass, tile, or other materials. Artists use adhesive to affix the pieces to a surface, forming a unique and visually appealing composition. Mosaic art can be applied to various surfaces, such as walls, floors, and decorative objects."
		),
		new ThingsToDo(
			"Calligraphy",
			"Calligraphy is the art of beautiful and expressive handwriting. Calligraphers use specialized pens or brushes to create decorative and stylized lettering. This traditional art form allows for creative exploration of different scripts, styles, and flourishes, producing visually striking and personalized written works."
		),
		new ThingsToDo(
			"Lock Picking",
			"Lock picking is a skill involving the manipulation of locks to open them without using the original key. Lock pickers use specialized tools and techniques to manipulate the lock's components and release the mechanism. While often associated with locksmithing, lock picking is also pursued as a hobby and a test of skill."
		),
		new ThingsToDo(
			"Fermentation",
			"Fermentation is the process of using microorganisms to convert sugars into alcohol or organic acids. Enthusiasts engage in fermentation to produce foods and beverages such as beer, wine, sauerkraut, and kimchi. Fermentation combines science and culinary arts, allowing individuals to create unique and flavorful homemade products."
		),
		new ThingsToDo(
			"Leathercraft",
			"Leathercraft is the art of working with leather to create functional and decorative items. Crafters use techniques such as cutting, stamping, and dyeing to shape and embellish leather into products like wallets, belts, and accessories. Leathercraft combines skill with creativity, offering a versatile and satisfying craft for enthusiasts."
		),
		new ThingsToDo(
			"Soapbox Racing",
			"Soapbox racing involves building and racing unpowered, homemade vehicles known as soapbox cars. Participants design and construct the cars, which are then raced downhill in a gravity-powered competition. Soapbox racing combines creativity, engineering, and the thrill of competition in a community event."
		),
		new ThingsToDo(
			"Disc Golf",
			"Disc golf is a sport similar to traditional golf, but players use specialized flying discs instead of balls and clubs. The objective is to complete a course in the fewest throws, aiming for metal baskets as targets. Disc golf combines outdoor recreation, strategy, and skill, providing a fun and accessible activity for all ages."
		),
		new ThingsToDo(
			"Unicycling",
			"Unicycling is a form of balance-driven transportation and recreation involving riding a unicycle. Riders develop balance, coordination, and skill in propelling the unicycle forward. Unicycling can be enjoyed as a casual activity or as a specialized sport, with various disciplines such as freestyle, distance, and mountain unicycling."
		),
		new ThingsToDo(
			"Bookbinding",
			"Bookbinding is the craft of assembling and securing the pages of a book within a cover. Bookbinders use techniques such as sewing, gluing, and folding to create durable and aesthetically pleasing books. This traditional craft allows for artistic expression and preservation of written works in a tangible form."
		),
		new ThingsToDo(
			"Martial Arts",
			"Martial arts encompass a variety of traditional and modern combat practices, emphasizing physical fitness, discipline, and self-defense"
		),
		new ThingsToDo(
			"Lapidary",
			"Lapidary is the art of cutting, shaping, and polishing gemstones and minerals to create jewelry, decorative items, or sculptures. Lapidaries use various tools such as saws, grinders, and polishers to transform raw stones into stunning pieces. This craft allows for the exploration of unique geological materials and the creation of intricate, personalized designs."
		),
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
