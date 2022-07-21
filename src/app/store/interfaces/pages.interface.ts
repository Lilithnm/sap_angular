export interface HomePage { 
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
    linkspotify:string;
    linkgoogle:string;
    link_apple:string;
    final_section_title:string;
    final_section_text:string;
    final_section_image_footer:string;
    link_facebook:string;
    link_instagram:string;
    link_linkedin:string;
    link_skype:string;
};
