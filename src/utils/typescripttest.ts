// type mapped_types = 'a' | "b"
// type mapped_properties = {
//   [P in mapped_types]: string
// }

type Properties = "a" | "b";
type MappedType<T> = {
  [P in keyof T]: T[P];
};
type NewType = MappedType<Properties>;
