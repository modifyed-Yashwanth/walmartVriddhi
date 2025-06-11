export const fetchTestimonials = async () => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/testimonials?_embed&status=publish`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch the success stories: ${error}`);
  }
};
