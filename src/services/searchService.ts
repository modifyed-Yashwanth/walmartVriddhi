export const fetchSearchQuery = async (
  searchQuery = "",
  pageSize = 9,
  page = 1,
  categoryIds = [125, 12, 13] 
) => {
  try {
    // Build the URL dynamically
    let url = `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?per_page=${pageSize}&page=${page}&_embed=true`;

    if (searchQuery) {
      url += `&search=${searchQuery}`;
    }

    if (categoryIds && categoryIds.length > 0) {
      url += `&categories=${categoryIds.join(',')}`;
    }

    const response = await fetch(
      url, // Use the dynamically built URL
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Correctly calculate totalPages
    const totalPages = Number(response.headers.get("X-Wp-Total")) || 0;

    return { data, totalPages };
  } catch (error) {
    // Updated error message for clarity
    throw new Error(`Failed to fetch posts: ${error}`);
  }
};