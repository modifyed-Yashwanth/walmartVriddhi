export const fetchNewsRoomAnnouncements = async (pageSize = 3, page = 1) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=13&production[]=77&status[]=publish&per_page=${pageSize}&page=${page}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const announcements = await response.json();
    return announcements;
  } catch (error) {
    throw new Error(`Failed to fetch the success announcements: ${error}`);
  }
};

export const fetchNewsRoomVridhiNews = async (pageSize = 3, page = 1) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=125&production[]=77&status[]=publish&per_page=${pageSize}&page=${page}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const news = await response.json();
    return news;
  } catch (error) {
    throw new Error(`Failed to fetch the success news: ${error}`);
  }
};

export const fetchNewsroomAnnouncementBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=13&production[]=77&status[]=publish&slug=${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const announcements = await response.json();

    // WordPress returns an array even if there's only one match
    if (announcements.length === 0) {
      throw new Error(`No post found for slug: ${slug}`);
    }

    return announcements[0]; // Return the first matching post
  } catch (error) {
    throw new Error(`Failed to fetch story by slug "${slug}": ${error}`);
  }
};
