'use client'

import { PostType } from '@/lib/types'
import ArticleCard from '@/components/ArticleCard'

type PostsProps = {
  posts: PostType[]
}

export default function ArticlesPage({ posts }: PostsProps) {
  return (
    <section className="pl-base lg:pl-auto py-base container grid gap-6">
      <h2 className="h1 flex gap-1">
        All Articles
        <span className="text-lg lg:text-xl">{posts.length}</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <div className="grid h-min gap-6" key={post.id}>
            <ArticleCard {...post} />
            {post.excerpt && (
              <p className="prose px-3 text-lg font-light text-primary-900 transition-all duration-100 ease-linear dark:text-white md:text-xl">
                {post.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
