type StuffCategory =
  | 'Tas'
  | 'Busana'
  | 'Alat'
  | 'Kendaraan'
  | 'Alas Kaki'
  | 'Teknologi'
  | 'Kebun'
  | 'Buku'
  | 'Aksesoris';

type Stuff = {
  name: string;
  images: string[];
  link: string;
  description: string;
  category: StuffCategory;
  color: string;
  manufacture: { name: string; url?: string; country: string };
  orderDate: string;
  isLocal?: boolean
};
