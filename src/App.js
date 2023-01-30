import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("CLick!");
  };
  return (
    <div>
      <div>
        <Button
          className="mb-5"
          onClick={handleClick}
          secondary
          outline
          rounded
        >
          <GoBell />
          click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload></GoCloudDownload>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase></GoDatabase> See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>
    </div>
  );
}

export default App;
