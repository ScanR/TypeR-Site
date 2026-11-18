import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { formatDate, postPath } from "../news/format";
import type { Heading, LegalPage as Legal, Post, PostMeta } from "../news/posts";

// current: the nav entry to mark, src/news/main.tsx picks the same one
function Shell({ children, current = "/news/" }: { children: ReactNode; current?: string }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div id="nav-host">
        <Nav base="/" current={current} />
      </div>
      <main id="main">{children}</main>
      <Footer base="/" />
    </>
  );
}

function Dateline({ post }: { post: PostMeta }) {
  return (
    <p className="dateline">
      <span className="badge badge--soft">{post.version ? "Update" : "News"}</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
    </p>
  );
}

export function NewsIndex({ posts }: { posts: Post[] }) {
  const [latest, ...rest] = posts;
  return (
    <Shell>
      <header className="newshead">
        <div className="hero__lines" aria-hidden="true" />
        <div className="hero__dots" aria-hidden="true" />
        <div className="wrap newshead__in">
          <span className="tate" aria-hidden="true">続く</span>
          <div>
            <h1 className="h2">News</h1>
            <p className="sub">Every TypeR update, with its detailed changelog.</p>
          </div>
        </div>
      </header>
      <div className="wrap newsfeed">
        {latest && (
          <a className="lead-post" href={postPath(latest.slug)}>
            <span className="badge">Latest</span>
            <h2 className="lead-post__title">{latest.title}</h2>
            <p className="lead-post__summary">{latest.summary}</p>
            <p className="lead-post__foot">
              <time dateTime={latest.date}>{formatDate(latest.date)}</time>
              <span className="lead-post__more">Read the changelog</span>
            </p>
          </a>
        )}
        <PostList posts={rest} />
      </div>
    </Shell>
  );
}

export function PostList({ posts }: { posts: Pick<PostMeta, "slug" | "title" | "date" | "summary">[] }) {
  return (
    <ul className="postlist">
      {posts.map((post) => (
        <li key={post.slug}>
          <a href={postPath(post.slug)}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="postlist__title">{post.title}</span>
            <span className="postlist__summary">{post.summary}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Toc({ toc }: { toc: Heading[] }) {
  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc__title">On this page</p>
      <ul>
        {toc.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} dangerouslySetInnerHTML={{ __html: heading.text }} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function NewsPost({ post, newer, older }: { post: Post; newer?: PostMeta; older?: PostMeta }) {
  const hasToc = post.toc.length > 1;
  return (
    <Shell>
      <header className="newshead newshead--post">
        <div className="hero__lines" aria-hidden="true" />
        <div className="wrap">
          <a className="backlink" href="/news/">
            All news
          </a>
          <Dateline post={post} />
          <h1 className="post__title">{post.title}</h1>
          <p className="post__summary">{post.summary}</p>
        </div>
      </header>
      <div className={`wrap post${hasToc ? " post--toc" : ""}`}>
        {hasToc && <Toc toc={post.toc} />}
        <div className="post__body">
          {post.cover && <img className="post__cover" src={post.cover} alt="" />}
          <article className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          <nav className="pager" aria-label="More news">
            {older && (
              <a className="pager__older" href={postPath(older.slug)}>
                <span>Older</span>
                {older.title}
              </a>
            )}
            {newer && (
              <a className="pager__newer" href={postPath(newer.slug)}>
                <span>Newer</span>
                {newer.title}
              </a>
            )}
          </nav>
        </div>
      </div>
    </Shell>
  );
}

export function LegalPage({ page }: { page: Legal }) {
  return (
    <Shell current="">
      <header className="newshead newshead--post">
        <div className="hero__lines" aria-hidden="true" />
        <div className="wrap">
          <p className="dateline">
            <span className="badge badge--soft">Legal</span>
            <span>
              Last updated <time dateTime={page.date}>{formatDate(page.date)}</time>
            </span>
          </p>
          <h1 className="post__title">{page.title}</h1>
          <p className="post__summary">{page.summary}</p>
        </div>
      </header>
      <div className="wrap post post--toc">
        <Toc toc={page.toc} />
        <div className="post__body">
          <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </div>
    </Shell>
  );
}
