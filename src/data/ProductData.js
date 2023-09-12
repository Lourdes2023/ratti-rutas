import CoronaPlusViolet from "../assets/ImgFlores/1.svg";
import CoronaPlusOval from "../assets/ImgFlores/13.svg";
import CoronaClasicLarge from "../assets/ImgFlores/15.svg";
import CoronaPlusWhite from "../assets/ImgFlores/3.svg";
import CoronaClasicPlusCorazon from "../assets/ImgFlores/20.svg";
import CoronaClasicSmall from "../assets/ImgFlores/4.svg";
import CoronaPlusTriColor from "../assets/ImgFlores/5.svg";
import CoronaCorazonRosas from "../assets/ImgFlores/6.svg";
import CoronaCorazonColorPink from "../assets/ImgFlores/7.svg";
import CoronaCorazonColorWhite from "../assets/ImgFlores/8.svg";
import CoronaClasic from "../assets/ImgFlores/9.svg";
import CoronaPlusRosas from "../assets/ImgFlores/10.svg";
import CoronaClasicWhite from "../assets/ImgFlores/11.svg";
import CoronaClasicPink from "../assets/ImgFlores/12.svg";
import BouquetPlus from "../assets/ImgFlores/14.svg";
import BouquetPlusRosas from "../assets/ImgFlores/16.svg";
import BouquetPlusClasic from "../assets/ImgFlores/17.svg";
import BouquetPlusLirios from "../assets/ImgFlores/18.svg";
import BouquetPlusRosasLirios from "../assets/ImgFlores/19.svg";

export const ProductData = [
  {
    id: 1,
    title: "Plus Violeta",
    img: CoronaPlusViolet,
    desc: "Corona de flores compuesta con flores especiales",
    price: 54000,
    category: "Coronas",
  },
  {
    id: 2,
    title: "Oval Naranja",
    img: CoronaPlusOval,
    desc: "Corona oval de flores compuesta con flores especiales",
    price: 53000,
    category: "Coronas",
  },
  {
    id: 3,
    title: "Clasica Grande ",
    img: CoronaClasicLarge,
    desc: "Corona Funebre de Cabecera condolencias",
    price: 32000,
    category: "Coronas",
  },
  {
    id: 4,
    title: "clasica small",
    img: CoronaPlusWhite,
    desc: "Corona Funebre de Cabecera small condolencias",
    price: 30000,
    category: "Coronas",
  },
  {
    id: 5,
    title: "Corona Clasica Corazón",
    img: CoronaClasicPlusCorazon,
    desc: "Corona Funebre de Cabecera Corazón condolencias",
    price: 45000,
    category: "Coronas",
  },
  {
    id: 6,
    title: "Corona Personalizada",
    img: CoronaClasicSmall,
    desc: "Las coronas funerarias personalizadas son una opción para un tributo verdaderamente único y personal",
    price: 70000,
    category: "Coronas",
  },
  {
    id: 7,
    title: "Corona Personalizada Tres Colores",
    img: CoronaPlusTriColor,
    desc: "Las coronas funerarias personalizadas son una opción para un tributo verdaderamente único y personal",
    price: 70000,
    category: "Coronas",
  },
  {
    id: 8,
    title: "Corazón Rosas Blancas",
    img: CoronaCorazonRosas,
    desc: "Elaborada con amor  y respeto por nuestros experimentados diseñadores",
    price: 50000,
    category: "Coronas",
  },
  {
    id: 9,
    title: "Corazón  Blanco",
    img: CoronaCorazonColorPink,
    desc: "Elaborada con amor  y respeto por nuestros experimentados diseñadores",
    price: 50000,
    category: "Coronas",
  },
  {
    id: 10,
    title: "Corazón Rosa",
    img: CoronaCorazonColorWhite,
    desc: "Elaborada con amor  y respeto por nuestros experimentados diseñadores",
    price: 46000,
    category: "Coronas",
  },
  {
    id: 11,
    title: "Clasica Tradicional",
    img: CoronaClasic,
    desc: "Corona funeraria tradicional hechas de flores frescas, simbolizan la eternidad y el ciclo de la vida y la muerte",
    price: 59000,
    category: "Coronas",
  },
  {
    id: 12,
    title: "Corona de Rosas",
    img: CoronaPlusRosas,
    desc: "Corona funeraria tradicional hechas de Rosas",
    price: 43000,
    category: "Coronas",
  },
  {
    id: 13,
    title: "Corona tradicional Blanco",
    img: CoronaClasicWhite,
    desc: "Corona funeraria de respeto  sencilla y elegante",
    price: 40000,
    category: "Coronas",
  },
  {
    id: 14,
    title: "Corona Tradicional Rosa",
    img: CoronaClasicPink,
    desc: "Corona funeraria de respeto  sencilla y elegante,",
    price: 40000,
    category: "Coronas",
  },
  {
    id: 15,
    title: "Bouquet Tradicional Rosa",
    img: BouquetPlus,
    desc: "Bouquet funeraria de respeto  sencilla y elegante,",
    price: 32000,
    category: "Bouquet",
  },
  {
    id: 16,
    title: "Bouquet Tradicional Amarillo",
    img: BouquetPlusRosas,
    desc: "Bouquet funeraria de respeto  sencilla y elegante,",
    price: 32000,
    category: "Bouquet",
  },
  {
    id: 17,
    title: "Bouquet Personalizadas",
    img: BouquetPlusClasic,
    desc: "Bouquet funeraria de respeto  sencilla y elegante",
    price: 29000,
    category: "Bouquet",
  },
  {
    id: 18,
    title: "Bouquet Tradicional Mixto",
    img: BouquetPlusLirios,
    desc: "Bouquet funeraria de respeto  sencilla y elegante",
    price: 32000,
    category: "Bouquet",
  },
  {
    id: 19,
    title: "Bouquet Tradicional Blanco",
    img: BouquetPlusRosasLirios,
    desc: "Bouquet funeraria de respeto  sencilla y elegante",
    price: 35000,
    category: "Bouquet",
  },
];

export const ProductDataTotal = ProductData.length;

export const CategoriasProductos = ProductData.reduce(
  (accumulator, Product) => {
    if (!accumulator[Product.category]) {
      accumulator[Product.category] = [];
    }
    accumulator[Product.category] = [...accumulator[Product.category], Product];

    return accumulator;
  },
  {}
);
