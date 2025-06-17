export const fetchSuccessStoriesNarratives = async (
  pageSize = 10,
  page = 1
) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=12&production[]=77&status[]=publish&per_page=${pageSize}&page=${page}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const stories = await response.json();
    return stories;
  } catch (error) {
    throw new Error(`Failed to fetch the success stories: ${error}`);
  }
};

export const fetchSuccessStoriesVideos = async (pageSize = 6, page = 1) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=128&production[]=77&status[]=publish&per_page=${pageSize}&page=${page}&orderby=date&order=asc`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const videos = await response.json();
    return videos;
  } catch (error) {
    throw new Error(`Failed to fetch the success videos: ${error}`);
  }
};

export const fetchSuccessStoriesAndVideos = async () => {
  try {
    const [stories, videos] = await Promise.all([
      fetchSuccessStoriesNarratives(),
      fetchSuccessStoriesVideos(),
    ]);

    return { stories, videos };
  } catch (error) {
    throw new Error(`Failed to fetch success stories and videos ${error}`);
  }
};

export const fetchSuccessStoryBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=12&production[]=77&status[]=publish&slug=${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const stories = await response.json();

    // WordPress returns an array even if there's only one match
    if (stories.length === 0) {
      throw new Error(`No post found for slug: ${slug}`);
    }

    return stories[0]; // Return the first matching post
  } catch (error) {
    throw new Error(`Failed to fetch story by slug "${slug}": ${error}`);
  }
};
