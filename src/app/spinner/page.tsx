import Loader from "../../components/spinner/Spinner";

const SpinnersPage = () => {
  return (
    <div>
      <h3>Spinner Demo</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '20px', textAlign: 'center' ,display:'flex' ,gap:'60px'}}>
          <Loader size="54px" color="gray" duration="20s" speed="111s"/>
          <Loader size="104px" color="#54baac" duration="20s" speed="10s"/>
        </div>
      </div>
    </div>
  );
};

export default SpinnersPage;
