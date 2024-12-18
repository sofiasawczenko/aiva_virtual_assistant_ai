# AIVA - Chrome Extension

![image](https://github.com/user-attachments/assets/90b2d8a9-e1e1-4701-ac98-be51b17e94bd)

Pitch Deck and Solution Design in Portuguese: https://suporteaiva.my.canva.site/assistenteaiva

AIVA (Advanced Virtual Assistant) is a Chrome extension that leverages **Artificial Intelligence** to enhance the user experience by offering personalized assistance directly in the browser. This extension connects with the **Google Gemini API** to generate responses, provide insights, and assist with tasks in real-time.

## Technologies Used

- **React.js**: A JavaScript library for building the user interface of the extension.
- **Google Gemini API**: Utilized for running the AI functionalities within the extension.
- **Axios**: Used for making HTTP requests to the Google Gemini API.
- **Styled Components**: For styling the user interface with dynamic, reusable styles.
- **Bootstrap**: For creating responsive layouts and UI components.

## Architecture

![image](https://github.com/user-attachments/assets/ea7337d5-ca40-46cc-bc1c-930f988309e7)

## Features

- **AI-powered Assistance**: Direct interaction with a powerful AI model through the extension.
- **Real-time Communication**: Instant responses and insights based on user queries.
- **Easy Integration**: Integrates seamlessly into the Chrome browser, offering AI assistance at the click of a button.
- **Responsive Design**: Optimized for all screen sizes, ensuring a smooth experience across devices.

## How to Install

### 1. Download or Clone the Repository

First, ensure you have the extension files locally on your machine. You can either clone the repository from GitHub or download the ZIP file and extract it:

```bash
git clone https://github.com/your-username/AIVA-chrome-extension.git
cd AIVA-chrome-extension
```

### 2. Install Dependencies
Before using the extension, make sure to install the necessary dependencies. This project requires Node.js and Axios. To install the dependencies, run:

```bash
npm install
```

###  3. Build the Project
You will need to bundle the project into a format that Chrome can use. Depending on your setup, you can use a bundler like webpack to create the necessary build files. If you've already set up the project for production, you should have the build folder ready to go.

```bash
npm run build
```

### 4. Enable Developer Mode in Chrome
To load the extension into your Chrome browser, you need to enable Developer Mode:

- Open Google Chrome.
- Go to the Extensions page by clicking the three dots menu at the top-right corner of Chrome and selecting More tools > Extensions.
- On the Extensions page, enable Developer mode in the top-right corner.
- 
### 5. Load the Extension Locally
Once Developer Mode is enabled, you can load the extension directly from your local files:

- On the Extensions page, click on the Load unpacked button.
- Select the build folder from your project directory (or the directory containing the extension files).
- The extension should now appear in your Chrome extensions list.
- 
### 6. Interact with AIVA
Now that AIVA is loaded into Chrome, you should see the extension icon in the top-right corner of your browser.

- Click on the AIVA icon to open the AI-powered assistant.
- Enter your queries or tasks, and AIVA will respond in real-time using the Google Gemini API.
