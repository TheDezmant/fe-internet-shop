export interface ICategories {
  id: number;
  name: string;
  parentId: number;
  all?: boolean;
}

export interface IBrand {
  id: number;
  brand: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  img: string[];
  rating: number;
  brandId: number;
  categoriesId: number;
}
