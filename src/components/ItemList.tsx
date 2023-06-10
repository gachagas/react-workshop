const GEMSTONES = ["aqua", "ruby", "opal", "sapphire", "jade"];

export const ItemList = () => {
  const message = <div>There is nothing here</div>;

  const itemlist = GEMSTONES.map((datum, index) => <button>{datum}</button>);

  return (
    <>
      {GEMSTONES.length === 0 && message}
      {itemlist}
    </>
  );
};
