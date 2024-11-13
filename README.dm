Story Telling App
Overview
The Story Telling App is an interactive web application that generates personalized short stories based on user-selected genres, tones, and user-created characters. Built with Next.js and React, the app leverages OpenAI's GPT models to craft unique narratives, providing an engaging and customizable storytelling experience.

Features
Genre Selection: Choose from genres like Fantasy 🧙, Mystery 🕵️, Romance 💑, and Sci-Fi 🚀 to set the theme of your story.
Tone Selection: Select the tone of the story, such as Happy 😊, Sad 😢, Sarcastic 😏, or Funny 😂, to influence the mood.
Custom Characters:
Add Characters: Create characters by specifying their name, description, and personality traits.
Edit & Delete: Modify or remove characters as desired.
AI Model Selection: Test different OpenAI models (GPT-3.5 Turbo, GPT-3.5 Turbo 16k, GPT-4) to generate stories and compare outputs.
Character Role Summaries: After generating a story, receive summaries of each character's role within the narrative.
Responsive Design: Enjoy a user-friendly interface that's accessible on various devices.
Installation
Prerequisites
Node.js (version 14 or above)
npm or yarn
An OpenAI API Key
Steps
Clone the Repository

git clone https://github.com/RidwanOseni/Team9EncodeAIBootcamp2024_week3_story-telling-app.git

Install Dependencies

Using npm:

npm install
Or using yarn:

yarn install
Set Up Environment Variables

Create a .env.local file in the root directory and add your OpenAI API key:

OPENAI_API_KEY=your-openai-api-key
Run the Development Server

Using npm:

npm run dev
Or using yarn:

yarn dev
Open http://localhost:3000 in your browser to view the app.

Usage
Select Genre and Tone

On the homepage, choose your preferred Genre and Tone by clicking on the options available.
Add Custom Characters

Navigate to the Characters section.
Click "Add Character" to create a new character.
Fill in the Name, Description, and Personality fields.
Repeat to add more characters as needed.
Use the Edit and Delete buttons to manage your characters.
Select AI Model

In the Select Model section, choose from:
GPT-3.5 Turbo
GPT-3.5 Turbo (16k)
GPT-4
This selection allows you to experiment with different models and observe variations in story generation.
Generate Story

Click the "Generate Story" button.
Wait for the story to be generated. The loading indicator will show the progress.
The generated story will appear on the page, along with summaries of each character's role.
Review and Enjoy

Read the story and the character summaries.
Feel free to modify your selections or characters and generate a new story.
Testing Different Models
Model Capabilities

GPT-3.5 Turbo: Quick responses, suitable for most stories.
GPT-3.5 Turbo (16k): Larger context window for more complex narratives.
GPT-4: Advanced reasoning and creativity, may produce more nuanced stories.
Experimentation

Test how each model incorporates your custom characters.
Observe differences in storytelling style and character development.
Note how the context window size affects the story's coherence and detail.
Notes
API Key Security

Ensure your OpenAI API key is kept secure and not exposed publicly.
Do not commit .env.local or any files containing your API key to version control.
Limitations

The app depends on the availability and performance of OpenAI's API.
Some models (like GPT-4) may have usage limitations or require special access.
Error Handling

If the story generation fails, check your internet connection and API key validity.
Review the console for any error messages.
Customization

You can extend the app by adding more genres, tones, or enhancing the character creation process.
Styling adjustments can be made in the CSS files to match your preferences.
Future Improvements
User Authentication

Implement login functionality to save and retrieve user stories and characters.
Story History

Allow users to view previously generated stories.
Enhanced Character Interaction

Enable relationships between characters and more detailed attributes.
Multilingual Support

Allow story generation in different languages.
Contributing
Contributions are welcome! If you'd like to improve this project:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes with clear messages.
Open a pull request describing your changes.
Please ensure your contributions align with the project's goals and maintain code quality.

License
This project is licensed under the MIT License.

Acknowledgments
OpenAI for providing the powerful GPT models.
Next.js and React communities for their excellent frameworks and support.