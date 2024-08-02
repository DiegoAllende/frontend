export interface IProductUi {
  id: string;
  codeSap: string;
  codeEan: string;
  sku: string;
  name: string;
  price: number;
  pricePromoPay: number;
  priceOhPay: number;
  priceHighDiscount: number;
  pricePack: number;
  statusId: number;
  statusDes: string;
  stock: number;
  imageUrl: string;
}

export interface IProductApi {
  id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  brand: string;
  sapCode: string;
  eanCode: string;
  isLam: string;
  familyType: string;
  recurrent: boolean;
  howToConsume: any;
  imageList: IImageApi[];
  price: number;
  fractionatedPrice: number;
  prescription: string;
  precautions: string;
  sideEffects: string;
  favorite: boolean;
  concentration: any;
  presentation: string;
  quantityUnits: number;
  unitMeasure: string;
  fractionalMode: boolean;
  activePrinciples: string[];
  fractionatedForm: string;
  fractionatedText: string;
  noFractionatedText: string;
  productStatusId: number;
  productStatus: string;
  productStatusMessage: any;
  maxUnitSale: number;
  maxUnitSaleFractionated: number;
  categoryList: ICategoryApi[];
  stock: number;
  fractionalStock: number;
  stockRet: number;
  fractionalRetStock: number;
  showStockAlert: string;
  fractionatedSelected: any;
  unitPriceSelected: any;
  quantitySelected: number;
  subTotal: any;
  fractionalCore: boolean;
  quantityUnitsCore: number;
  limitOfferTime: any;
  slug: string;
  skuVariants: any[];
  details: IDetailApi[];
  presentationIdSelected: any;
  fractionatedPresentationId: number;
  presentationId: number;
  quantityUnitsFractionated: number;
  visiblePresentations: string[];
  pricePack: number;
  quantityUnitsPack: number;
  unitPrice: number;
  tagImageUrl: string;
  secondaryTagImageUrl: any;
  alertTagText: string;
  priceAllPaymentMethod: number;
  fractionatedPriceAllPaymentMethod: number;
  priceWithpaymentMethod: number;
  fractionatedPriceWithpaymentMethod: number;
  crossOutPL: boolean;
  crossOutFractionatedPL: boolean;
  paymentMethodCardType: string;
  unitPriceAllPaymentMethod: number;
  unitPriceWithPaymentMethod: number;
  subTotalAllPaymentMethod: any;
  subTotalWithPaymentMethod: any;
  priceHighDiscount: number;
  fractionatedPriceHighDiscount: number;
  unitPriceHighDiscount: number;
  subTotalHighDiscount: any;
  isFromSeller: boolean;
  sellerId: any;
  sellerName: any;
  ranking: number;
  itemsPack: any;
  totalAmountComponentPack: any;
  productPack: boolean;
  guaranteed: string;
  saleChannels: string[];
  complementary: string[];
  segment: string;
  skuMifarma: string;
  publishWithoutStock: boolean;
  priceTmpFromSellerCenter: boolean;
  pricePromoSellerCenter: number;
  productAliviamed: any;
  skuGenericSuggest: string;
  prescriptionCode: number;
  isUnitPresentationDefault: boolean;
  isGeneric: boolean;
}

export interface IImageApi {
  url: string;
  thumbnails: any[];
}

export interface ICategoryApi {
  id: number;
  name: string;
  categories: ICategoryApi[];
  keyword: string;
}

export interface IDetailApi {
  order: number;
  title: string;
  content: string;
  key: string;
}

