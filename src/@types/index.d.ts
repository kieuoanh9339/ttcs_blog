export interface ICategory {
  slug: string;
  name: string;
  createdAt: string;
}

export interface IPost {
  id: number;
  thumbnail: {
    name: string;
    url: string;
  };
  title: string;
  category: {
    label: string;
    value: string;
  };
  content: string;
  createdAt?: string;
}
