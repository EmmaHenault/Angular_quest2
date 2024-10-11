export interface Article {
    title: string;
    author: string;
    content: string;
    image: string;
    isPublished: boolean;
    comment?: string;  // Le commentaire est optionnel
  }
  