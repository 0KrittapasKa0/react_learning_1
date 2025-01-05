let Items = (props) => {
  const {title, amount} = props;
    return (
      <>
        <li>{title} {amount}</li>
      </>
    );
  };
export default Items;