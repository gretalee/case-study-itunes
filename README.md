# Frontend case-study

### done by Hendrike

The challenge was to implement a music albums list served by the iTunes API. The detailled requirements are described below. I didn't manage to build all features. I am new to angular and so I had to research a lot about anguluar's specific syntax and concepts. This is my result:

### Implemented features

- Project setup, github
- Routing
- Albums list
- Search term input
- Sorting
- Detail view (reloadable)
- Services to hold the state including localStorage

### Not yet implemented

- Full responsive layout (could be nicer)
- Tests (sorry, time was really over)
- Track list in detail view (I couldn't find the right API)
- Infinite Scrolling

### Used browser:

Chrome Version 120

### -> Some comment about infinite scrolling

Infinite scrolling is hard to set up with the iTunes API. It
has no sorting option (there is a sort param mentioned, but it
seams to have only one single sort option). Without API driven
sorting, you can only request all search results and sort them
locally (what I have done). But that does not really make sense.

Generally there are different approaches for infinite scrolling.
The simplest one is to check, when the last item (or one more below)
comes into view and than request the next items and
concat them to the list. But this way causes performance
issues, when the list becomes too big. There are better approaches, like Tanstack's
Virtualizing UI (unfortunately not available for angular). It requests
the result in chunks. When the user scrolls down, it loads the next bunch of items,
appends it at the end and at the same time, it removes the top chunk.
All that is highly complicate, because the user should not see what happens in
the background. On of the bigger problems is to prevent flickering when
scrollcontainer's size is changing.

---

---

---

# Zeal's Requirements

## Preface

- Thank you for taking the time to implement this case study.
- If you have questions, please reach out to our hiring manager. She will forward your questions to a developer.
- Please refrain from making this case study or your implementation publicly available, eg. on your GitHub account, or a blog.

## Features

- Create a microsite that displays music albums, and a detail view for each album
- Consume the iTunes API to fetch a list of albums based on a search term:
  - endpoint: https://itunes.apple.com/search?term=Beatles&entity=album
  - docs at [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
  - Your layout should be responsive. Lay out items in a grid for desktop (see `itunes-desktop.png`), and in a list for smaller displays (see `itunes-mobile.png`).
  - The list of albums should be sortable.
  - Limit the amount of items loaded initially; load more as needed (infinite scrolling)
- When clicking on an album, its details should be displayed.
  - In the details view, at least cover, title, and track list should be included. Feel free to add additional information as you like.
  - When you are in the details view of an album and hit "refresh" you should see the same details as before.

## Prerequisites

- Create a local git repository and include your commit history when submitting the case study (`.git` directory)
- Use Angular to implement the site.
- Make sure to prefer framework provided APIs, features, unlesss you have a good reason not to.
- Apply common patterns to implement your solution, eg. use Promises and/or reactive APIs like RxJS, Signals.
- Add a `README`-file to your project, and include these notes as well as your own.
- Please include which browser you have used for development

## Please consider

- mobile first
- code structure, clean code
- design, transitions, animation, web fonts
- unit tests (where it makes sense)
