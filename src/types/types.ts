export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SuccessNarrativeCardProps {
  title: string;
  description: string;
  slug: string;
  alt: string;
  image: string;
  author: string;
  authorDesignation: string;
  author_profile_new?: {
    url?: string;
  };
  date?: string;
  source?: string;
}

export interface SlidesDataProps {
  id: number;
  image: string;
  title: string;
  description: string;
  slide_link: string;
  button_text: string;
  overlay: boolean;
}

export interface BannerSliderProps {
  slides: SlidesDataProps[];
}

export interface SuccessStoriesNarrativesProps {
  stories: [];
}

export interface SlideProps {
  id?: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded: {
    "wp:featuredmedia": [{ source_url: string }];
  };
  acf: {
    author_profile_new?: {
      url?: string;
    };
    author_name?: string;
    video_link?: string;
    author_designation: string;
  };
}

export interface NarrativesSliderProps {
  slides: SlideProps[];
}

export interface StoryData {
  categories: number[];
  id: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded: {
    "wp:featuredmedia": [{ source_url: string }];
  };
  acf: {
    media_page_screenshot: {
      url?: string;
    };
    author_profile_new?: {
      url?: string;
    };
    author_name: string;
    video_link?: string;
    author_designation: string;
    source?: string;
    media_name?: string;
    media_link?: string;

    inside_banner: string;
  };
  date?: string;

  featured_image_url?: string;
  link: string;
}

export interface SuccessVideoCardProps {
  videoLink: string;
  videoTitle: string;
  videoLength: string;
  thumbnail: string;
}

export interface SearchItemProps {
  id: string;
  acf: {
    inside_banner: string;
    media_name: string;
  };
  title: { rendered: string };
  link: string;
}

export interface LatestAnnouncementProps {
  latestLoading: boolean;
  latestError: boolean;
  latestData: Array<StoryData> | undefined;
}
