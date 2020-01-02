declare module 'enum-array' {
  interface EnumArrayObj {
    key: number;
    value: string;
  }
  function getEnumArray(emun: object): EnumArrayObj[];
  function getValueByEnum(key: number, obj: EnumArrayObj[]): string;
}
