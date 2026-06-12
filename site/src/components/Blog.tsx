"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BLOG_POSTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function BlogCard({ post, index }: { post: typeof BLOG_POSTS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.a
      href={post.href}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover:border-[#333] transition-colors duration-300 block"
    >
      <div className="relative aspect-video overflow-hidden bg-[#0d0d0d]">
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#f87800] text-xs font-bold tracking-[0.25em] uppercase opacity-40">{post.tag}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <span className="inline-block bg-[#f87800]/10 text-[#f87800] text-xs font-bold px-3 py-1 rounded-full mb-3">
          {post.tag}
        </span>
        <h3 className="text-white font-bold text-base leading-snug mb-4 group-hover:text-[#f87800] transition-colors duration-200">
          {post.title}
        </h3>
        <div className="flex items-center gap-3 text-[#555] text-xs">
          <span>{post.author}</span>
          <span>Â·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-[#f87800] text-xs font-bold tracking-[0.3em] uppercase block mb-4">Journal</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Dive into our blogs
            </h2>
          </div>
          <Link
            href="/blogs"
            className="shrink-0 inline-flex items-center gap-2 border border-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full hover:border-[#f87800] hover:text-[#f87800] transition-colors duration-200"
          >
            Read All Blogs
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
