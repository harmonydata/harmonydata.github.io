import requests
from datetime import datetime

# GitHub repository details
GITHUB_REPO = "harmonydata/harmony"
GITHUB_TOKEN = "GITHUB_TOKEN"  # Replace with your GitHub token

# Fetch releases from GitHub API
def fetch_releases():
    url = f"https://api.github.com/repos/{GITHUB_REPO}/releases"
    headers = {"Authorization": f"token {GITHUB_TOKEN}"}

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    return response.json()

# Generate Markdown content
def generate_markdown(releases):
    markdown = f"# Harmony Releases\n\n"

    for release in releases:
        published_date = datetime.strptime(release['published_at'], "%Y-%m-%dT%H:%M:%SZ").strftime("%d %B %Y")
        markdown += f"## {release['name']} ({published_date})\n"
        markdown += f"**Tag:** {release['tag_name']}\n\n"
        markdown += f"{release['body']}\n\n"
        markdown += f"[View on GitHub]({release['html_url']})\n\n"
        markdown += "---\n\n"

    return markdown

# Save the Markdown to a file
def save_markdown_file(content, filename="content/en/releases.md"):
    with open(filename, "w", encoding="utf-8") as file:
        file.write(content)

if __name__ == "__main__":
    try:
        print("Fetching releases...")
        releases = fetch_releases()
        print(f"Fetched {len(releases)} releases.")

        print("Generating Markdown...")
        markdown_content = generate_markdown(releases)

        print("Saving Markdown to file...")
        save_markdown_file(markdown_content)

        print("Releases page created successfully: releases.md")
    except Exception as e:
        print(f"Error: {e}")
