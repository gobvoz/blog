import { Profile } from 'entities/profile';
import { ArticleBlockType } from '../const/const';

interface ArticleBaseBlock {
  id: string;
  type: ArticleBlockType;
  content: string[];
}

export interface ArticleBlockParagraph extends ArticleBaseBlock {
  type: ArticleBlockType.PARAGRAPH;
}

export interface ArticleBlockHeader extends ArticleBaseBlock {
  type: ArticleBlockType.HEADER;
}

export interface ArticleBlockCode extends ArticleBaseBlock {
  type: ArticleBlockType.CODE;
}

export interface ArticleBlockSeparator extends ArticleBaseBlock {
  type: ArticleBlockType.SEPARATOR;
}

export interface ArticleBlockHint extends ArticleBaseBlock {
  type: ArticleBlockType.HINT;
}

export interface ArticleBlockImage extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE;
}

export type ArticleBlock =
  | ArticleBlockParagraph
  | ArticleBlockHeader
  | ArticleBlockCode
  | ArticleBlockSeparator
  | ArticleBlockHint
  | ArticleBlockImage;

export interface Article {
  id: string;
  profile: Profile;
  title: string;
  subtitle: string;
  image: string;
  createdAt: string;
  link: string;
  views: number;
  topics: string[];
  body: ArticleBlock[];
}
