// https://rss2json.com/

export interface Rss {
    status?: string;
    feed?: Feed;
    items?: FeedItem[];
}

export interface Feed {
    author?: string;
    description?: string;
    image?: string;
    link?: string;
    title?: string;
    url?: string;
}

export interface FeedItem {
    author?: string;
    categories?: string[];
    title?: string;
    content?: string;
    description?: string;
    link?: string;
    guid?: string;
    pubDate?: string;
    thumbnail?: string;
}


