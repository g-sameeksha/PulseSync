# PulseSync

Welcome to **PulseSync**, the ultimate destination for mindfulness and music!

## About the App
**PulseSync** is designed to help you unwind and recharge by combining scientifically-backed breathing techniques and the power of Spotify music. Whether you're looking to relax, reduce stress, or simply enjoy your favorite tunes, this app provides a seamless and calming experience.

### Features
- **Guided Breathing Techniques**: Includes the popular 4-7-8 method, visualized with calming animations to promote relaxation and reduce stress.
- **Spotify Integration**: Explore and play soothing playlists, calming tracks, or your favorite artists using the Spotipy API.
- **Intuitive Interface**: A user-friendly design built for effortless navigation and a harmonious experience.

## Built With
- **Flask**: For backend development and server-side functionality.
- **Spotipy**: For integrating Spotify's music streaming capabilities.
- **HTML, CSS, and JavaScript**: For creating a responsive and elegant frontend.

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/g-sameeksha/PulseSync.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PulseSync
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up your Spotify developer account and create an application to obtain the `client_id` and `client_secret`.
5. Configure the environment variables for Spotify integration:
   ```bash
   export SPOTIPY_CLIENT_ID='your_client_id'
   export SPOTIPY_CLIENT_SECRET='your_client_secret'
   ```
6. Run the application:
   ```bash
   flask run
   ```
7. Access the app in your browser at `http://127.0.0.1:5000`.

## Breathing Techniques
- **4-7-8 Method**: Breathe in for 4 seconds, hold your breath for 7 seconds, and exhale slowly for 8 seconds. The animations guide you through this process for a calming experience.


## Contributing
Feel free to contribute to this project by forking the repository and creating a pull request. For major changes, please open an issue to discuss your ideas.


## Acknowledgements
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
- Inspiration from mindfulness techniques and relaxing music.

Take a deep breath, press play, and let **PulseSync** transform your moments into serenity!
