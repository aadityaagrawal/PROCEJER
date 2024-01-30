import "../App.css";

function FrontPageTexts() {
  return (
    <div className="container d-flex flex-column p-5 m-0">
      <p className="fs-1 mb-5 text-white responsive-width">
        ERP software specifically designed for small and medium-sized 
        manufacturing enterprises, emphasizing user-friendliness.
      </p>

      <ol className="text-white custom fs-5" >
        <li>
          Scale your business with software that is more user-friendly than
          other ERP.
        </li>
        <li>Cloud ERP software with no download required</li>
        <li>Implementation from day 1</li>
        <li>Save at least 1 hour/day by automating core functions.</li>
        <li>Achieve Higher Profitability | Prevent Order Delays.</li>
      </ol>
    </div>
  );
}

export default FrontPageTexts;
