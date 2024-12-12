/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  set: Set<number>;
  channel: BroadcastChannel;

  constructor() {
    this.set = new Set<number>([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

type Data = { type: 'Money'; value: { currency: string; amount: number } } | { type: 'Percent'; value: number };

export const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return data.value.amount;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled: never = data as never;
      throw new Error(`unknown type: ${data.type}`);
    }
  }
};
