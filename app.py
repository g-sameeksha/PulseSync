from flask import Flask, render_template, request, redirect, url_for
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
from dotenv import load_dotenv



app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Spotify API credentials
sp_oauth = SpotifyOAuth(
    client_id=os.getenv("SPOTIPY_CLIENT_ID"),
    client_secret=os.getenv("SPOTIPY_CLIENT_SECRET"),
    redirect_uri=os.getenv("SPOTIPY_REDIRECT_URI"),
    scope="user-library-read"
)


sp = spotipy.Spotify(auth_manager=sp_oauth)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        query = request.form['query']
        search_type = request.form['search_type']

        if search_type == 'track':
            results = sp.search(q=f"track:{query}", type='track', limit=50)
            songs = results['tracks']['items']
            return render_template('index.html', songs=songs, search_type=search_type)

        elif search_type == 'artist':
            artist_results = sp.search(q=f"artist:{query}", type='artist', limit=1)
            if artist_results['artists']['items']:
                artist = artist_results['artists']['items'][0]

                return redirect(url_for('artist_top_tracks', artist_id=artist['id']))
            else:
                message =f"No song found matching the artist name - {query}"

                return render_template('index.html', songs=[], message=message,search_type=search_type)
        
    return render_template('index.html')


@app.route('/artist/<artist_id>', methods=['GET'])
def artist_top_tracks(artist_id):
    artist = sp.artist(artist_id)
    top_tracks = sp.artist_top_tracks(artist_id, country='US')['tracks']
    return render_template('artist.html', artist=artist, top_tracks=top_tracks)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/creator')
def creator():
    return render_template('creator.html')


@app.route('/meditate')
def relaxation():
    return render_template('meditate.html')





@app.route("/hello", methods=["GET"])
def home():
    # Serve the main HTML page
    return render_template("temp.html")



if __name__ == '__main__':

   
    app.run(debug=True)



# new_releases(country=None, limit=20, offset=0)
# Get a list of new album releases featured in Spotify
#
# Parameters:
# country - An ISO 3166-1 alpha-2 country code.
#
# limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50
#
# offset - The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items