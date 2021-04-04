export interface Book {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  coverUrl: string;
  description: string;
  isRead: boolean;
}
