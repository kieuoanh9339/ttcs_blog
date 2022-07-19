import Button from "@atlaskit/button";
import EmptyState from "@atlaskit/empty-state";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../pictures/404.png";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper" style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center" }}>
      <EmptyState
        imageUrl={NotFoundImage}
        width="wide"
        maxImageHeight={200}
        maxImageWidth={200}
        header="Oops! Page not found..."
        description="We can't find the page you're looking for. Make sure the URL is correct and try again."
        primaryAction={
          <Button onClick={() => navigate(-1)} appearance="primary">
            Return to previous page
          </Button>
        }
      />
    </div>
  );
};
