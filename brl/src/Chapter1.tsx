// Chapter1.tsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Flashcard from './Flashcard'; // Ensure this path is correct
import './chp1.css';

const allFlashcards = [
  // Add more flashcards as needed
  {
      "term": "Ate",
      "definition": "Phrase used to show admiration or praise for someone who succeeded or performed well in something.",
      "examples": [
        "You ate that quiz up!"
      ]
  },
  {
      "term": "Aura",
      "definition": "The impression you give people. It's reputation, the sensation people have when you walk by. Some individuals have a noticeable amount of this, and others are taken for granted.",
      "examples": [
        "This guy got 100 on the math test, he got aura.",
        "+1000 aura"
      ]
  },
  {
      "term": "Alpha",
      "definition": "Often seen as a natural leader who takes charge in social situations, commands respect, and influences others.",
      "examples": [
        "He’s such an alpha; everyone looks to him for guidance in group projects."
      ],
      "image": "/public/images/alpha.png"
  },
  {
      "term": "Bestie",
      "definition": "Short for 'best friend'.",
      "examples": [
        "Hey bestie."
      ],
      "image": "/public/images/bestie.png"
  },
  {
      "term": "Brainrot",
      "definition": "Somebody who loses touch with the real world and hyper consumes online content.",
      "examples": [],
      "image": "/public/images/brainrot.png"
  },
  {
      "term": "Baked",
      "definition": "When you are stoned out of your mind.",
      "examples": [
        "I’m so baked right now."
      ]
  },
  {
      "term": "Based",
      "definition": "An adjective used to describe someone who is confident, authentic, and unapologetically true to themselves.",
      "examples": [
        "She doesn’t follow trends just to fit in; she wears what she likes, and that’s so based."
      ]
  },
  {
      "term": "Cooked",
      "definition": [
        "Implies someone is in the process of succeeding or showing potential."
      ],
      "examples": [
        "'He’s cooked' means he is done or in trouble.",
        "'I’m cooked' means you are in trouble.",
        "'He cooked' means he did very well.",
        "Let him cook. (let him do some cool stuff)",
        "He’s cooked. (negative)",
        "I’m cooked. (negative)",
        "He cooked. (positive)"
      ],
      "image": "/public/images/cooked.png"
  },
  {
      "term": "Chat",
      "definition": "A term used by streamers to refer to their live audience, which they communicate with through a chat interface.",
      "examples": []
  },
  {
      "term": "Cap",
      "definition": "Saying something is a lie, untrue, or inaccurate.",
      "examples": [
        "That’s cap."
      ],
      "image": "/public/images/cap.png"
  },
  {
      "term": "Doom Scrolling",
      "definition": [
        "When you are addicted to shorts from video content (like TikTok, Instagram Reels, or YouTube Shorts) and watch for hours straight at a time."
      ],
      "examples": [
        "I’ve been doom scrolling TikTok for like 5 hours now!"
      ],
      "image": "/public/images/doomscrolling.png"
  },
  {
      "term": "Edging",
      "definition": "Leading someone on to some sort of response without telling them what it is.",
      "examples": [
        "Stop edging me right now! Give me the answer!"
      ],
      "image": "/public/images/edging.png"
  },
  {
      "term": "Eepy",
      "definition": "Similar to sleepy.",
      "examples": [
        "I feel very eepy."
      ],
      "image": "/public/images/eepy.png"
  },
  {
      "term": "Fanum Tax",
      "definition": [
        "When you take a portion of someone else's food (like the IRS with real money). This term comes from a Twitch streamer, who routinely takes part of the food his roommate and fellow streamer Kai Cenat order for takeout.",
        "Synonym: Father Tax when they take food from their children."
      ],
      "examples": [],
      "image": "/public/images/fanumtax.png"
  },
  {
      "term": "For Real",
      "definition": "Used to emphasize sincerity, truthfulness, or seriousness. Typically abbreviated to 'fr fr' in text.",
      "examples": []
  },
  {
      "term": "Freak",
      "definition": [
        "Obscure sexual interests.",
        "You are into unusual things."
      ],
      "examples": [],
      "image": "/public/images/freak.png"
  },
  {
      "term": "Gyatt",
      "definition": "An inside joke 'between the guys' on TikTok, referring to an attractive girl with a curvy body type, more so referring to their butt.",
      "examples": [
        "Wow, that girl has a gyatt."
      ],
      "image": "/public/images/gyatt.png"
  },
  {
      "term": "Glazing",
      "definition": "When you are meatriding or sucking up to someone. Over-hyping something or someone with too much praise.",
      "examples": [
        "You are glazing him."
      ],
      "image": "/public/images/glazing.png"
  },
  {
      "term": "Gatekeeping",
      "definition": "Withholding information that someone asks of you. Can be used in a teasing or serious manner.",
      "examples": [
        "I’m gatekeeping."
      ],
      "image": "/public/images/gatekeeping.png"
  },
  {
      "term": "Hawk Tuah",
      "definition": "A phrase said by Hailey Welch in a street interview, referring to the sound she made when she spat. It can be considered a sound effect and is often made fun of for its ridiculousness.",
      "examples": [
        "Hawk Tuah Spit on that thang."
      ],
      "image": "/public/images/hawktuah.png"
  },
  {
      "term": "Ipad Kid",
      "definition": "Used to describe a type of behavior similar to that of young children who excessively use this device. This includes drooling, messy eating, and purposely using electronic devices during social gatherings instead of socializing.",
      "examples": [
        "Stop being such an Ipad kid! (person plays on iPad during a meal)"
      ],
      "image": "/public/images/ipadkid.png"
  },
  {
      "term": "Impostor",
      "definition": [
        "A term coined during the period when 'Among Us,' a game where you survive with alien shipmates who attempt to kill the crew, went viral. This term refers to these aliens.",
        "In a social context, it means that something is 'out-of-place' or does not belong. This term can be used in explicit senses."
      ],
      "examples": [
        "Dude, you’re an impostor right now.",
        "You're kind of like an impostor right now. That’s kinda sus."
      ],
      "image": "/public/images/imposter.png"
  },
  {
      "term": "Lock In",
      "definition": "To switch from a slacking attitude to intensely focused.",
      "examples": [
        "I need to lock in and finish my homework."
      ],
      "image": "/public/images/lockin.png"
  },
  {
      "term": "Mewing",
      "definition": "A form of oral posture training purported to improve jaw and facial structure. It involves positioning your tongue towards the roof of your mouth to improve jaw sharpness and create a jawline.",
      "examples": [],
      "image": "/public/images/mewing.png"
  },
  {
      "term": "Mogging",
      "definition": "Means to prove dominance over someone by showing off your superior physical appearance. This is mainly done by bringing your finger across your jawline to show it off, usually while mewing.",
      "examples": [
        "I’m mogging you."
      ],
      "image": "/public/images/mog.png"
  },
  {
      "term": "'___'-maxing",
      "definition": "To maximize the use of something or to focus on the improvement of something. For example, looks-maxing is focusing on the improvement of your looks, specifically your facial features.",
      "examples": []
  },
  {
      "term": "Non-chalant Dreadhead",
      "definition": "Refers to someone who is super chill, relaxed, laid back, and cool.",
      "examples": []
  },
  {
      "term": "Ohio",
      "definition": "A term to describe something weird or bizarre. It can also be used as a negative attribute.",
      "examples": [
        "Skibidi Ohio rizz, which is an insult meaning a weird person who doesn’t have the ability to flirt."
      ],
      "image": "/public/images/ohio.png"
  },
  {
      "term": "Oi oi oi",
      "definition": "A quote from Bakugo from My Hero Academia, typically used to assert dominance or to scold someone, equivalent to 'Hey hey hey!'. It is commonly paired with 'Baaaaaakaaaaaa!', which means 'stupid' or 'idiot.'",
      "examples": [
        "Oi oi oi, Baaaaaaaaakaaaaaaaa!"
      ]
  },
  {
      "term": "Purrr",
      "definition": "An expression of approval, satisfaction, or excitement.",
      "examples": [
        "Friend 1: Yeah, I got 100% on this test. Friend 2: PURRRR."
      ],
      "image": "/public/images/purr.png"
  },
  {
      "term": "Preach",
      "definition": "Used to express strong agreement with someone, especially when they’re speaking truth or voicing an opinion that resonates.",
      "examples": [],
  },
  {
      "term": "Quandale Dingle",
      "definition": "A name associated with a popular internet meme.",
      "examples": []
  },
  {
      "term": "Queen",
      "definition": "A term that a woman will use to call other women.",
      "examples": [
        "Hey queen, how are you?"
      ],
      "image": "/public/images/queen.png"
  },
  {
      "term": "Rizz",
      "definition": [
        "A slang term derived from \"charisma\" that refers to someone's ability to attract or charm others, particularly in romantic or flirty situations.",
        "It’s often used to describe a person's smoothness or skill in flirting and making someone interested in them."
      ],
      "examples": [
        "A “rizzler” is someone who is a master at using rizz and has large amounts of rizz."
      ],
      "image": "/public/images/rizz.png"
  },
  {
      "term": "Sigma",
      "definition": [
          "Often seen as a lone wolf, a sigma male is independent, mysterious, and self-reliant, rejecting traditional social hierarchies. ",
          "Having '___ brainrot' means someone is humorously obsessed with this archetype, exaggerating sigma behaviors.",
           "It suggests they're overly focused on or idolizing the sigma lifestyle, often in a self-deprecating or ironic way."
        ],
      "examples": [],
      "image": "/public/images/sigma.png"
  },
  {
      "term": "Skibidi Toilet",
      "definition": "A popular internet meme involving a humorous take on toilets and their animated interactions.",
      "examples": [],
      "image": "/public/images/skibbidi_toilet.png"
  },
  {
      "term": "Sis",
      "definition": "Short for the word sister. Typically used by other women to call other women.",
      "examples": [
        "Hey sis."
      ]
  },
  {
      "term": "Slay",
      "definition": "A term used to express admiration for someone's confidence, skill, or overall excellence, especially in how they present themselves.",
      "examples": [
        "She slayed that performance! The crowd loved her!",
        "You made the best pasta ever? Slay!"
      ]
  },
  {
      "term": "Tea",
      "definition": [
        "Having a good figure.",
        "Gossip and exciting information."
      ],
      "examples": ["Spill the tea!", "Her body is tea"],
  },
  {
      "term": "Type Shit",
      "definition": "Often used informally in conversations and social media to categorize or describe a specific vibe, behavior, or attitude.",
      "examples": [
        "Yeah, I feel that—always on that grind type shit.",
        "I just want to chill and watch movies, you know, that type shit."
      ]
  },
  {
      "term": "Tweaking",
      "definition": "Acting a little crazy.",
      "examples": [
        "I started tweaking because I didn’t get enough sleep."
      ]
  },
  {
      "term": "Unc",
      "definition": "Usually used to refer to someone who is older than you as a way to poke fun at them. (They are usually barely older than you, less than 5 years older.)",
      "examples": [
        "Ok Unc."
      ]
  },
  {
      "term": "W \"W\"",
      "definition": "Short for the term Win but really means 'this is good stuff.'",
      "examples": [
        "W rizz",
        "W friend"
      ]
  },
  {
      "term": "Yassify",
      "definition": "A term used humorously to describe making someone or something dramatically more fabulous or glamorous, often through exaggerated makeup or style changes.",
      "examples": [
        "My sister yassified me before I went out."
      ],
      "image": "/public/images/yassify.png"
  },
  {
      "term": "You Are My Sunshine",
      "definition": "A phrase expressing deep affection or love for someone or something, often used in a sentimental context.",
      "examples": []
  },
  {
      "term": "Zest/Zesty",
      "definition": "Somebody who looks and acts like they could be homosexual.",
      "examples": [
        "If your friend eats a banana weirdly, you'd say he's 'looking zesty as hell.'"
      ]
  }
];

