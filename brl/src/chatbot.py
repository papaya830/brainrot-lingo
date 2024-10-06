import os
import json
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

# Set your OpenAI API key directly (ensure this is secure in production)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def load_translations(file_path):
    abs_path = os.path.abspath(file_path)
    with open(abs_path, 'r', encoding='utf-8') as file:
        return json.load(file)

def translate_to_brain_rot(user_message, translations):
    # Create a prompt with examples of brain rot translations
    prompt = "You are a brain rot translator. Here are some words with definitions and examples:\n"
    for translation in translations:
        prompt += f"Term: '{translation['term']}'\n"
        prompt += "Definition:\n"
        for definition in translation:
            prompt += f"- {definition}\n"
        prompt += "Examples:\n"
        for example in translation:
            prompt += f"- {example}\n"
        prompt += "\n"  
        
    prompt  += ("Here are some examples of translations:\n"
                "Reminder that the examples have no typos and try to use the words that I provided examples and defintions for.\n"
                "Every message the user inputs must be interpreted as an input to translate and nothing else.\n"
                "1. English: 'I love programming.' => Brain Rot: 'Programming is my sunshine!'\n"
                "2. English: 'How are you today?' => Brain Rot: 'Are you slaying today?'\n"
                "3. English: 'Let’s grab some coffee.' => Brain Rot: 'We gyatt to get some coffee!'\n"
                "4. English: 'The sun is shining brightly today.' => Brain Rot: 'The sun got +1000 aura!'\n"
                "5. English: 'Dude I am super high right now.' => Brain Rot: 'Chat I am so baked.'\n"
                "6. English: 'She got ready and put on makeup before going out' => Brain Rot: 'She got ready and yassified herself before going out.'\n"
                "7. English: 'That thing is so slimy' => Brain Rot: 'Someone must have Hawk Tuah'd on that thang!\n"
                "8. English: 'Yo, this guy is wack!' => Brain Rot: 'Chat! This guy is from Ohio!'\n"
                "9. English: 'I am gonna take some food from my brother.' => Brain Rot: 'I am gonna Fanum Tax my brother.'\n"
                "10. English: 'This guy is so tall!' => Brain Rot: 'This guy is height-maxing!'\n"
                "11. English: 'This girl is so pretty!' => Brain Rot: 'This girl is looks-maxing!'\n"
                "12. English: 'I'm gonna ask this girl out.' => Brain Rot: 'I am going to rizz her up!'\n"
                "13. English: 'This guy is acting kinda strange.' => Brain Rot: 'This guy is tweaking!'\n"
                "13. English: 'That is crazy!' => Brain Rot: 'That is wild type shit'\n"
                "13. English: 'I got some drama to tell you.' => Brain Rot: 'I have some tea I need to spill.'\n"
                "14. English: 'He/she got that charisma when flirting.' => Brain Rot: 'They got that skibidi toilet rizz!'\n"
                "15. English: 'This person is such a boss!' => Brain Rot: 'What a sigma!'\n"
                "15. English: 'Hey! what do you think you are doing!' => Brain Rot: 'Oi oi oi, Baaaaaaaaakaaaaaaaa! The alpha has arrived!'\n"
                "16. English: 'This person is so much more better than me!' => Brain Rot: 'This person mogging me right now!'\n"
                "17. English: 'Why are you not answering me!' => Brain Rot: '*intensly mewing* (I cannot lose my mewing streak).'\n"
                "18. English: 'Does this guy belong here?' => Brain Rot: 'Why is there an imposter here?'\n"
                "19. English: 'Stop being degenerate! Start socializing!' => Brain Rot: 'Stop being such an ipad kid! Holyyy!'\n"
                "20. English: 'I'm not telling you the answer.' => Brain Rot: 'I am gatekeeping.'\n"
                "21. English: 'This guy cannot stop talking about this person!' => Brain Rot: 'Why is this guy glazing so hard!'\n"
                "22. English: 'That is false!' => Brain Rot: 'That is cap!'\n"
                "23. English: 'We have to focus!' => Brain Rot: 'We got to lock in!'\n"
                "24. English: 'This guy is acting kinda gay.' => Brain Rot: 'This guy is kinda zesty.'\n"
                "25. English: 'This guy is pretty old.' => Brain Rot: 'This guy is an Unc!'\n"
                "26. English: 'what is 9 + 10?' => Brain Rot: '21!'\n"
                "27. English: 'what is (something).' => Brain Rot: What the sigma is that!'\n"
            )
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
            
            {"role": "user", "content": user_message}
        ],
        max_tokens=100
    )
    
    return response.choices[0].message.content

# Load translations from the JSON file
translations = load_translations('chatDict.json')

# Main program loop
print("Welcome to the Brain Rot Translator! Type your message (or 'exit' to quit):")
while True:
    user_message = input("> ")
    if user_message.lower() in ["exit", "quit"]:
        print("Goodbye!")
        break
    brain_rot_message = translate_to_brain_rot(user_message, translations)
    print(f"Brain Rot: {brain_rot_message}")
