import os
import json
from openai import OpenAI

# Set your OpenAI API key directly (ensure this is secure in production)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def load_translations(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def translate_to_brain_rot(user_message, translations):
    # Create a prompt with examples of brain rot translations
    prompt = "You are a brain rot translator. Here are some examples of translations:\n"
    
    for translation in translations['translations']:
        prompt += f"English: '{translation['english']}' => Brain Rot: '{translation['brain_rot']}'\n"
        prompt  += ("Here are some examples of translations:\n"
                "(Reminder that the examples have no typos)\n"
                "1. English: 'I love programming.' => Brain Rot: 'Programming is my sunshine!'\n"
                "2. English: 'How are you today?' => Brain Rot: 'Are you slaying today?'\n"
                "3. English: 'Let’s grab some coffee.' => Brain Rot: 'We gyatt to get some coffee!'\n"
                "4. English: 'The sun is shining brightly today.' => Brain Rot: 'The sun got +1000 aura!'\n"
                "5. English: 'Dude I am super high right now.' => Brain Rot: 'Chat I am so baked.'\n"
            )
    
    prompt += f"Translate the following message into brain rot: \"{user_message}\""
    
    response = client.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt}
        ],
        max_tokens=100
    )
    
    return response['choices'][0]['message']['content']

# Load translations from the JSON file
translations = load_translations('definitions.json')

# Main program loop
print("Welcome to the Brain Rot Translator! Type your message (or 'exit' to quit):")
while True:
    user_message = input("> ")
    if user_message.lower() in ["exit", "quit"]:
        print("Goodbye!")
        break
    brain_rot_message = translate_to_brain_rot(user_message, translations)
    print(f"Brain Rot: {brain_rot_message}")