const Chapter1: React.FC = () => {
    const [selectedFlashcards, setSelectedFlashcards] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const selectRandomFlashcards = () => {
      const shuffled = allFlashcards.sort(() => 0.5 - Math.random());
      setSelectedFlashcards(shuffled.slice(0, 46));
    };

    useEffect(() => {
      selectRandomFlashcards();
    }, []);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFlashcards.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % selectedFlashcards.length);
    };

    const toggleVideo = (video: string) => {
      if (selectedVideo === video) {
        setShowVideo(!showVideo);
      } else {
        setShowVideo(true);
        setSelectedVideo(video);
      }
    };

    return (
      <div>
        <header>
          <nav>
            <Link to="/">
              <img src="/images/new-logo.png" alt="Logo" className="logo-img" />
            </Link>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/learn" activeClassName="active">Learn</NavLink>
              </li>
              <li>
                <NavLink to="/dictionary" activeClassName="active">Dictionary</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <div className="content-container">
          <div className={`flashcard-section ${showVideo ? 'shift-left' : ''}`}>
            <h1>Learning Deck</h1>
            {selectedFlashcards.length > 0 && (
              <Flashcard
                term={selectedFlashcards[currentIndex].term}
                definition={selectedFlashcards[currentIndex].definition}
                image={selectedFlashcards[currentIndex].image}
              />
            )}
            <button onClick={handleNext}>Next Card</button>
            {currentIndex > 0 && (
              <button onClick={handlePrev}>Previous card</button>
            )}
            
            <button onClick={() => toggleVideo("subway")}>
              {showVideo && selectedVideo === "subway" ? "Hide Subway Surfers" : "Subway Surfers"}
            </button>
            <button onClick={() => toggleVideo("aita")}>
              {showVideo && selectedVideo === "aita" ? "Hide AITA" : "AITA"}
            </button>
          </div>

          {showVideo && (
            <div className="video-container">
              <iframe
                width="1200"
                height="900"
                src={
                  selectedVideo === "subway"
                    ? "https://www.youtube.com/embed/AqZ8Twh9NU4" // Embed link for Subway Surfers
                    : "https://www.youtube.com/embed/LWKfmeUmcKY" // Embed link for AITA
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '700px', maxWidth: '900px' }} // Adjust the width as needed
              ></iframe>
            </div>
          )}
        </div>

        <footer className="footer">
          <p>© 2024 BrainRot Lingo. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  export default Chapter1;