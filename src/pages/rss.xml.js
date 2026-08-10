import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteContent } from '../data/site-content';

export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  return rss({
    title: `${siteContent.profile.name} — ${siteContent.navigation.writing}`,
    description: siteContent.metadata.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `/writing/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
