/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = Category & {
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  type: 'Cost';
};

type Profit = {
  type: 'Profit';
};

type OperationData = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

type Operation = (OperationData & Profit) | (OperationData & Cost);

const fastRandString = (n: number) => {
  return [...Array(n)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const getRandomBoolean = () => {
  return !Math.round(Math.random());
};

const createRandomCategory = (): Category => {
  return {
    id: fastRandString(getRandomInt(4)),
    name: fastRandString(getRandomInt(15)),
    photo: getRandomBoolean() ? fastRandString(getRandomInt(20)) : '',
  };
};

export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: fastRandString(getRandomInt(4)),
    name: fastRandString(getRandomInt(15)),
    photo: fastRandString(getRandomInt(20)),
    desc: getRandomBoolean() ? fastRandString(getRandomInt(100)) : '',
    createdAt: createdAt,
    oldPrice: getRandomBoolean() ? getRandomInt(100000) : null,
    price: getRandomInt(100000),
    category: createRandomCategory(),
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: fastRandString(getRandomInt(4)),
    name: fastRandString(getRandomInt(15)),
    desc: getRandomBoolean() ? fastRandString(getRandomInt(100)) : '',
    createdAt: createdAt,
    amount: getRandomInt(20),
    category: createRandomCategory(),
    type: getRandomBoolean() ? 'Cost' : 'Profit',
  } as Operation;
};
