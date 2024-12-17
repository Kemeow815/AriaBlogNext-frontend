import "styles/PostContent.css"

import FancyBox from "components/thirdpartyjs/FancyBox";
import HLJSNum from "components/thirdpartyjs/HLJSNum";
import CodeCopier from "components/thirdpartyjs/CodeCopier";
import KaTex from "components/thirdpartyjs/KaTex";
import { TwikooBaseComment, TwikooCountPost } from "components/thirdpartyjs/Twikoo";
import Pangu from "components/thirdpartyjs/Pangu";
import TabPlugin from "components/thirdpartyjs/TabPlugin";

import PostEnd from "components/PostEnd";
import { Post } from "interfaces/post";
import MDToTSXWithPlugins from "./mdxlibs";

export default function PostContent({ mdContent, postInfo }: { mdContent: string, postInfo: Post }) {
  return (
    <article id="article-container" className="card-widget">
      <div id="post-maincontent">

        <MDToTSXWithPlugins mdContent={mdContent} />
      </div>
      <TabPlugin />
      <FancyBox />
      <HLJSNum />
      <CodeCopier />
      <KaTex />
      <PostEnd postInfo={postInfo} />
      <TwikooBaseComment />
      <TwikooCountPost />
      <Pangu container="article-container" />
    </article>
  );
}