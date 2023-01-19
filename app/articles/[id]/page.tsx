import Date from '@/components/Date'
import { PostType } from '@/lib/types'
import BackButton from '@/components/BackButton'
import { getAllPostIdsinApp, getPostData } from '@/lib/posts'

export async function generateStaticParams() {
  const paths = await getAllPostIdsinApp()
  return paths
}

async function getPost(params: { id: string }) {
  const post: PostType = await getPostData(params.id)
  return post
}

export default async function Article({ params }: { params: { id: string } }) {
  const post = await getPost(params)

  return (
    <section className="pl-base lg:pl-auto container pt-5 dark:text-white lg:pt-20">
      <div className="grid gap-3">
        <BackButton />
        <h1 className="text-4xl font-black capitalize tracking-tighter transition-all duration-100 ease-linear dark:text-white lg:text-6xl xl:text-6xl">
          {post.title}
        </h1>
        <Date dateString={post.date!} />
      </div>
      <div
        className="rich-text prose my-5 max-w-none dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
      />
    </section>
  )
}
