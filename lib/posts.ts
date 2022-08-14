import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory: string = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '');
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data as { date: string; title: string },
    };
  });
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
}

export interface IPostId {
  params: {
    id: string
  }
}

export const getAllPostIds = (): IPostId[]  => {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  })
}

interface IPostData {
  id: string,
  title: string
  date: string,
  contentHtml: string,
}

export const getPostData = async (id: string): Promise<IPostData> => {
  const fullPath: string = path.join(postsDirectory, `${id}.md`);
  const fileContents: string = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
const contentHtml: string = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}
