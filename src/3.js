function ProductDetails(props) {
  return (
    <div style={styles.card}>
      <h2>{props.productname}</h2>
      <p>Price: ${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}
const styles = {
  card: {
    color: "black",
    backgroundColor: "yellow", 
    border: "1px solid #ca1e1eff",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    margin: "10px auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};


export default ProductDetails;
