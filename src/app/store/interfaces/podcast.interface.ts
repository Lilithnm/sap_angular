export interface Podcast { 
    modified: string;
    title:Rendered;
    content:Rendered;
    acf:PodcastAcf;
    featured_media:Object;
};

interface Rendered{
    rendered: string;
};

interface PodcastAcf{
    season:number;
    category:string;
    posted_date: string;
    episode_number: number;
};
