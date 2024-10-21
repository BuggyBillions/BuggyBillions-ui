import Loader from "../../components/spinner/Spinner";

const SpinnersPage = () => {
  return (
    <div style={{ margin: '100px 20px 20px 40px' }}>
      <h3>Spinner Demo</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader size="104px" color="gray" duration="10"  />
          <Loader size="40px" duration="3" color="green" type="check" />
        </div>
      </div>
    </div>
  );
};

export default SpinnersPage;
