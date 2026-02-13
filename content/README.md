# Content Files

This directory contains the content data for the DIAG Lab website. All content is stored in JSON format for easy editing and direct import into the React application.

## Files

### `keywords.json`
Contains the centralized list of all available keywords used across the website.

**Format:**
```json
{
  "categories": {
    "Research Areas": ["HCI", "Human-AI Interaction", ...],
    "Methods": ["Machine Learning", "Deep Learning", ...],
    "Domains": ["ESL Learning", "Emotion Recognition", ...]
  },
  "all": ["HCI", "Human-AI Interaction", "Machine Learning", ...]
}
```

**Purpose:**
- Ensures consistent keyword usage across Members, Publications, and Research sections
- Provides a single source of truth for all keywords
- Enables keyword validation and filtering

**See the Keywords System section below for detailed usage instructions.**

### `news.json`
Contains all news items displayed on the News page and the Latest Updates widget on the homepage.

**Format:**
```json
[
  {
    "id": 1,
    "date": "2024.12",
    "title": "News Title",
    "text": "News description text.",
    "category": "Research"
  }
]
```

**Fields:**
- `id`: Unique identifier (number)
- `date`: Date string in format "YYYY.MM"
- `title`: News headline
- `text`: News description
- `category`: Category (e.g., "Research", "Achievement", "Project", "Members", "Event")

### `members.json`
Contains team member information and alumni.

**Format:**
```json
{
  "team": [
    {
      "role": "Role Name",
      "people": [
        {
          "name": "Member Name",
          "title": "Position Title",
          "bio": "Short bio text.",
          "image": "/members_image/filename.jpg",
          "homepage": "https://example.com"
        }
      ]
    }
  ],
  "alumni": [
    {
      "name": "Alumni Name",
      "position": "Position",
      "affiliation": "Affiliation",
      "duration": "Duration",
      "homepage": "https://example.com"
    }
  ]
}
```

**Fields:**
- `name`: Member name (required)
- `title`: Position title (required)
- `interest`: Research interest description (optional, displayed below member name on Members page, supports line breaks with `\n`)
- `image`: Path to profile image (required)
- `homepage`: Personal homepage URL (optional, use empty string `""` if none)
- `keywords`: Array of research keywords as hashtags (optional, e.g., `["HCI", "Crowdsourcing", "Content Moderation"]`). Keywords appear as clickable hashtags that navigate to the Publications page with that keyword filter applied

**Image Paths:**
- Member images should be placed in the `public/members_image/` folder
- Use paths like `/members_image/filename.jpg` (starting with `/` to reference files in the `public` folder)
- Available images in the folder:
  - `ahyeon_profile_picture.jpg`
  - `Anastasia_profile_picture.jpg`
  - `chanwoo_profile_picture.jpg`
  - `dokyun.jpg`
  - `haeun_profile_picture.jpg`
  - `jaeyeong_profile_picture.jpg`
  - `jean_profile2023.jpeg`
  - `kimberly_profile_picture.jpg`
  - `SangEun_profile_picture.jpg`
  - `taehun_profile_picture.jpg`
  - `yeonsun_profile_picture.jpg`
  - `yoojin_profile_picture.jpg`

### `publications.json`
Contains publications grouped by year, with separate sections for main publications and posters/demos/workshops.

**Format:**
```json
{
  "publications": [
    {
      "year": 2024,
      "items": [
        {
          "title": "Publication Title",
          "authors": "Author, A., & Author, B.",
          "venue": "Venue Name",
          "link": "URL to publication",
          "pdf": "URL to PDF",
          "bibtex": "URL to BibTeX",
          "keywords": ["Crowdsourcing", "Content Moderation", "Mental Health"],
          "selected": true
        }
      ]
    }
  ],
  "postersDemosWorkshops": [
    {
      "year": 2024,
      "items": [
        {
          "title": "Poster Title",
          "authors": "Author, A.",
          "venue": "CHI 2024",
          "type": "Poster",
          "keywords": ["Education", "Learning Systems"]
        }
      ]
    }
  ]
}
```

**Structure:**
- `publications`: Array of year groups containing main refereed conference and journal papers
- `postersDemosWorkshops`: Array of year groups containing posters, demos, and workshop papers

**Fields for publications:**
- `title`: Publication title (required)
- `authors`: Author list (required)
- `venue`: Conference/journal name (required)
- `link`: URL to publication page (optional, use `"#"` if none)
- `pdf`: Path to PDF file in `public/publications_pdf/` (optional, use `"#"` if none)
- `bibtex`: URL to BibTeX entry (optional, use `"#"` if none)
- `note`: Additional note (optional, e.g., "* Equal contribution")
- `type`: Publication type (optional, e.g., "Poster", "Workshop")
- `keywords`: Array of research keywords for filtering (optional, e.g., `["Crowdsourcing", "Content Moderation", "Mental Health"]`)
- `selected`: Boolean flag (optional, set to `true` to include in the "Selected Publications" section on the homepage)

**Fields for postersDemosWorkshops:**
- `title`: Publication title (required)
- `authors`: Author list (required)
- `venue`: Conference/journal name (required)
- `type`: Publication type (required, e.g., "Poster", "Demo", "Workshop")
- `location`: Location of the event (optional, e.g., "New York, NY")
- `keywords`: Array of research keywords for filtering (optional, e.g., `["Education", "Learning Systems"]`)

**Selected Publications Feature:**
- Publications with `"selected": true` appear in the "Selected Publications" section on the homepage
- Only publications from the main `publications` array can be marked as selected
- The selected publications section displays without year headings and without keyword hashtags

### `courses.json`
Contains course information displayed on the Courses page.

