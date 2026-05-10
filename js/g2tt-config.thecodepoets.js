// Config - thecodepoets.net deploy
// Set this to the full URL of your tt-rss install (no trailing slash).
// When g2ttrss is served from a subdomain (e.g. mobile.thecodepoets.net),
// this must be an absolute URL -- a relative path will not work cross-origin.
global_ttrssUrl = "https://thecodepoets.net/rss";

// Preferences
pref_Feed = '-4'; // Default: all items
pref_ViewMode = 'unread'; // Default: unread articles only
// Not used -- pref_TextType = 'content'; // Default: full articles
pref_OrderBy = 'date_reverse'; // Default: oldest first
pref_FeedSort = '1'; // Sort feeds A-Z
pref_StartInCat = '1'; // Start showing feeds
//added so user can change feed limit easily.
pref_Feed_limit = 15; // Load 15 items at a time
