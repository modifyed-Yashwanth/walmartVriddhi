export const fetchResourceHub = async () => {
  try {
    const response = await fetch(
      `https://docs.walmartvriddhi.org/wp-json/wp/v2/posts?_embed&categories[]=130&production[]=77&status[]=publish&per_page=${100}&page=${1}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const resources = await response.json();
    return resources;
  } catch (error) {
    throw new Error(`Failed to fetch the resources: ${error}`);
  }
};
