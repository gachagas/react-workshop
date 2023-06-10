const GEMSTONES = ["aqua", "ruby", "opal", "sapphire", "jade"];

export const ItemList = () => {
  const itemlist = GEMSTONES.map((datum, index) => <button>{datum}</button>);

  return <>{itemlist}</>;
};