**Format:**
```json
[
  {
    "title": "Course Title",
    "provider": "@Yonsei UIC",
    "description": "Course description text."
  }
]
```

**Fields:**
- `title`: Course name (required)
- `provider`: Course provider/institution (optional, e.g., "@Yonsei UIC")
- `description`: Course description text (required)

## Editing

Simply edit the JSON files directly. The changes will be reflected in the website after:
- Saving the file (in development mode with hot reload)
- Rebuilding the site (for production)

## Adding New Content

1. **News**: Add a new object to the `news.json` array with a unique `id`
2. **Members**: Add to the appropriate `team` role array or `alumni` array
3. **Publications**: 
   - For main publications: Add to the appropriate year's `items` array in `publications`, or create a new year object
   - For posters/demos/workshops: Add to the appropriate year's `items` array in `postersDemosWorkshops`, or create a new year object
   - To feature a publication on the homepage: Add `"selected": true` to the publication object
4. **Courses**: Add a new object to the `courses.json` array with `title`, `description`, and optional `provider`

## Keywords System

Keywords are used throughout the website to categorize research interests and enable filtering. They appear as hashtags on member profiles, research area cards, and publications.

### Centralized Keywords Management

**All keywords are managed centrally in `keywords.json`** to ensure consistency across Members, Publications, and Research sections.

The `keywords.json` file contains:
- `categories`: Keywords organized by category (Research Areas, Methods, Domains)
- `all`: A flat list of all available keywords (used for validation and filtering)

**Important**: When adding keywords to members, publications, or research areas, **always use keywords from the centralized list** in `keywords.json`. This ensures:
- Consistent terminology across the site
- Proper filtering functionality
- Easy keyword management in one place

### Adding Keywords to Members

In `members.json`, add a `keywords` array to each member object:

```json
{
  "name": "Member Name",
  "title": "Position",
  "keywords": ["HCI", "Crowdsourcing", "Content Moderation"]
}
```

**Guidelines:**
- **Always use keywords from `keywords.json`** - check the `all` array for available keywords
- Use 2-6 keywords per member
- Keep keywords concise (1-3 words)
- Use exact spelling and capitalization as defined in `keywords.json`
- If you need a new keyword, add it to `keywords.json` first, then use it in member profiles

### Adding Keywords to Publications

In `publications.json`, add a `keywords` array to publication items:

```json
{
  "title": "Paper Title",
  "authors": "Author, A.",
  "venue": "CHI 2024",
  "keywords": ["Crowdsourcing", "Content Moderation", "Mental Health"]
}
```

**Guidelines:**
- **Always use keywords from `keywords.json`** - check the `all` array for available keywords
- Use 2-5 keywords per publication
- Match keywords to the main research themes
- Use exact spelling and capitalization as defined in `keywords.json`
- Keywords enable filtering on the Publications page via checkboxes
- If you need a new keyword, add it to `keywords.json` first, then use it in publications

### Adding Keywords to Research Areas

Research area keywords are defined in `src/App.jsx` in the `researchAreas` array:

```javascript
{
  id: "project-0",
  title: "AI-Augmented Education & Learning",
  keywords: ["Education", "Learning Systems", "ESL Learning", "Human-AI Interaction"]
}
```

**Guidelines:**
- **Always use keywords from `keywords.json`** - check the `all` array for available keywords
- Use 3-5 keywords per research area
- Keywords should reflect the main themes of that research direction
- Use exact spelling and capitalization as defined in `keywords.json`
- These keywords appear next to the icon on research cards
- If you need a new keyword, add it to `keywords.json` first, then use it in research areas

### Managing the Centralized Keywords List

To add a new keyword to the system:

1. Open `content/keywords.json`
2. Add the keyword to the appropriate category in `categories` (or create a new category)
3. Add the keyword to the `all` array (this is the master list used for validation)
4. Use the exact same keyword (spelling and capitalization) in members, publications, or research areas

**Example:**
```json
{
  "categories": {
    "Research Areas": [
      "HCI",
      "Human-AI Interaction",
      "Your New Keyword"
    ]
  },
  "all": [
    "HCI",
    "Human-AI Interaction",
    "Your New Keyword"
  ]
}
```

### Keyword Best Practices

1. **Use Centralized List**: Always reference `keywords.json` when adding keywords - never create new keywords on the fly
2. **Exact Match**: Use exact spelling and capitalization as defined in `keywords.json`
3. **Consistency**: The centralized system ensures the same keyword terms are used across all sections
4. **Specificity**: Prefer specific terms (e.g., "Content Moderation") over generic ones (e.g., "Research")
5. **Relevance**: Only include keywords that accurately represent the work
6. **Filtering**: Keywords in publications enable the checkbox filter on the Publications page - ensure publications have relevant keywords for discoverability

### Example Keywords

Common keywords used in the lab:
- **Research Areas**: "HCI", "Human-AI Interaction", "Crowdsourcing", "Content Moderation", "Education", "Learning Systems", "Social Media", "Mental Health", "Healthcare", "Wellbeing"
- **Methods**: "Machine Learning", "Deep Learning", "Human-in-the-Loop", "User Research", "Qualitative Analysis"
- **Domains**: "ESL Learning", "Emotion Recognition", "Automotive Interfaces", "Culture"

## Notes

- JSON files must be valid JSON (proper quotes, commas, brackets)
- Member images should be placed in `public/members_image/` folder and referenced as `/members_image/filename.jpg`
- Images in the `public` folder are served from the root URL path
- `homepage` field is optional - if provided, the member's name will be a clickable link; use empty string `""` if no homepage
- `keywords` field is optional - if not provided, no hashtags will be displayed
- All other fields are required for proper display

