export interface InSearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: InVideoDetails[];
}

export interface InVideoDetails {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: InThumbnails;
      medium: InThumbnails;
      high: InThumbnails;
      standard: InThumbnails;
      maxres: InThumbnails;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface InThumbnails {
  url: string;
  width: number;
  height: number;
}
