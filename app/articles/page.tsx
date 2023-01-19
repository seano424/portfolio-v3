import { PostType } from '@/lib/types'
import { getSortedPostsData } from '@/lib/posts'
import ArticlesPage from './ArticlesPage'

async function getPosts() {
  const posts: PostType[] = getSortedPostsData()
  return posts
}

export default async function Page() {
  const sortedPosts: PostType[] = await getPosts()
  return <ArticlesPage posts={sortedPosts} />
}
