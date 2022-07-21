export interface BlogPost { 
    modified: string;
    title:Rendered;
    content:Rendered;
    acf:Acf;
    featured_media:Object;
};

interface Rendered{
    rendered: string;
};

interface Acf{
    author:number;
    producer:string;
    posted_date: string;
};
